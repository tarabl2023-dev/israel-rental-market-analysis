# Rebuild everything: clean data -> charts + summary tables.
# Run from the project root:  Rscript run_all.R

source("R/01_clean_data.R")
source("R/02_analysis.R")
source("R/03_export_app_data.R")
