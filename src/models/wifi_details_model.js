const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const wifiDetailsSchema = new mongoose.Schema({
  wifiName: { type: String, required: true, unique: true },
  wifiProvider: { type: String, required: true, unique: true },
  wifiPassword: { type: String, required: true, unique: true },
  wifiSpeed: { type: String, required: true, unique: true }
});

wifiDetailsSchema.plugin(uniqueValidator);
module.exports = mongoose.model("WifiDetails", wifiDetailsSchema);