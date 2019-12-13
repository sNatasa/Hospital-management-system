let express = require("express");
let routes = express.Router();
let action = require("./actions");

routes.get("/patients", action.getAllPatients);
routes.get("/patients/:Id", action.specificPatientInfo);
routes.patch("/patient/:Id", action.updateOnAPatientsContact);

module.exports = routes;