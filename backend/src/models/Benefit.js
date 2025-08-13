const mongoose = require('mongoose');

const benefitSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	order: {
		type: Number,
		default: 0
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Benefit', benefitSchema);
