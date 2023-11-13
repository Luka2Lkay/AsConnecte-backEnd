const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const resellerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  confirmPassword: { type: String, required: true, unique: true },
  wifiDetails: [{type: mongoose.Types.ObjectId, ref: "ifiDetails"}]
});

resellerSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Reseller", resellerSchema);
