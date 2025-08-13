const FAQ = require('../models/FAQ');
const memoryStorage = require('../utils/memoryStorage');

// @desc    Get all FAQs
// @route   GET /api/faqs
// @access  Public
const getFAQs = async (req, res) => {
	try {
		let faqs;
		try {
			faqs = await FAQ.find().sort('order');
		} catch (error) {
			// MongoDB not available, use memory storage
			faqs = memoryStorage.getFAQs();
		}
		res.json(faqs);
	} catch (error) {
		console.error('Get FAQs error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Create new FAQ
// @route   POST /api/faqs
// @access  Private
const createFAQ = async (req, res) => {
	try {
		const { question, answer } = req.body;

		if (!question || !answer) {
			return res.status(400).json({ message: 'Question and answer are required' });
		}

		let faq;
		try {
			// Get the highest order number
			const lastFAQ = await FAQ.findOne().sort('-order');
			const order = lastFAQ ? lastFAQ.order + 1 : 1;

			faq = await FAQ.create({
				question,
				answer,
				order
			});
		} catch (error) {
			// MongoDB not available, use memory storage
			faq = memoryStorage.createFAQ({ question, answer });
		}

		res.status(201).json(faq);
	} catch (error) {
		console.error('Create FAQ error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Update FAQ
// @route   PUT /api/faqs/:id
// @access  Private
const updateFAQ = async (req, res) => {
	try {
		const { question, answer } = req.body;
		let faq;
		
		try {
			faq = await FAQ.findById(req.params.id);
			if (!faq) {
				return res.status(404).json({ message: 'FAQ not found' });
			}

			if (question !== undefined) faq.question = question;
			if (answer !== undefined) faq.answer = answer;

			await faq.save();
		} catch (error) {
			// MongoDB not available, use memory storage
			faq = memoryStorage.updateFAQ(req.params.id, { question, answer });
			if (!faq) {
				return res.status(404).json({ message: 'FAQ not found' });
			}
		}

		res.json(faq);
	} catch (error) {
		console.error('Update FAQ error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Delete FAQ
// @route   DELETE /api/faqs/:id
// @access  Private
const deleteFAQ = async (req, res) => {
	try {
		let success = false;
		
		try {
			const faq = await FAQ.findById(req.params.id);
			if (!faq) {
				return res.status(404).json({ message: 'FAQ not found' });
			}
			await FAQ.findByIdAndDelete(req.params.id);
			success = true;
		} catch (error) {
			// MongoDB not available, use memory storage
			success = memoryStorage.deleteFAQ(req.params.id);
			if (!success) {
				return res.status(404).json({ message: 'FAQ not found' });
			}
		}

		res.json({ message: 'FAQ removed' });
	} catch (error) {
		console.error('Delete FAQ error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Reorder FAQs
// @route   PUT /api/faqs/reorder
// @access  Private
const reorderFAQs = async (req, res) => {
	try {
		const { faqIds } = req.body;

		if (!Array.isArray(faqIds)) {
			return res.status(400).json({ message: 'FAQ IDs array is required' });
		}

		let faqs;
		try {
			// Update order for each FAQ
			for (let i = 0; i < faqIds.length; i++) {
				await FAQ.findByIdAndUpdate(faqIds[i], { order: i + 1 });
			}
			faqs = await FAQ.find().sort('order');
		} catch (error) {
			// MongoDB not available, use memory storage
			faqs = memoryStorage.reorderFAQs(faqIds);
		}

		res.json(faqs);
	} catch (error) {
		console.error('Reorder FAQs error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	getFAQs,
	createFAQ,
	updateFAQ,
	deleteFAQ,
	reorderFAQs
};
