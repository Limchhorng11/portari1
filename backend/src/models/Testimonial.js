const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	company: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5,
		default: 5
	},
	testimonial: {
		type: String,
		required: true
	},
	socialLinks: {
		linkedin: {
			type: String,
			default: '#none'
		},
		facebook: {
			type: String,
			default: '#none'
		},
		twitter: {
			type: String,
			default: '#none'
		}
	},
	order: {
		type: Number,
		default: 0
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
