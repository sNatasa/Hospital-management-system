let connection = require("../database");


getAllReceptionistsQuery = () => {
    let query = "SELECT * FROM receptionist";
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

getSpecificReceptionistQuery = (receptionistId) => {
    const query = 'SELECT * FROM receptionist WHERE Id = ?';
    return new Promise((resolve, reject) => {
        con.query(query, [receptionistId], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results)
            }
        });
    });
};

addReceptionistQuery = (body) => {
    const query = "INSERT INTO receptionist (Surname, Shift) VALUES (?,?)";
    return new Promise((resolve, reject) => {
        let info = [body.Surname, body.Shift] ;
        connection.query(query, info, (err, results, fields) => {
          console.log(info);
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        })
    })
};




module.exports = {
    getAllReceptionistsQuery,
    getSpecificReceptionistQuery,
    addReceptionistQuery
}