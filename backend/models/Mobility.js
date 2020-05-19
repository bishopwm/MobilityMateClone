const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobilitySchema = new Schema({
  country_region: String,
  country_region_code: String,
  date: String,
  grocery_and_pharmacy_percent_change_from_baseline: String,
  parks_percent_change_from_baseline: String,
  residential_percent_change_from_baseline: String,
  retail_and_recreation_percent_change_from_baseline: String,
  sub_region_1: String,
  sub_region_2: String,
  transit_stations_percent_change_from_baseline: String,
  workplaces_percent_change_from_baseline: String
});

const Mobility = mongoose.model('Mobility', mobilitySchema);

module.exports = Mobility;