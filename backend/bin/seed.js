const mongoose = require("mongoose");
const Mobility = require("../models/Mobility");
const mobilityDataJson = require('../test_seed.json');
mongoose.connect("mongodb://localhost/ironplate", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const mobilityData = mobilityDataJson

Mobility.insertMany(mobilityData)
.then((data) => {
  console.log("Success");
  mongoose.connection.close();
})
.catch((err) => {
  console.log(err);
});