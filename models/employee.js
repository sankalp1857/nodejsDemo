const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	name: { type: String, required: true },
	department:{ type: String, required: true },
	designation: String,
	location: String
});

module.exports = mongoose.model('employee', EmployeeSchema);