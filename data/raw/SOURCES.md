# Data source

**Israel Central Bureau of Statistics (CBS)**, *Price Statistics Monthly*, Chapter A (Consumer Price Index),
**Table 4.9 - Average Monthly Prices of Rent (NIS), by Residential District, Big Cities and Size Group (Rooms)**.

Each monthly edition of the table covers the latest seven quarters. To get a three-year series
(Q3 2023 - Q2 2026), the English-language Excel version of Table 4.9 was taken from these editions
and combined, always keeping the value from the **most recent edition** that reports a quarter
(CBS revises recent quarters as late contracts come in):

| Edition | Quarters used | File |
|---|---|---|
| September 2026 | Q4 2024 - Q2 2026 | https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price09a/a4_9_e.xlsx |
| June 2026 | Q3 2024 | https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price06a/a4_9_e.xlsx |
| March 2026 | Q1 - Q2 2024 | https://www.cbs.gov.il/he/publications/Madad/DocLib/2026/price03a/a4_9_e.xlsx |
| September 2025 | Q4 2023 | https://www.cbs.gov.il/he/publications/Madad/DocLib/2025/price09a/a4_9_e.xlsx |
| June 2025 | Q3 2023 | https://www.cbs.gov.il/he/publications/Madad/DocLib/2025/price06a/a4_9_e.xlsx |

`cbs_rent_table_4_9.csv` keeps the CBS layout (one row per area and size band, one rent column and
one sampling-error column per quarter) and the CBS spellings. All cleaning happens in `R/01_clean_data.R`.

## Notes from CBS

- Rents are averages over new and renewed contracts in the quarter; changes between quarters include
  changes in the mix and quality of dwellings.
- `se_*` columns are CBS sampling errors (NIS).
- Big cities = over 100,000 residents.
- Room counts follow Israeli convention: the living room counts as a room (a "3-room" flat has two bedrooms).
- The largest size band was published as **4.5-6 rooms** in older editions and **4.5+ rooms** from 2026.
  CBS recalculated it from Q1 2026 to include homes with more than 6 rooms; earlier quarters are unchanged.
- 1-2 room figures for Kfar Saba and Beit Shemesh are suppressed by CBS (too few observations).

# Other sources (calculator)

- **`cbs_hes_2021_table10.csv`**: CBS Household Expenditure Survey 2021, Table 10 "Monthly income and consumption expenditure per household, by sub-district" (https://www.cbs.gov.il/he/publications/DocLib/2023/1924_household_income_expenditure_2021/t10.xls). Selected rows, values as published: `(123)` = high sampling error, `~` = too few observations.
- **`cbs_cpi_factors.csv`**: change in the CBS consumer price index by main group from 2021 to 2026, from the CBS price index API linkage calculator (https://api.cbs.gov.il/index/data/calculator/).
- **`osm_rail_stations.csv`**: Israeli train stations, light-rail stops and Carmelit stations with the municipality each lies in, from OpenStreetMap via the Overpass API (© OpenStreetMap contributors, ODbL).
- Rav-Kav monthly pass prices (₪315 nationwide, ₪139 periphery bus-only): https://ravkavonline.co.il/en/ravkav-monthly-seasonal-contract
- **`cbs_hes_2021_table13.csv`**: CBS Household Expenditure Survey 2021, Table 13 "Monthly income and consumption expenditure per Jewish household, by level of religiosity" (https://www.cbs.gov.il/he/publications/DocLib/2023/1924_household_income_expenditure_2021/t13.xls). Selected rows, values as published.
- **`yad2_locations.csv`**: Yad2 region (`topArea`), area and city codes, from the open-source project https://github.com/ron-levi/yad2-analyzer (`scraper/cache/locations.json`, updated 2025-12-08). City codes match CBS locality codes.
- **`beach_neighbourhoods.csv`**: which Realta neighbourhoods count as "by the beach" (local knowledge, not official data). `yad2_hood` is filled only where the Yad2 neighbourhood code was confirmed (Herzliya Pituach = 170).
- **`places.csv`**: each town's English name, Realta slug, CBS district and CBS sub-district (used for living costs). Judea & Samaria towns use the CBS Judea & Samaria survey area.

# Asking rents today (Realta snapshot, 26 Oct 2026)

Realta (https://realta.co.il) aggregates live rental listings from Yad2, Madlan, OnMap, Homeless, Komo and Facebook
and publishes rent-price pages per town (`/he/<town>/rent-prices/`) with the median asking rent by room count and the
average asking rent per neighbourhood. The pages were read in a browser on 26 Oct 2026 (respecting the site's
robots.txt, which allows user-requested AI access with a 2-second delay) and transcribed; each file was checked
byte for byte (SHA-256) against the browser copy.

| File | Contents | SHA-256 |
|---|---|---|
| `realta_city_rooms_2026-10-26.csv` | 60 towns by English name: listings, median, mean, and median + listing count for 1-6 rooms (6 = 6+) | `5f60fbb0177a5a0f236b2c943b9b8e3870b2dfea9a43bd85ce1b810865be7d9d` |
| `realta_town_rooms_2026-10-26.csv` | 34 smaller towns by Realta slug, same columns plus Hebrew name (towns with 20+ listings) | `f34e17a4cd9086a6ceda7f24bb407798fce059c30b1e023b4d9758bdfbb5e928` |
| `realta_neighbourhood_rents_2026-10-26.csv` | 1,035 neighbourhoods: town slug, neighbourhood slug, Hebrew name, mean asking rent, listings | `acf6ce8f8bf68db3ed7f7b2a8157bab96748d3e77497233d52f8fdeea4102ac0` |

Notes: asking rents are what landlords ask, not signed contracts. Neighbourhood averages mix all flat sizes. Room cells
with fewer than 3 listings are treated as missing by `R/05_export_market_data.R`.
