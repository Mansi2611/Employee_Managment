const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		// required: true,
	},
	email: {
		type: String,
		// required: true,
		unique: true,
	},
	title: {
		type: String,
		// required: true,
	},
	department: {
		type: String,
		// required: true,
		maxLength: 20,
	},
	
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
