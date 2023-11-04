const express = require("express")
const router = express.Router()
const {signUp, signin, getAllResellers, updatePassword, deleteResellers} = require("../controllers/reseller_controller")
const {verify} = require("../middlewares/verify")

router.post("/signup", signUp)
router.post("/signin", signin)
router.get("/all-resellers", getAllResellers)
router.put("/change-password/:id", updatePassword)
router.delete("/delete-resellers", deleteResellers)

module.exports = router