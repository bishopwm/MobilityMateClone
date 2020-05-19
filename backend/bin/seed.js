require('dotenv').config();
const mongoose = require("mongoose");
const Mobility = require("../models/Mobility");
const mobilityDataJson = require('../google_mobility_export.json');
// mongoose.connect("mongodb://localhost/ironplate", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });




console.log(process.env.MONGODB_URI)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ironplate'
console.log('Connecting DB to ', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

  Mobility.insertMany(mobilityDataJson)
.then((data) => {
  console.log("Success");
  mongoose.connection.close();
})
.catch((err) => {
  console.log(err);
});