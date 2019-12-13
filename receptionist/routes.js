let express = require("express");
let router = express.Router();
let action = require("./actions");
let helper = require("../helper");

router.get("/reception", action.getAllReceptionists);
router.get("/rec/employee/:Id", action.getSpecificReceptionist);
router.post("/reception", action.addReceptionist);

module.exports = router;
