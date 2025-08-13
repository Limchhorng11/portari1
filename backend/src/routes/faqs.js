const express = require('express');
const router = express.Router();
const { getFAQs, createFAQ, updateFAQ, deleteFAQ, reorderFAQs } = require('../controllers/faqController');
const { protect } = require('../middleware/auth');

// Public route
router.get('/', getFAQs);

// Protected routes
router.post('/', protect, createFAQ);
router.put('/:id', protect, updateFAQ);
router.delete('/:id', protect, deleteFAQ);
router.put('/reorder', protect, reorderFAQs);

module.exports = router;
