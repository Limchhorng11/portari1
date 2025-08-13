const HeroSection = require('../models/HeroSection');
const memoryStorage = require('../utils/memoryStorage');

// @desc    Get hero section data
// @route   GET /api/hero
// @access  Public
const getHeroSection = async (req, res) => {
	try {
		let heroSection;
		try {
			heroSection = await HeroSection.findOne();
			if (!heroSection) {
				// Create default hero section if none exists
				heroSection = await HeroSection.create({});
			}
		} catch (error) {
			// MongoDB not available, use memory storage
			heroSection = memoryStorage.getHeroSection();
		}

		res.json(heroSection);
	} catch (error) {
		console.error('Get hero section error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Update hero section
// @route   PUT /api/hero
// @access  Private
const updateHeroSection = async (req, res) => {
	try {
		const { greeting, name, title, description, projectsCount, customersCount, experienceYears } = req.body;

		let heroSection;
		try {
			heroSection = await HeroSection.findOne();
			if (!heroSection) {
				heroSection = new HeroSection();
			}

			// Update fields
			if (greeting !== undefined) heroSection.greeting = greeting;
			if (name !== undefined) heroSection.name = name;
			if (title !== undefined) heroSection.title = title;
			if (description !== undefined) heroSection.description = description;
			if (projectsCount !== undefined) heroSection.projectsCount = projectsCount;
			if (customersCount !== undefined) heroSection.customersCount = customersCount;
			if (experienceYears !== undefined) heroSection.experienceYears = experienceYears;

			await heroSection.save();
		} catch (error) {
			// MongoDB not available, use memory storage
			heroSection = memoryStorage.updateHeroSection({
				greeting, name, title, description, projectsCount, customersCount, experienceYears
			});
		}

		res.json(heroSection);
	} catch (error) {
		console.error('Update hero section error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	getHeroSection,
	updateHeroSection
};
