# 02_analysis.R
# Explore how rent varies by city, district and dwelling size, and how it has
# moved over the last three years. Writes charts to figures/ and summary
# tables to output/.
#
# Input : data/processed/rent_long.csv  (from 01_clean_data.R)

library(tidyverse)
library(scales)

rent <- read_csv("data/processed/rent_long.csv", show_col_types = FALSE) |>
  mutate(rooms = factor(rooms, levels = c("All", "1-2", "2.5-3", "3.5-4", "4.5+")))

latest_q <- max(rent$quarter)                       # "2026Q2"
year_ago_q <- paste0(as.integer(str_sub(latest_q, 1, 4)) - 1, str_sub(latest_q, 5))
first_q <- min(rent$quarter)

# The default PNG font has no shekel glyph, so amounts are labelled "NIS"
nis <- label_comma(accuracy = 1)
quarter_label <- function(q) sub("Q", " Q", q)

# ---- Chart styling ----------------------------------------------------------
ink       <- "#1f1f1e"
ink_muted <- "#6b6a66"
grid_col  <- "#e6e5e1"
blue      <- "#2a78d6"
size_cols <- c("1-2" = "#2a78d6", "2.5-3" = "#eb6834",
               "3.5-4" = "#1baf7a", "4.5+" = "#eda100")

theme_rent <- function() {
  theme_minimal(base_size = 12) +
    theme(
      plot.title = element_text(face = "bold", colour = ink, size = 15),
      plot.subtitle = element_text(colour = ink_muted, margin = margin(b = 10)),
      plot.caption = element_text(colour = ink_muted, size = 9, hjust = 0),
      plot.title.position = "plot",
      plot.caption.position = "plot",
      axis.text = element_text(colour = ink_muted),
      axis.title = element_text(colour = ink_muted),
      panel.grid.major = element_line(colour = grid_col, linewidth = 0.3),
      panel.grid.minor = element_blank(),
      strip.text = element_text(face = "bold", colour = ink, hjust = 0),
      legend.position = "top",
      legend.justification = "left",
      legend.title = element_text(colour = ink_muted),
      plot.background = element_rect(fill = "white", colour = NA),
      plot.margin = margin(16, 20, 12, 16)
    )
}

source_note <- paste(
  "Source: Israel Central Bureau of Statistics (CBS), Price Statistics Monthly,",
  "Table 4.9 - average monthly rent of new and renewed contracts."
)

save_fig <- function(plot, file, width = 9, height = 6) {
  ggsave(file.path("figures", file), plot, width = width, height = height,
         dpi = 200, bg = "white")
}

cities <- rent |> filter(area_type == "City")

# ---- 1. Which cities are the most expensive? --------------------------------
city_latest <- cities |>
  filter(quarter == latest_q, rooms == "All") |>
  mutate(area = fct_reorder(area, rent))

national_latest <- rent |>
  filter(area == "Israel", rooms == "All", quarter == latest_q) |>
  pull(rent)

p1 <- ggplot(city_latest, aes(rent, area)) +
  geom_col(fill = blue, width = 0.7) +
  geom_errorbarh(aes(xmin = rent - 1.96 * se, xmax = rent + 1.96 * se),
                 height = 0.3, colour = ink_muted, linewidth = 0.4) +
  geom_vline(xintercept = national_latest, linetype = "dashed", colour = ink) +
  annotate("text", x = national_latest, y = 1.2, hjust = -0.05, size = 3.4,
           colour = ink, label = paste("Israel average", nis(national_latest), "NIS")) +
  geom_text(aes(x = 80, label = nis(rent)), hjust = 0, size = 3.1, colour = "white") +
  scale_x_continuous(labels = nis, expand = expansion(mult = c(0, 0.05))) +
  labs(
    title = "Tel Aviv rent is more than double Be'er Sheva's",
    subtitle = paste0("Average monthly rent, all dwelling sizes, ",
                      quarter_label(latest_q), " (whiskers show 95% confidence interval)"),
    x = "NIS per month", y = NULL, caption = source_note
  ) +
  theme_rent() +
  theme(panel.grid.major.y = element_blank())

save_fig(p1, "01_rent_by_city.png", height = 7)

# ---- 2. How much more do bigger homes cost? ---------------------------------
size_latest <- cities |>
  filter(quarter == latest_q, rooms != "All") |>
  left_join(select(city_latest, area, city_avg = rent), by = "area") |>
  mutate(area = fct_reorder(area, city_avg))

p2 <- ggplot(size_latest, aes(rent, area)) +
  geom_line(aes(group = area), colour = grid_col, linewidth = 1.6) +
  geom_point(aes(colour = rooms), size = 3.2) +
  scale_colour_manual(values = size_cols, name = "Rooms") +
  scale_x_continuous(labels = nis) +
  labs(
    title = "Bigger homes cost more everywhere - but the gap varies a lot",
    subtitle = paste0("Average monthly rent by number of rooms, ", quarter_label(latest_q),
                      ". Israeli room counts include the living room."),
    x = "NIS per month", y = NULL,
    caption = paste(source_note, "\n1-2 room figures for Kfar Saba and Beit Shemesh",
                    "are suppressed by CBS (too few observations).")
  ) +
  theme_rent() +
  theme(panel.grid.major.y = element_blank())

save_fig(p2, "02_rent_by_size.png", height = 7)

# ---- 3. City x size heatmap -------------------------------------------------
p3 <- ggplot(size_latest, aes(rooms, area, fill = rent)) +
  geom_tile(colour = "white", linewidth = 1.2) +
  geom_text(aes(label = comma(rent, accuracy = 1),
                colour = rent > 7000), size = 3.2) +
  scale_colour_manual(values = c(`TRUE` = "white", `FALSE` = ink), guide = "none") +
  scale_fill_distiller(palette = "Blues", direction = 1, labels = nis,
                       name = "NIS per month") +
  labs(
    title = "Rent grid: city x dwelling size",
    subtitle = paste0("Average monthly rent in NIS, ", quarter_label(latest_q)),
    x = "Rooms", y = NULL,
    caption = paste(source_note, "\nBlank cells: suppressed by CBS (too few observations).")
  ) +
  theme_rent() +
  theme(panel.grid.major = element_blank(), legend.key.width = unit(1.6, "cm"))

save_fig(p3, "03_city_size_heatmap.png", width = 8, height = 8)

# ---- 4. Trend by district ---------------------------------------------------
district_trend <- rent |>
  filter(area_type == "District", rooms == "All") |>
  mutate(area = str_remove(area, " District"))

national_trend <- rent |>
  filter(area == "Israel", rooms == "All") |>
  select(date, national = rent)

district_growth <- district_trend |>
  group_by(area) |>
  summarise(growth = last(rent) / first(rent) - 1, end = last(rent), .groups = "drop") |>
  arrange(desc(end))

district_trend <- district_trend |>
  mutate(area = factor(area, levels = district_growth$area))

p4 <- ggplot(district_trend, aes(date, rent)) +
  geom_line(data = national_trend, aes(y = national), colour = ink_muted,
            linetype = "dashed", linewidth = 0.5) +
  geom_line(colour = blue, linewidth = 1) +
  geom_point(data = \(d) filter(d, date == max(date)), colour = blue, size = 2.2) +
  geom_text(data = district_growth |>
              mutate(area = factor(area, levels = district_growth$area)),
            aes(x = min(district_trend$date), y = Inf,
                label = paste0("+", percent(growth, accuracy = 0.1), " since ",
                               quarter_label(first_q))),
            hjust = 0, vjust = 1.4, size = 3.1, colour = ink, inherit.aes = FALSE) +
  facet_wrap(~area, nrow = 2) +
  scale_y_continuous(labels = nis) +
  scale_x_date(date_labels = "%Y", date_breaks = "1 year") +
  labs(
    title = "Rents rose in every district over the last three years",
    subtitle = paste0("Average monthly rent, all sizes, ", quarter_label(first_q), " to ",
                      quarter_label(latest_q), ". Dashed line = Israel average."),
    x = NULL, y = "NIS per month", caption = source_note
  ) +
  theme_rent()

save_fig(p4, "04_trend_by_district.png", width = 10, height = 6.5)

# ---- 5. Year-on-year growth by city -----------------------------------------
growth <- cities |>
  filter(rooms == "All", quarter %in% c(year_ago_q, latest_q)) |>
  select(area, quarter, rent) |>
  pivot_wider(names_from = quarter, values_from = rent) |>
  mutate(yoy = .data[[latest_q]] / .data[[year_ago_q]] - 1,
         area = fct_reorder(area, yoy))

national_yoy <- rent |>
  filter(area == "Israel", rooms == "All", quarter %in% c(year_ago_q, latest_q)) |>
  arrange(quarter) |>
  summarise(yoy = last(rent) / first(rent) - 1) |>
  pull(yoy)

p5 <- ggplot(growth, aes(yoy, area)) +
  geom_col(fill = blue, width = 0.7) +
  geom_vline(xintercept = national_yoy, linetype = "dashed", colour = ink) +
  geom_text(aes(x = 0.001, label = percent(yoy, accuracy = 0.1)), hjust = 0,
            size = 3.1, colour = "white") +
  scale_x_continuous(labels = label_percent(accuracy = 1),
                     expand = expansion(mult = c(0, 0.12))) +
  labs(
    title = "Beit Shemesh is the fastest-rising rental market",
    subtitle = paste0("Change in average monthly rent, ", quarter_label(year_ago_q),
                      " to ", quarter_label(latest_q), ", all dwelling sizes. ",
                      "Dashed line = Israel (", percent(national_yoy, accuracy = 0.1), ")"),
    x = NULL, y = NULL, caption = source_note
  ) +
  theme_rent() +
  theme(panel.grid.major.y = element_blank())

save_fig(p5, "05_yoy_growth_by_city.png", height = 7)

# ---- 6. Growth by dwelling size (national) ----------------------------------
# 4.5+ is left out because its definition changed in 2026 (see 01_clean_data.R)
size_trend <- rent |>
  filter(area == "Israel", rooms %in% c("1-2", "2.5-3", "3.5-4")) |>
  group_by(rooms) |>
  mutate(index = rent / first(rent) * 100) |>
  ungroup()

p6 <- ggplot(size_trend, aes(date, index, colour = rooms)) +
  geom_hline(yintercept = 100, colour = ink_muted, linewidth = 0.3) +
  geom_line(linewidth = 1) +
  geom_point(data = \(d) filter(d, date == max(date)), size = 2.4) +
  # 2.5-3 and 3.5-4 end on the same value, so nudge their labels apart
  geom_text(data = \(d) filter(d, date == max(date)) |>
              mutate(label_y = index + c(0, -0.3, 0.3)[as.integer(fct_drop(rooms))]),
            aes(y = label_y, label = paste0(rooms, " rooms  +", round(index - 100, 1), "%")),
            hjust = -0.1, size = 3.3, colour = ink, show.legend = FALSE) +
  scale_colour_manual(values = size_cols, name = "Rooms") +
  scale_x_date(date_labels = "%Y", date_breaks = "1 year",
               expand = expansion(mult = c(0.02, 0.25))) +
  labs(
    title = "Small 1-2 room flats have risen the least since 2023",
    subtitle = paste0("Israel average rent indexed to ", quarter_label(first_q), " = 100"),
    x = NULL, y = "Index", caption = source_note
  ) +
  theme_rent()

save_fig(p6, "06_growth_by_size.png", height = 5.5)

# ---- Summary tables ---------------------------------------------------------
size_premium <- cities |>
  filter(quarter == latest_q, rooms %in% c("1-2", "3.5-4")) |>
  select(area, rooms, rent) |>
  pivot_wider(names_from = rooms, values_from = rent) |>
  filter(!is.na(`1-2`)) |>
  mutate(premium_3_5_to_4_vs_1_2 = `3.5-4` / `1-2` - 1) |>
  arrange(desc(premium_3_5_to_4_vs_1_2))

three_year <- cities |>
  filter(rooms == "All", quarter %in% c(first_q, latest_q)) |>
  select(area, quarter, rent) |>
  pivot_wider(names_from = quarter, values_from = rent) |>
  mutate(change_3yr = .data[[latest_q]] / .data[[first_q]] - 1)

city_summary <- city_latest |>
  select(city = area, avg_rent = rent, sampling_error = se) |>
  left_join(select(growth, city = area, yoy_change = yoy), by = "city") |>
  left_join(select(three_year, city = area, change_since_2023Q3 = change_3yr), by = "city") |>
  arrange(desc(avg_rent))

write_csv(city_summary, "output/city_summary_latest.csv")
write_csv(size_premium, "output/size_premium_by_city.csv")
write_csv(district_growth, "output/district_growth.csv")

# ---- Print the headline numbers ---------------------------------------------
cat("\nLatest quarter:", latest_q, "\n")
cat("Israel average rent:", nis(national_latest), "NIS | YoY:", percent(national_yoy, 0.1), "\n\n")
cat("City summary:\n"); print(city_summary, n = Inf)
cat("\nSize premium (3.5-4 vs 1-2 rooms):\n"); print(size_premium, n = Inf)
cat("\nDistrict growth since", first_q, ":\n"); print(district_growth)
cat("\nNational growth by size:\n")
print(size_trend |> filter(date == max(date)) |> select(rooms, rent, index))
