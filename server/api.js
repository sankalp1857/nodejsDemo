var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const Employee = require('../models/employee.js');

const connection = () => { 
        mongoose.connect('mongodb://localhost:27017/nodejsdemo', (err) => {
        if(!err) {
            console.log("Monodb connection succeeded");
        } else {
            console.log("Error in database connection: " + JSON.stringify(err, undefined, 2));
        }
    });
}

let response = {
    status: 200,
    message: null,
    data: []
}

var sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);
};

router.get('/employees', (req, res) => {
    connection();
    Employee.find({}, (err, docs) => {
        if(!err) {
            response.data = docs;
            res.json(response);
        } else {
            throw err;
        }
    });
});

module.exports = router;