let query = require("./query");



getAllPatients = async (req, res) => {
    try {
        let data = await query.getAllPatientsQuery();
        res.status(200).send(data);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

specificPatientInfo = async (req, res) => {
    const patientId = req.params.Id;
    try {
        let data = await query.specificPatientInfoQuery(patientId);
        res.status(200).send(data[0]);

    } catch (error) {
        res.status(500).send(error.message);
    }

}



updateOnAPatientsContact = async (req, res) => {
    try {
        await query.updateOnAPatientsContactQuery(req.body.Contact, req.params.Id);
        res.status(200).send(`contact on a patient with id ${req.params.Id} has been updated`);

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllPatients,
    updateOnAPatientsContact,
    specificPatientInfo
};