let connection = require("../database");


getAllRecordsQuery = () => {
    let query = "SELECT * FROM record";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        })
    })
};

getSpecificRecordQuery = (recordId) => {
    let query = "SELECT * FROM record WHERE Id = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [recordId], (err, results, fields) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(results);
            }
        })
    })
};


patrialRecordUpdateQuery = (Id, record) => {
    let query = "UPDATE record SET Description = ? WHERE Id = ?";
    const updated = [record, Id];
    return new Promise((resolve, reject) => {
        connection.query(query, updated, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        })
    })
}




module.exports = {
    getAllRecordsQuery,
    getSpecificRecordQuery,
    patrialRecordUpdateQuery
}