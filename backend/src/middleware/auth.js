const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const memoryStorage = require('../utils/memoryStorage');

const protect = async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		try {
			// Get token from header
			token = req.headers.authorization.split(' ')[1];

			// Verify token
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			// Try to get admin from MongoDB first, fallback to memory storage
			let admin;
			try {
				admin = await Admin.findById(decoded.id).select('-password');
			} catch (error) {
				// MongoDB not available, use memory storage
				admin = memoryStorage.getAdminByUsername('admin'); // Default admin
			}

			if (!admin) {
				return res.status(401).json({ message: 'Not authorized, admin not found' });
			}

			if (!admin.isActive && admin.isActive !== undefined) {
				return res.status(401).json({ message: 'Not authorized, admin account is deactivated' });
			}

			req.admin = admin;
			next();
		} catch (error) {
			console.error('Auth middleware error:', error);
			return res.status(401).json({ message: 'Not authorized, token failed' });
		}
	}

	if (!token) {
		return res.status(401).json({ message: 'Not authorized, no token' });
	}
};

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRE
	});
};

module.exports = { protect, generateToken };
