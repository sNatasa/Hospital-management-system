let query = require("./query");
let bcrypt = require('bcryptjs');
let jwt = require("jsonwebtoken");

getAllDoctors = async (req, res) => {
    try {
        let data = await query.getAllDoctorsQuery();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
};

createNewDoctor = async (req, res) => {
    try {
        let docRequest = req.body;
        console.log(docRequest)
        let data = await getAllDoctorsQuery(req.body);
        const passHash = bcrypt.hashSync(docRequest.Password, 10);
        let doctor = data[0];
        if (doctor !== "") {
            await query.createNewDoctorQuery(req.body, passHash);
            res.status(200).send("doctor added!")
        } else {
            res.send("Username already exists!");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

loginDoctor = async (req, res) => {
    var username = req.body.Username;
    var password = req.body.Password;

    try {
        var data = await query.getDoctorByUsernameQuery(username);
        var dbDoctor = data[0];
        console.log(data);
        console.log(dbDoctor);
        const matchPass = bcrypt.compareSync(password, dbDoctor.Password);
        if (matchPass) {
            const token = jwt.sign({dbDoctor}, 'panda', { expiresIn: '7h'});
            res.status(200).json(token);        }
        else {
            res.status(401).send("Wrong password");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};
module.exports = {
    getAllDoctors,
    createNewDoctor,
    loginDoctor
}