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
