const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	},
	category: {
		type: String,
		enum: ['frontend', 'backend', 'database', 'tools'],
		default: 'frontend'
	},
	order: {
		type: Number,
		default: 0
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);
