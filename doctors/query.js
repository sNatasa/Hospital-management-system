let connection = require("../database");

getAllDoctorsQuery = () => {
    let query = "SELECT * FROM doctor";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            };
        });
    });
};

getDoctorByUsernameQuery = (username) => {
    let query = "SELECT * FROM doctor WHERE Username = ? ";
    return new Promise((resolve, reject) => {
        connection.query(query, [username], (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

createNewDoctorQuery = (body, pass) => {
    let query = "INSERT INTO doctor (Name, Surname, Specialty, Salary, Username, Password) VALUES (?, ?, ?, ?, ?, ?)";
    let info = [body.Name, body.Surname, body.Specialty, body.Salary, body.Username, pass];
    console.log(pass);
    return new Promise((resolve, reject) => {
        connection.query(query, info, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve()
            };
        });
    });
};

loginDoctorQuery = (username) => {
    let query = "SELECT * FROM doctor WHERE Username = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [username], (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                console.log(results);
                resolve(results);
            }
        })
    })
};

module.exports = {
    getAllDoctorsQuery,
    getDoctorByUsernameQuery,
    createNewDoctorQuery,
    loginDoctorQuery

}