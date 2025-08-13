# Portfolio Admin Backend API

A Node.js backend API for managing portfolio content with MongoDB database.

## Features

- 🔐 **JWT Authentication** - Secure admin login system
- 📊 **MongoDB Database** - Persistent data storage
- 🛡️ **Security Middleware** - Helmet, CORS, rate limiting
- 📝 **Content Management** - CRUD operations for all portfolio sections
- 🔄 **Real-time Updates** - Instant content synchronization
- 📁 **File Upload** - Image and file management
- 🎯 **RESTful API** - Clean and consistent endpoints

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs, helmet, cors
- **File Upload**: Multer
- **Logging**: Morgan

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   - Copy `config.env` to `.env` (if needed)
   - Update MongoDB connection string
   - Set JWT secret key

3. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update `MONGODB_URI` in config file

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## Environment Variables

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/portfolio_admin

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# Admin Default Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current admin (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Hero Section
- `GET /api/hero` - Get hero section data
- `PUT /api/hero` - Update hero section (protected)

### FAQs
- `GET /api/faqs` - Get all FAQs
- `POST /api/faqs` - Create new FAQ (protected)
- `PUT /api/faqs/:id` - Update FAQ (protected)
- `DELETE /api/faqs/:id` - Delete FAQ (protected)
- `PUT /api/faqs/reorder` - Reorder FAQs (protected)

### Health Check
- `GET /api/health` - API health status

## Database Models

### HeroSection
- `greeting` - Welcome message
- `name` - Main heading
- `title` - Professional title
- `description` - About text
- `projectsCount` - Number of projects
- `customersCount` - Number of customers
- `experienceYears` - Years of experience

### FAQ
- `question` - FAQ question
- `answer` - FAQ answer
- `order` - Display order

### Admin
- `username` - Admin username
- `password` - Hashed password
- `email` - Admin email
- `role` - Admin role (admin/super_admin)
- `isActive` - Account status
- `lastLogin` - Last login timestamp

## Security Features

- **Password Hashing** - bcryptjs for secure password storage
- **JWT Authentication** - Token-based authentication
- **CORS Protection** - Cross-origin resource sharing
- **Helmet Security** - HTTP headers security
- **Input Validation** - Request data validation
- **Error Handling** - Comprehensive error management

## Development

### Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### File Structure
```
backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── heroController.js
│   │   └── faqController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── Admin.js
│   │   ├── HeroSection.js
│   │   ├── FAQ.js
│   │   └── ...
│   ├── routes/
│   │   ├── auth.js
│   │   ├── hero.js
│   │   └── faqs.js
│   └── server.js
├── uploads/
├── package.json
└── config.env
```

## Production Deployment

1. **Environment Setup**
   - Set `NODE_ENV=production`
   - Use strong JWT secret
   - Configure MongoDB Atlas
   - Set up proper CORS origins

2. **Security Considerations**
   - Change default admin credentials
   - Use HTTPS
   - Implement rate limiting
   - Set up monitoring

3. **Database Backup**
   - Regular MongoDB backups
   - Data validation
   - Migration scripts

## API Response Format

### Success Response
```json
{
  "status": "success",
  "data": { ... },
  "message": "Operation completed successfully"
}
```

### Error Response
```json
{
  "status": "error",
  "message": "Error description",
  "error": "Detailed error information"
}
```

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## License

This project is licensed under the ISC License.
