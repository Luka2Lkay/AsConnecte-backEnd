const express = require("express");
const router = express.Router();
const {
  addWifiInfo,
  getAllWifiDetails,
  deleteAllDetails,
} = require("../controllers/wifi_details_controller");
const { verify } = require("../middlewares/verify");

router.post("/wifi-details", verify, addWifiInfo);
router.get("/get-all", getAllWifiDetails);
router.delete("/delete-all", deleteAllDetails);

module.exports = router;
