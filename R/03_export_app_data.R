# 03_export_app_data.R
# Export the latest-quarter rents for the interactive calculator in docs/.
#
# Input : data/processed/rent_long.csv  (from 01_clean_data.R)
# Output: docs/rent-data.js  (loaded by docs/index.html)

library(tidyverse)
library(jsonlite)

rent <- read_csv("data/processed/rent_long.csv", show_col_types = FALSE)

latest_q <- max(rent$quarter)
year_ago_q <- paste0(as.integer(str_sub(latest_q, 1, 4)) - 1, str_sub(latest_q, 5))

# For each big city: its CBS district (used to fill suppressed cells and to
# group the area picker), its CBS locality code (Yad2 search links use the same
# codes) and its Hebrew name for Madlan search links, written as \u escapes
# so the script runs the same in any locale
city_district <- tribble(
  ~area,           ~district,            ~cbs_code, ~hebrew,
  "Jerusalem",     "Jerusalem District", 3000,      "\u05d9\u05e8\u05d5\u05e9\u05dc\u05d9\u05dd",
  "Beit Shemesh",  "Jerusalem District", 2610,      "\u05d1\u05d9\u05ea \u05e9\u05de\u05e9",
  "Tel Aviv",      "Tel Aviv District",  5000,      "\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05d9\u05e4\u05d5",
  "Ramat Gan",     "Tel Aviv District",  8600,      "\u05e8\u05de\u05ea \u05d2\u05df",
  "Herzliya",      "Tel Aviv District",  6400,      "\u05d4\u05e8\u05e6\u05dc\u05d9\u05d4",
  "Holon",         "Tel Aviv District",  6600,      "\u05d7\u05d5\u05dc\u05d5\u05df",
  "Bat Yam",       "Tel Aviv District",  6200,      "\u05d1\u05ea \u05d9\u05dd",
  "Bnei Brak",     "Tel Aviv District",  6100,      "\u05d1\u05e0\u05d9 \u05d1\u05e8\u05e7",
  "Kfar Saba",     "Central District",   6900,      "\u05db\u05e4\u05e8 \u05e1\u05d1\u05d0",
  "Petah Tikva",   "Central District",   7900,      "\u05e4\u05ea\u05d7 \u05ea\u05e7\u05d5\u05d5\u05d4",
  "Rishon LeZion", "Central District",   8300,      "\u05e8\u05d0\u05e9\u05d5\u05df \u05dc\u05e6\u05d9\u05d5\u05df",
  "Rehovot",       "Central District",   8400,      "\u05e8\u05d7\u05d5\u05d1\u05d5\u05ea",
  "Netanya",       "Central District",   7400,      "\u05e0\u05ea\u05e0\u05d9\u05d4",
  "Haifa",         "Haifa District",     4000,      "\u05d7\u05d9\u05e4\u05d4",
  "Hadera",        "Haifa District",     6500,      "\u05d7\u05d3\u05e8\u05d4",
  "Ashdod",        "South District",     70,        "\u05d0\u05e9\u05d3\u05d5\u05d3",
  "Ashkelon",      "South District",     7100,      "\u05d0\u05e9\u05e7\u05dc\u05d5\u05df",
  "Be'er Sheva",   "South District",     9000,      "\u05d1\u05d0\u05e8 \u05e9\u05d1\u05e2"
)
stopifnot(setequal(city_district$area, unique(rent$area[rent$area_type == "City"])))

# Towns below CBS's 100,000-resident cut-off that users asked for. CBS publishes
# no rent for them, so each borrows the figures of its closest comparable big
# city and is flagged as an estimate.
proxy_towns <- tribble(
  ~area,       ~district,          ~cbs_code, ~hebrew,  ~proxy_for,
  "Ra'anana",  "Central District", 8700,      "\u05e8\u05e2\u05e0\u05e0\u05d4",  "Kfar Saba"
)

bands <- c("1-2", "2.5-3", "3.5-4", "4.5+")

latest <- rent |>
  filter(rooms %in% bands) |>
  group_by(area, rooms) |>
  summarise(
    area_type = first(area_type),
    # 4.5+ was redefined in 2026, so a year-on-year change would mix definitions
    yoy = if (first(rooms) == "4.5+" || !any(quarter == year_ago_q)) NA_real_
          else rent[quarter == latest_q] / rent[quarter == year_ago_q] - 1,
    se = se[quarter == latest_q],
    rent = rent[quarter == latest_q],   # last, so the lines above still see every quarter
    .groups = "drop"
  ) |>
  mutate(estimated = FALSE)

# Fill suppressed city cells (CBS hides 1-2 rooms in Kfar Saba and Beit Shemesh):
# city's next size band x the district's ratio between the two bands
filled <- city_district |>
  crossing(rooms = bands) |>
  anti_join(latest, by = c("area", "rooms")) |>
  mutate(next_band = bands[match(rooms, bands) + 1]) |>
  left_join(select(latest, area, next_band = rooms, city_next = rent),
            by = c("area", "next_band")) |>
  left_join(select(latest, district = area, rooms, dist_this = rent),
            by = c("district", "rooms")) |>
  left_join(select(latest, district = area, next_band = rooms, dist_next = rent),
            by = c("district", "next_band")) |>
  transmute(area, rooms, area_type = "City",
            rent = round(city_next * dist_this / dist_next, 1),
            se = NA_real_, yoy = NA_real_, estimated = TRUE)

latest <- bind_rows(latest, filled)

proxies <- proxy_towns |>
  select(area, proxy_for) |>
  inner_join(select(latest, proxy_for = area, rooms, rent), by = "proxy_for") |>
  transmute(area, rooms, area_type = "City", rent,
            se = NA_real_, yoy = NA_real_, estimated = TRUE)

latest <- bind_rows(latest, proxies)
stopifnot(!any(is.na(latest$rent)))

to_entry <- function(df) {
  df |>
    arrange(match(rooms, bands)) |>
    transmute(rooms, rent, se, yoy = round(yoy, 4), estimated)
}

areas <- latest |>
  distinct(area, area_type) |>
  left_join(bind_rows(city_district, proxy_towns), by = "area") |>
  mutate(district = if_else(area_type == "District", area, district),
         area_type = as.character(area_type)) |>
  arrange(factor(area_type, levels = c("City", "District", "National")), area)

payload <- list(
  quarter = latest_q,
  yearAgoQuarter = year_ago_q,
  source = "Israel Central Bureau of Statistics, Price Statistics Monthly, Table 4.9",
  areas = map(seq_len(nrow(areas)), \(i) {
    a <- areas[i, ]
    list(
      name = a$area,
      type = a$area_type,
      district = a$district,
      cbsCode = a$cbs_code,
      hebrew = a$hebrew,
      proxyFor = a$proxy_for,
      bands = to_entry(filter(latest, area == a$area))
    )
  })
)

dir.create("docs", showWarnings = FALSE)
# useBytes keeps the Hebrew names as UTF-8 even when R runs in a non-UTF-8 locale
writeLines(
  enc2utf8(c("// Generated by R/03_export_app_data.R - do not edit by hand",
    paste0("window.RENT_DATA = ", toJSON(payload, auto_unbox = TRUE, na = "null",
                                         digits = NA, pretty = TRUE), ";"))),
  "docs/rent-data.js",
  useBytes = TRUE
)

message(sprintf("App data: %d areas x %d size bands (%s)", nrow(areas), length(bands), latest_q))
