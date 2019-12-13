let query = require("./queries");
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

getAllReceptionists = async (req, res) => {
    try {
        let data = await query.getAllReceptionistsQuery();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

getSpecificReceptionist = async (req, res) => {
    const receptionistId = req.params.Id;
    try {

        const receptionist = await getAllReceptionistsQuery(receptionistId);
        // console.log(receptionistId);
        res.status(200).send(receptionist[receptionistId]);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

addReceptionist = async (req, res) => {
    try {
        const recRequest = req.body;
        await query.addReceptionistQuery(recRequest);
        res.status(201).send(" say hi to the new receptionist ");
    } catch (error) {
        res.status(500).send(error.message);
    }
};









module.exports = {
    getAllReceptionists,
    getSpecificReceptionist,
    addReceptionist,
   
}