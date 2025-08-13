const mongoose = require('mongoose');

const heroSectionSchema = new mongoose.Schema({
	greeting: {
		type: String,
		required: true,
		default: 'Hello There 👋'
	},
	name: {
		type: String,
		required: true,
		default: 'Lim Chhorng Welcome\'s You!'
	},
	title: {
		type: String,
		required: true,
		default: 'Web Designer'
	},
	description: {
		type: String,
		required: true,
		default: 'I am a passionate and experienced web designer, dedicated to creating visually stunning and highly functional websites. Explore my portfolio to see the power of effective design in action'
	},
	projectsCount: {
		type: Number,
		required: true,
		default: 55
	},
	customersCount: {
		type: Number,
		required: true,
		default: 20
	},
	experienceYears: {
		type: Number,
		required: true,
		default: 8
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('HeroSection', heroSectionSchema);
