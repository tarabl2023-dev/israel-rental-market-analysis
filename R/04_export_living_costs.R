# 04_export_living_costs.R
# Export public-transport access and everyday living costs for the calculator.
#
# Inputs : data/raw/osm_rail_stations.csv     (OpenStreetMap train / light rail / metro stops)
#          data/raw/cbs_hes_2021_table10.csv  (CBS Household Expenditure Survey 2021, Table 10)
#          data/raw/cbs_cpi_factors.csv       (CBS price-index change 2021 -> 2026 by group)
#          data/raw/cbs_hes_2021_table13.csv  (CBS Household Expenditure Survey 2021, Table 13, by religiosity)
#          data/raw/yad2_locations.csv        (Yad2 region / area / city codes for search links)
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

# ---- Shabbat ----------------------------------------------------------------

# Per standard person, households that keep Shabbat (religious + traditional)
# compared with secular ones, at 2026 prices
shabbat_raw <- read_csv("data/raw/cbs_hes_2021_table13.csv", show_col_types = FALSE,
                        col_types = cols(.default = "c")) |>
  pivot_longer(-item, names_to = "group", values_to = "raw") |>
  mutate(value = as.numeric(str_remove_all(raw, "[()]"))) |>
  select(-raw) |>
  pivot_wider(names_from = item, values_from = value)

shabbat_items <- c("Bread, cereals and pastry products", "Meat and poultry", "Fish",
                   "Sugar and sugar products", "Soft drinks", "Alcoholic beverages")

per_std <- shabbat_raw |>
  transmute(
    group,
    households = `Households in population (thousands)`,
    std = `Average standard persons in household`,
    shabbat_foods = rowSums(across(all_of(shabbat_items))) / std * f(120050),
    groceries = (`Food (excl. vegetables and fruit)` - `Meals away from home`) * f(120050) / std +
      `Vegetables and fruit` * f(120040) / std,
    eating_out = `Meals away from home` * f(120050) / std
  )

keepers <- per_std |>
  filter(group %in% c("religious", "traditional")) |>
  summarise(across(c(shabbat_foods, groceries, eating_out), \(x) weighted.mean(x, households * std)))
secular <- filter(per_std, group == "secular")

# Hosting: a guest at a Shabbat meal, costed at three times an average
# person-meal of groceries (national groceries per standard person / 90 meals)
person_meal <- regions$Israel$groceries / 90

shabbat <- list(
  extraPerStd = round(max(0, keepers$shabbat_foods - secular$shabbat_foods), 1),
  groceriesPerStd = list(keepers = round(keepers$groceries, 1), secular = round(secular$groceries, 1)),
  eatingOutPerStd = list(keepers = round(keepers$eating_out, 1), secular = round(secular$eating_out, 1)),
  guestMeal = round(person_meal * 3),
  personMeal = round(person_meal, 1)
)
message(sprintf("Shabbat: +%.0f NIS per standard person on Shabbat foods; guest meal %d NIS",
                shabbat$extraPerStd, shabbat$guestMeal))

# ---- Yad2 links -------------------------------------------------------------

yad2 <- read_csv("data/raw/yad2_locations.csv", show_col_types = FALSE)
city_yad2 <- tibble(area = names(city_region)) |>
  mutate(yad2_city = c(
    "Jerusalem" = 3000, "Beit Shemesh" = 2610, "Tel Aviv" = 5000, "Herzliya" = 6400, "Ramat Gan" = 8600,
    "Bnei Brak" = 6100, "Holon" = 6600, "Bat Yam" = 6200, "Kfar Saba" = 6900, "Ra'anana" = 8700,
    "Netanya" = 7400, "Petah Tikva" = 7900, "Rishon LeZion" = 8300, "Rehovot" = 8400, "Haifa" = 4000,
    "Hadera" = 6500, "Ashdod" = 70, "Ashkelon" = 7100, "Be'er Sheva" = 9000)[area]) |>
  bind_rows(tribble(
    ~area, ~yad2_city,
    "Givatayim", 6300, "Ramat HaSharon", 2650, "Hod HaSharon", 9700, "Rosh HaAyin", 2640,
    "Ness Ziona", 7200, "Yavne", 2660, "Tiberias", 6700, "Safed", 8000, "Karmiel", 1139,
    "Nahariya", 9100, "Akko", 7600, "Eilat", 2600, "Ofakim", 31, "Dimona", 2200,
    "Mevaseret Zion", 1015, "Afula", 7700, "Or Akiva", 1020, "Ariel", 3570, "Ma'ale Adumim", 3616,
    "Caesarea", 1167
  )) |>
  inner_join(yad2, by = "yad2_city")
stopifnot(all(names(city_region) %in% city_yad2$area))

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
  yad2 = map(set_names(city_yad2$area), \(a) {
    r <- filter(city_yad2, area == a)
    list(topArea = r$yad2_top_area, area = r$yad2_area, city = r$yad2_city)
  }),
  stations = stations |>
    filter(!is.na(lat)) |>
    transmute(n = name, k = kind, c = city, la = round(lat, 5), lo = round(lon, 5)),
  costs = list(
    regions = regions,
    regionNames = as.list(c(region_names, set_names(names(district_regions)), Israel = "Israel")),
    cityRegion = as.list(city_region),
    passes = list(national = 315, periphery = 139),
    shabbat = shabbat,
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

message(sprintf("Living-cost data: %d stations, %d regions", nrow(stations), length(regions)))
