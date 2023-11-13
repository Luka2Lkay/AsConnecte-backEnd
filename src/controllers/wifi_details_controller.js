const Reseller = require("../models/reseller_model");
const WifiDetails = require("../models/wifi_details_model");

const addWifiInfo = async (res, req) => {
  try {
    const { wifiName, wifiProvider, wifiPassword, wifiSpeed } = req.req.body;

    let registeredReseller;

    try {
      registeredReseller = await Reseller.findById(req.req.userId);
    } catch (error) {
      res.res.status(401).json({ message: "user not found!" });
    }

    const info = new WifiDetails({
      wifiName,
      wifiProvider,
      wifiPassword,
      wifiSpeed,
    });

    const addInfo = await info.save();
    registeredReseller.wifiDetails.push(info);
    registeredReseller.save();
    res.res.status(200).json(addInfo);
  } catch (error) {
    res.res.status(404).json({ message: error });
  }
};

const getAllWifiDetails = async (req, res) => {
  try {
    const details = await WifiDetails.find();

    res.status(200).json(details);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteAllDetails = async (req, res) => {
  try {
    await WifiDetails.deleteMany();

    res.status(200).json({ message: "Deleted all wifi details" });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { addWifiInfo, getAllWifiDetails, deleteAllDetails };
