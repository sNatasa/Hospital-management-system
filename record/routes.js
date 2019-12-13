let express = require("express");
let router = express.Router();
let action = require("./action");

router.get("/records", action.getAllRecords);
router.get("/records/:Id", action.getSpecificRecord);
router.patch("/records/:Id", action.partialRecordUpdate);

module.exports = router;
