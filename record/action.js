let query = require("./query");


getAllRecords = async (req, res) => {
    try {
        let data = await query.getAllRecordsQuery();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

getSpecificRecord = async (req, res, next) => {
    const recordId = req.params.Id;
    try {
        const record = await getSpecificRecordQuery(recordId);
        console.log(record);
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


partialRecordUpdate = async (req, res) => {
    const recordRequest = req.body;
    const recordId = req.params.Id;

    try {
        await query.patrialRecordUpdateQuery(recordId, recordRequest);
        res.status(200).send("desctiption for this patient has been updated");
    } catch (error) {
        res.status(500).send(error.message);

    }
}




module.exports = {
    getAllRecords,
    getSpecificRecord,
    partialRecordUpdate
}