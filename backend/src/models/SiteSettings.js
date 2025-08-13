const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: 'John Doe'
	},
	title: {
		type: String,
		required: true,
		default: 'Portfolio'
	},
	description: {
		type: String,
		required: true,
		default: 'Full-stack developer portfolio'
	},
	email: {
		type: String,
		required: true,
		default: 'john.doe@example.com'
	},
	github: {
		type: String,
		default: 'https://github.com/john-doe'
	},
	linkedin: {
		type: String,
		default: 'https://linkedin.com/in/john-doe'
	},
	twitter: {
		type: String,
		default: 'https://twitter.com/john-doe'
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);
