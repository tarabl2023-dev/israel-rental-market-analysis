# 04_export_living_costs.R
# Export public-transport access and everyday living costs for the calculator.
#
# Inputs : data/raw/osm_rail_stations.csv     (OpenStreetMap train / light rail / metro stops)
#          data/raw/cbs_hes_2021_table10.csv  (CBS Household Expenditure Survey 2021, Table 10)
#          data/raw/cbs_cpi_factors.csv       (CBS price-index change 2021 -> 2026 by group)
# Output : docs/living-data.js  (loaded by docs/index.html)

library(tidyverse)
library(jsonlite)

# ---- Public transport -------------------------------------------------------

# Our cities, keyed by the Wikidata id of their municipal boundary in OSM
city_wikidata <- c(
  Q1218 = "Jerusalem", Q152449 = "Beit Shemesh", Q33935 = "Tel Aviv", Q192807 = "Ramat Gan",
  Q152491 = "Herzliya", Q192213 = "Holon", Q208725 = "Bat Yam", Q152467 = "Bnei Brak",
  Q152436 = "Kfar Saba", Q190828 = "Petah Tikva", Q201051 = "Rishon LeZion", Q207350 = "Rehovot",
  Q192225 = "Netanya", Q41621 = "Haifa", Q471886 = "Hadera", Q171639 = "Ashdod",
  Q60956 = "Ashkelon", Q41843 = "Be'er Sheva", Q309164 = "Ra'anana"
)

# A few stations are named after the city they serve but sit just over its
# boundary (e.g. Kfar Saba-Nordau is inside Hod HaSharon). Count those for the
# city in their name.
named_for <- c("Kfar Sava" = "Kfar Saba", "Kfar Saba" = "Kfar Saba", "Ra'anana" = "Ra'anana",
               "Bat Yam" = "Bat Yam", "Holon" = "Holon")

stations <- read_csv("data/raw/osm_rail_stations.csv", show_col_types = FALSE,
                     col_types = cols(.default = "c")) |>
  mutate(lat = as.numeric(lat), lon = as.numeric(lon)) |>
  filter(!str_detect(name_he, "שרידים")) |>                       # ruins of historic stations
  mutate(
    kind = case_when(
      station %in% c("subway", "funicular") ~ "metro",              # Haifa Carmelit
      station == "light_rail" | railway == "tram_stop" ~ "light_rail",
      TRUE ~ "train"
    ),
    name = coalesce(na_if(name_en, ""), name_he),
    city = unname(city_wikidata[municipality_wikidata]),
    renamed = map_chr(name, \(n) {
      hit <- names(named_for)[str_starts(n, fixed(names(named_for)))]
      if (length(hit)) named_for[[hit[1]]] else NA_character_
    }),
    city = coalesce(renamed, city)
  ) |>
  # tram stops are often mapped once per platform; keep one per name
  distinct(city, kind, name, .keep_all = TRUE)

transit <- stations |>
  filter(!is.na(city)) |>
  count(city, kind) |>
  pivot_wider(names_from = kind, values_from = n, values_fill = 0) |>
  right_join(tibble(city = unname(city_wikidata)), by = "city") |>
  mutate(across(c(train, light_rail, metro), \(x) replace_na(x, 0L)))

message("Stations per city:")
print(arrange(transit, desc(train + light_rail + metro)), n = Inf)

# ---- Living costs -----------------------------------------------------------

hes_raw <- read_csv("data/raw/cbs_hes_2021_table10.csv", show_col_types = FALSE,
                    col_types = cols(.default = "c"))

# CBS marks estimates with a high sampling error as "(123)" and suppresses
# cells with too few observations as "~"
hes <- hes_raw |>
  pivot_longer(-item, names_to = "region", values_to = "raw") |>
  mutate(
    rough = str_detect(raw, "^\\("),
    value = suppressWarnings(as.numeric(str_remove_all(raw, "[()]")))
  )

national <- hes |> filter(region == "total") |> select(item, national = value)

hes <- hes |>
  filter(region != "total") |>
  left_join(national, by = "item") |>
  mutate(filled = is.na(value), value = coalesce(value, national))

wide <- hes |>
  select(region, item, value) |>
  pivot_wider(names_from = item, values_from = value)

cpi <- read_csv("data/raw/cbs_cpi_factors.csv", show_col_types = FALSE) |>
  select(cpi_code, factor_2021_to_2026) |>
  deframe()
f <- \(code) cpi[[as.character(code)]]

# Monthly NIS at 2026 prices. "per_std" items scale with household size (per
# CBS standard person); "per_hh" items are per household.
costs <- wide |>
  transmute(
    region,
    households = `Households in population (thousands)`,
    std_persons = `Average standard persons in household`,
    groceries_hh = (`Food (excl. vegetables and fruit)` - `Meals away from home`) * f(120050) +
      `Vegetables and fruit` * f(120040),
    eating_out_hh = `Meals away from home` * f(120050),
    utilities_hh = (Water + `Electricity, gas and fuel for dwelling`) * f(120520) +
      `Telephone and communications` * f(121320),
    arnona_hh = `Municipal property taxes (Arnona)` * f(120520),
    car_hh = `Expenditures on vehicles` * f(121320),
    education_hh = `Education services` * f(121050),
    leisure_hh = (`Culture, sport and entertainment events` + `Recreation and excursions` +
      `Hobbies, sports and camping equipment`) * f(121050),
    health_hh = (`Health insurance` + `Dental treatment` + `Expenditures on health services` +
      `Other expenditures on health`) * f(121230),
    clothing_hh = (`Clothing and footwear` + `Personal and cosmetic articles` +
      `Personal and cosmetic services`) * f(120850)
  )

per_std_items <- c("groceries", "eating_out", "utilities", "education", "leisure", "health", "clothing")
per_hh_items <- c("arnona", "car")

# Sub-districts making up each CBS district, for towns we only know the district of
district_regions <- list(
  "Jerusalem District" = "jerusalem",
  "North District"     = c("akko", "yizreel", "zefat_kinneret_golan"),
  "Haifa District"     = c("haifa", "hadera"),
  "Central District"   = c("sharon", "petah_tiqwa", "ramla", "rehovot"),
  "Tel Aviv District"  = c("tel_aviv", "ramat_gan", "holon"),
  "South District"     = c("ashqelon", "beer_sheva")
)

# Household-weighted averages: per standard person = total spend / total standard persons
summarise_region <- function(df) {
  hh <- df$households
  per_std <- map(set_names(per_std_items), \(i) sum(df[[paste0(i, "_hh")]] * hh) / sum(df$std_persons * hh))
  per_hh <- map(set_names(per_hh_items), \(i) sum(df[[paste0(i, "_hh")]] * hh) / sum(hh))
  map(c(per_std, per_hh), \(x) round(x, 1))
}

regions <- c(
  map(set_names(costs$region), \(r) summarise_region(filter(costs, region == r))),
  map(district_regions, \(r) summarise_region(filter(costs, region %in% r))),
  list(Israel = summarise_region(filter(costs, region != "judea_samaria")))
)

region_names <- c(
  judea_samaria = "Judea & Samaria", beer_sheva = "Be'er Sheva sub-district", ashqelon = "Ashkelon sub-district",
  holon = "Holon sub-district", ramat_gan = "Ramat Gan sub-district", tel_aviv = "Tel Aviv sub-district",
  rehovot = "Rehovot sub-district", ramla = "Ramla sub-district", petah_tiqwa = "Petah Tikva sub-district",
  sharon = "Sharon sub-district", hadera = "Hadera sub-district", haifa = "Haifa sub-district",
  akko = "Akko sub-district", yizreel = "Jezreel sub-district", zefat_kinneret_golan = "Zefat, Kinneret & Golan",
  jerusalem = "Jerusalem sub-district"
)

# CBS sub-district of each big city
city_region <- c(
  "Jerusalem" = "jerusalem", "Beit Shemesh" = "jerusalem", "Tel Aviv" = "tel_aviv",
  "Herzliya" = "tel_aviv", "Ramat Gan" = "ramat_gan", "Bnei Brak" = "ramat_gan",
  "Holon" = "holon", "Bat Yam" = "holon", "Kfar Saba" = "sharon", "Ra'anana" = "sharon",
  "Netanya" = "sharon", "Petah Tikva" = "petah_tiqwa", "Rishon LeZion" = "rehovot",
  "Rehovot" = "rehovot", "Haifa" = "haifa", "Hadera" = "hadera", "Ashdod" = "ashqelon",
  "Ashkelon" = "ashqelon", "Be'er Sheva" = "beer_sheva"
)

# Other towns people may type: CBS publishes no rent for them, so the
# calculator falls back to their district
other_towns <- tribble(
  ~town,               ~district,
  "Givatayim",         "Tel Aviv District",
  "Ramat HaSharon",    "Tel Aviv District",
  "Kiryat Ono",        "Tel Aviv District",
  "Or Yehuda",         "Tel Aviv District",
  "Hod HaSharon",      "Central District",
  "Rosh HaAyin",       "Central District",
  "Modi'in",           "Central District",
  "Ness Ziona",        "Central District",
  "Yavne",             "Central District",
  "Lod",               "Central District",
  "Ramla",             "Central District",
  "Yehud",             "Central District",
  "Shoham",            "Central District",
  "Gedera",            "Central District",
  "Kiryat Ata",        "Haifa District",
  "Kiryat Bialik",     "Haifa District",
  "Kiryat Motzkin",    "Haifa District",
  "Kiryat Yam",        "Haifa District",
  "Nesher",            "Haifa District",
  "Tirat Carmel",      "Haifa District",
  "Or Akiva",          "Haifa District",
  "Zikhron Ya'akov",   "Haifa District",
  "Pardes Hanna-Karkur", "Haifa District",
  "Nazareth",          "North District",
  "Nof HaGalil",       "North District",
  "Afula",             "North District",
  "Tiberias",          "North District",
  "Karmiel",           "North District",
  "Nahariya",          "North District",
  "Akko",              "North District",
  "Safed",             "North District",
  "Kiryat Shmona",     "North District",
  "Yokneam Illit",     "North District",
  "Eilat",             "South District",
  "Dimona",            "South District",
  "Kiryat Gat",        "South District",
  "Sderot",            "South District",
  "Netivot",           "South District",
  "Ofakim",            "South District",
  "Arad",              "South District",
  "Kiryat Malakhi",    "South District",
  "Mevaseret Zion",    "Jerusalem District"
)

flagged <- hes |>
  filter(rough | filled, region != "judea_samaria",
         item %in% c("Meals away from home", "Culture, sport and entertainment events",
                     "Recreation and excursions", "Hobbies, sports and camping equipment",
                     "Dental treatment", "Expenditures on health services")) |>
  count(region, name = "rough_cells")

payload <- list(
  transit = map(set_names(transit$city), \(c) {
    t <- filter(transit, city == c)
    list(train = t$train, lightRail = t$light_rail, metro = t$metro)
  }),
  stations = stations |>
    filter(!is.na(lat)) |>
    transmute(n = name, k = kind, c = city, la = round(lat, 5), lo = round(lon, 5)),
  costs = list(
    regions = regions,
    regionNames = as.list(c(region_names, set_names(names(district_regions)), Israel = "Israel")),
    cityRegion = as.list(city_region),
    otherTowns = as.list(deframe(other_towns)),
    passes = list(national = 315, periphery = 139),
    source = paste("CBS Household Expenditure Survey 2021 (Table 10, by sub-district),",
                   "brought to 2026 prices with the CBS price index for each group.")
  )
)

writeLines(
  enc2utf8(c("// Generated by R/04_export_living_costs.R - do not edit by hand",
    paste0("window.LIVING_DATA = ", toJSON(payload, auto_unbox = TRUE, na = "null",
                                           digits = NA, dataframe = "rows"), ";"))),
  "docs/living-data.js",
  useBytes = TRUE
)

message(sprintf("Living-cost data: %d stations, %d regions, %d extra towns",
                nrow(stations), length(regions), nrow(other_towns)))
