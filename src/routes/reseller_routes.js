const express = require("express")
const router = express.Router()
const {signUp, signin, getAllResellers} = require("../controllers/reseller_controller")

router.post("/signup", signUp)
router.post("/signin", signin)
router.get("/all-resellers", getAllResellers)

module.exports = router