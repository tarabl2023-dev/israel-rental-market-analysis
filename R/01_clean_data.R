# 01_clean_data.R
# Turn the wide CBS Table 4.9 extract into one tidy row per area x size x quarter.
#
# Input : data/raw/cbs_rent_table_4_9.csv
# Output: data/processed/rent_long.csv

library(tidyverse)

raw <- read_csv("data/raw/cbs_rent_table_4_9.csv", show_col_types = FALSE)

rent <- raw |>
  # rent_2023Q3, se_2023Q3, ... -> one column per measure, one row per quarter
  pivot_longer(
    cols = -c(area_type, area, rooms),
    names_to = c(".value", "quarter"),
    names_sep = "_"
  ) |>
  filter(!is.na(rent)) |>
  mutate(
    # Tidy up the CBS spellings / labels
    area = case_match(
      area,
      "center District" ~ "Central District",
      "Herzlliya"       ~ "Herzliya",
      "Petah Tiqwa"     ~ "Petah Tikva",
      "Rishon Lezion"   ~ "Rishon LeZion",
      "Bet Shemesh"     ~ "Beit Shemesh",
      "Beer Sheva"      ~ "Be'er Sheva",
      .default = area
    ),
    # CBS called the largest band "4.5-6" until mid-2025 editions and "4.5+"
    # afterwards. Up to Q4 2025 the numbers are identical; from Q1 2026 the band
    # also counts homes with more than 6 rooms. Keep one label plus a flag.
    size_def_2026 = rooms %in% c("4.5+", "4.5-6") & quarter >= "2026Q1",
    rooms = if_else(rooms == "4.5-6", "4.5+", rooms),
    rooms = factor(rooms, levels = c("All", "1-2", "2.5-3", "3.5-4", "4.5+")),
    area_type = factor(area_type, levels = c("National", "District", "City")),
    year = as.integer(str_sub(quarter, 1, 4)),
    q = as.integer(str_sub(quarter, 6, 6)),
    date = make_date(year, q * 3 - 2, 1),   # first month of the quarter
    se = as.numeric(se)
  ) |>
  select(area_type, area, rooms, quarter, date, rent, se, size_def_2026) |>
  arrange(area_type, area, rooms, date)

# Sanity checks: one row per key, all rents positive, 12 quarters
stopifnot(
  !any(duplicated(rent[c("area", "rooms", "quarter")])),
  all(rent$rent > 0),
  n_distinct(rent$quarter) == 12
)

write_csv(rent, "data/processed/rent_long.csv")

message(sprintf(
  "Clean data: %d rows | %d areas | %s to %s",
  nrow(rent), n_distinct(rent$area), min(rent$quarter), max(rent$quarter)
))
