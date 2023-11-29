const mongoose = require("mongoose");

const wifiDetailsSchema = new mongoose.Schema({
  wifiName: { type: String, required: true },
  wifiProvider: { type: String, required: true },
  wifiPassword: { type: String, required: true },
  wifiSpeed: { type: String, required: true },
});

module.exports = mongoose.model("WifiDetails", wifiDetailsSchema);
