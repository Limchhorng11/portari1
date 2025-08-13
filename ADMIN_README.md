# Portfolio Admin Panel

This admin panel allows you to manage and update all content on your portfolio website without touching the code.

## Access

Navigate to `/admin/login` to access the admin panel.

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

## Features

### 🔐 Authentication
- Secure login system
- Session management using localStorage
- Automatic redirect to login if not authenticated

### 📊 Dashboard
- Overview of all content sections
- Quick stats showing content counts
- Easy navigation to all admin sections

### 🏠 Hero Section Management
- Edit greeting text
- Update name and title
- Modify description
- Change statistics (projects, customers, experience years)
- Real-time preview of changes

### 💼 Projects Management
- Add new projects
- Edit existing project details
- Manage project thumbnails
- Delete projects
- Update project titles and IDs

### ⚡ Skills & Benefits Management
- **Skills Tab:**
  - Add/edit skill titles and descriptions
  - Manage skill icons
  - Delete skills
- **Benefits Tab:**
  - Add/edit benefit titles and descriptions
  - Delete benefits

### 💬 Testimonials Management
- Add new customer testimonials
- Edit existing testimonials
- Manage customer names, companies, and ratings
- Update testimonial content
- Configure social media links for customers

### ❓ FAQ Management
- Add new frequently asked questions
- Edit existing questions and answers
- Reorder FAQ items using up/down arrows
- Delete FAQ items

### ⚙️ Site Settings
- Configure site name and title
- Update site description
- Manage contact email
- Set social media links (GitHub, LinkedIn, Twitter)
- Real-time preview of settings

## Data Persistence

All changes are saved to the browser's localStorage. This means:
- ✅ Changes persist between browser sessions
- ✅ No server required
- ⚠️ Data is stored locally (not synced across devices)
- ⚠️ Data can be lost if browser data is cleared

## Future Enhancements

To make this production-ready, consider:

1. **Backend Integration**
   - Connect to a real database (MongoDB, PostgreSQL)
   - Add API endpoints for CRUD operations
   - Implement proper authentication with JWT

2. **Image Management**
   - Add image upload functionality
   - Cloud storage integration (AWS S3, Cloudinary)
   - Image optimization and resizing

3. **Advanced Features**
   - Content versioning
   - Draft/publish workflow
   - Bulk operations
   - Search and filtering
   - User roles and permissions

4. **Security Improvements**
   - Stronger authentication
   - Input validation and sanitization
   - CSRF protection
   - Rate limiting

## Usage Instructions

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Access the admin panel:**
   - Go to `http://localhost:3000/admin/login`
   - Login with admin/admin123

3. **Make changes:**
   - Navigate to any section
   - Edit content as needed
   - Click "Save Changes" to persist

4. **View changes:**
   - Click "View Site" to see your portfolio
   - Changes are immediately visible

## File Structure

```
src/pages/admin/
├── AdminLogin.tsx          # Login page
├── AdminDashboard.tsx      # Main dashboard
├── AdminHeroSection.tsx    # Hero section editor
├── AdminProjects.tsx       # Projects management
├── AdminSkills.tsx         # Skills & benefits editor
├── AdminTestimonials.tsx   # Testimonials management
├── AdminFAQ.tsx           # FAQ management
└── AdminSiteSettings.tsx  # Site configuration
```

## Integration with Frontend

To integrate the admin data with your frontend components, you'll need to:

1. **Create data hooks** that read from localStorage
2. **Update components** to use admin data instead of hardcoded constants
3. **Add real-time updates** when admin data changes

Example integration:
```typescript
// Create a hook to get hero data
const useHeroData = () => {
  const [heroData, setHeroData] = useState(defaultHeroData);
  
  useEffect(() => {
    const saved = localStorage.getItem('heroSectionData');
    if (saved) {
      setHeroData(JSON.parse(saved));
    }
  }, []);
  
  return heroData;
};
```

## Security Notes

⚠️ **Important:** This is a demo implementation with basic security. For production use:

- Change default credentials
- Implement proper authentication
- Add input validation
- Use HTTPS
- Consider rate limiting
- Add proper error handling

## Support

For questions or issues with the admin panel, please refer to the main project documentation or create an issue in the repository.
