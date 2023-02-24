library(tidyverse)
library(jsonify)
crime <-read.csv('info340/assignments/project-azukiplus/data/SPD_2008_Present.csv')
organized_crime <- crime %>%
  select(Report.DateTime, MCPP, Offense, Offense.Parent.Group)

jsonify::to_json( organized_crime )

jsonData <- toJSON(organized_crime)

