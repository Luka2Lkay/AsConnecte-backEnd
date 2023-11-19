const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const resellerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  confirmPassword: { type: String, required: true},
  wifiDetails: [{type: mongoose.Types.ObjectId, ref: "WifiDetails"}]
});

resellerSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Reseller", resellerSchema);
