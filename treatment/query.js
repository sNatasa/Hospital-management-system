let connection = require("../database");

getAllTreatmentsQuery = () => {
    let query = "SELECT * FROM treatment";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
};

getSpecificTreatmentQuery = (treatmentId) => {
    let query = "SELECT * FROM treatment WHERE Id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [treatmentId], (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
};

createATreatmentQuery = (treat) => {
    const query = "INSERT INTO treatment (Treatment_type, Doctor_Id, Cost, Duration) VALUES (?,?,?,?)";
    return new Promise ((resolve,reject) => {
        connection.query(query, [treat.Treatment_type, treat.Doctor_Id, treat.Cost, treat.Duration], (error, results, fields) => {
            if(error) {
                reject (error);
            }
            else {
                resolve(results);
            }
        })
    })
}
module.exports = {
    getAllTreatmentsQuery,
    getSpecificTreatmentQuery,
    createATreatmentQuery
}
