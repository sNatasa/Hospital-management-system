let express = require("express");
let router = express.Router();
let action = require("./actions");
let helper = require("../helper");

router.get("/doctors", action.getAllDoctors);

router.post("/doctors", helper.usernameValidator, action.createNewDoctor);
router.post("/login" ,  action.loginDoctor);

module.exports = router;
