let connection = require("../database");

getAllPatientsQuery = () => {
    let query = "SELECT * FROM patient";
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

specificPatientInfoQuery = (patientId) => {
    let query = "SELECT * FROM patient WHERE Id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [patientId], (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
};



updateOnAPatientsContactQuery = (contact, patientId) => {
    let query = "UPDATE patient SET Contact = ? WHERE Id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [contact, patientId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        })
    })
};

module.exports = {
    getAllPatientsQuery,
    updateOnAPatientsContactQuery,
    specificPatientInfoQuery
}