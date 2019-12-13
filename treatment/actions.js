let query = require("./query");


getAllTreatments = async (req, res) => {
    try {
        let data = await query.getAllTreatmentsQuery();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("wrong route");
    }
};

getSpecificTreatment = async (req, res, next) => {
    const treatmentId = req.params.Id;
    try {
        let data = await query.getSpecificTreatmentQuery(treatmentId);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
};




module.exports = {
    getAllTreatments,
    getSpecificTreatment
}