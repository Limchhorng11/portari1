const Admin = require('../models/Admin');
const { generateToken } = require('../middleware/auth');
const memoryStorage = require('../utils/memoryStorage');

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
const loginAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;

		// Try MongoDB first, fallback to memory storage
		let admin;
		try {
			admin = await Admin.findOne({ username });
		} catch (error) {
			// MongoDB not available, use memory storage
			admin = memoryStorage.getAdminByUsername(username);
		}

		if (!admin) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// Check if admin is active
		if (!admin.isActive && admin.isActive !== undefined) {
			return res.status(401).json({ message: 'Account is deactivated' });
		}

		// Check password
		let isMatch = false;
		try {
			isMatch = await admin.comparePassword(password);
		} catch (error) {
			// For memory storage, use simple comparison (admin123)
			isMatch = password === 'admin123';
		}

		if (!isMatch) {
			return res.status(401).json({ message: 'Invalid credentials' });
		}

		// Update last login
		admin.lastLogin = new Date();
		try {
			await admin.save();
		} catch (error) {
			// Memory storage doesn't need saving
		}

		res.json({
			_id: admin._id,
			username: admin.username,
			email: admin.email,
			role: admin.role,
			token: generateToken(admin._id)
		});
	} catch (error) {
		console.error('Login error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Get current admin
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
	try {
		const admin = await Admin.findById(req.admin.id).select('-password');
		res.json(admin);
	} catch (error) {
		console.error('Get me error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

// @desc    Change password
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = async (req, res) => {
	try {
		const { currentPassword, newPassword } = req.body;

		const admin = await Admin.findById(req.admin.id);

		// Check current password
		const isMatch = await admin.comparePassword(currentPassword);

		if (!isMatch) {
			return res.status(400).json({ message: 'Current password is incorrect' });
		}

		// Update password
		admin.password = newPassword;
		await admin.save();

		res.json({ message: 'Password updated successfully' });
	} catch (error) {
		console.error('Change password error:', error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = {
	loginAdmin,
	getMe,
	changePassword
};
