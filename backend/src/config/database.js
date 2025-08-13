const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);

		console.log(`MongoDB Connected: ${conn.connection.host}`);
		
		// Create default admin user if not exists
		await createDefaultAdmin();
		
		// Create default data if collections are empty
		await createDefaultData();
		
	} catch (error) {
		console.error('Database connection error:', error);
		console.log('\n⚠️  MongoDB not available. Using in-memory storage for development.');
		console.log('\nTo use MongoDB:');
		console.log('1. Install MongoDB locally: https://www.mongodb.com/try/download/community');
		console.log('2. Use MongoDB Atlas (free): https://www.mongodb.com/atlas/database');
		console.log('3. Update MONGODB_URI in config.env with your connection string');
		
		// Don't exit, continue with in-memory storage
		console.log('\n✅ Server running with in-memory storage');
	}
};

const createDefaultAdmin = async () => {
	const Admin = require('../models/Admin');
	
	try {
		const adminExists = await Admin.findOne({ username: process.env.ADMIN_USERNAME });
		
		if (!adminExists) {
			await Admin.create({
				username: process.env.ADMIN_USERNAME,
				password: process.env.ADMIN_PASSWORD,
				email: 'admin@portfolio.com',
				role: 'super_admin'
			});
			console.log('Default admin user created');
		}
	} catch (error) {
		console.error('Error creating default admin:', error);
	}
};

const createDefaultData = async () => {
	const HeroSection = require('../models/HeroSection');
	const FAQ = require('../models/FAQ');
	const SiteSettings = require('../models/SiteSettings');
	
	try {
		// Create default hero section if not exists
		const heroExists = await HeroSection.findOne();
		if (!heroExists) {
			await HeroSection.create({});
			console.log('Default hero section created');
		}
		
		// Create default site settings if not exists
		const settingsExist = await SiteSettings.findOne();
		if (!settingsExist) {
			await SiteSettings.create({});
			console.log('Default site settings created');
		}
		
		// Create default FAQs if not exists
		const faqExists = await FAQ.findOne();
		if (!faqExists) {
			const defaultFAQs = [
				{
					question: "Can you work with clients remotely?",
					answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
					order: 1
				},
				{
					question: "How long does it typically take to complete a web design project?",
					answer: "The timeline varies depending on the project's complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects can take 6-8 weeks. I'll provide a detailed timeline during our initial consultation.",
					order: 2
				},
				{
					question: "Do you offer website maintenance services?",
					answer: "Yes, I offer comprehensive website maintenance services including regular updates, security monitoring, performance optimization, and content updates to keep your website running smoothly and securely.",
					order: 3
				},
				{
					question: "Can you optimize my website for search engines?",
					answer: "Absolutely! I implement SEO best practices including proper meta tags, structured data, mobile optimization, fast loading times, and clean code structure to help improve your website's search engine rankings.",
					order: 4
				},
				{
					question: "Can you integrate third-party tools or platforms into my website?",
					answer: "Yes, I can integrate various third-party tools and platforms such as payment gateways, CRM systems, email marketing tools, analytics platforms, and social media integrations to enhance your website's functionality.",
					order: 5
				}
			];
			
			await FAQ.insertMany(defaultFAQs);
			console.log('Default FAQs created');
		}
		
	} catch (error) {
		console.error('Error creating default data:', error);
	}
};

module.exports = connectDB;
