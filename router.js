let express = require("express");

let router = express.Router();
let doctorRoutes = require("./doctors/routes");
let patientRoutes = require("./patient/routes");
let recordRoutes = require("./record/routes");
let treatmentRoutes = require("./treatment/routes");
let receptionRoutes = require("./receptionist/routes");

router.use(doctorRoutes);
router.use(patientRoutes);
router.use(recordRoutes);
router.use(treatmentRoutes);
router.use(receptionRoutes)

module.exports = router;