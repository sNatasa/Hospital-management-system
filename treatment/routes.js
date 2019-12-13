let express = require("express");
let router = express.Router();
let action = require("./actions");


router.get("/treatments", action.getAllTreatments);
router.get("/treatments/:Id", action.getSpecificTreatment);


module.exports = router;