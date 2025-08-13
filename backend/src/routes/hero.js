const express = require('express');
const router = express.Router();
const { getHeroSection, updateHeroSection } = require('../controllers/heroController');
const { protect } = require('../middleware/auth');

// Public route
router.get('/', getHeroSection);

// Protected route
router.put('/', protect, updateHeroSection);

module.exports = router;
