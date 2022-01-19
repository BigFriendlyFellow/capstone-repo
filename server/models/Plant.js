const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  plantName: String,
  climateZone: Number,
  temperatureMinimum: Number,
  frostFreeDaysMinimum: Number,
  precipitationMaximumInInches: Number,
  precipitationMinimumInInches: Number,
  droughtTolerance: String,
  shadeTolerance: String,
  edibleForHumans: Boolean
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = {
  schema: plantSchema,
  model: Plant
};

// example data:
// {
//   plantName: "Alpine Bearberry",
//   climateZone: 1,
//   temperatureMinimum: -60,
//   frostFreeDaysMinimum: 120,
//   precipitationMaximumInInches: 197,
//   precipitationMinimumInInches: 12,
//   droughtTolerance: "None",
//   shadeTolerance: "Intermediate",
//   edibleForHumans: true
// }
