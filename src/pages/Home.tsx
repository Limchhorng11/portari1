import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Full-stack developer passionate about creating amazing web experiences
        </p>
        <div className="flex justify-center space-x-4">
          {/* Method 1: Using Link component */}
          <Link 
            to="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          
          {/* Method 2: Using programmatic navigation */}
          <button 
            onClick={handleContactMe}
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Navigation Examples Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Navigation Examples</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Using Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-blue-600 hover:text-blue-800">
                → About Page
              </Link>
              <Link to="/projects" className="block text-blue-600 hover:text-blue-800">
                → Projects Page
              </Link>
              <Link to="/blog" className="block text-blue-600 hover:text-blue-800">
                → Blog Page
              </Link>
              <Link to="/contact" className="block text-blue-600 hover:text-blue-800">
                → Contact Page
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Using Buttons</h3>
            <div className="space-y-2">
              <button 
                onClick={() => navigate('/about')}
                className="block w-full text-left text-blue-600 hover:text-blue-800"
              >
                → About Page
              </button>
              <button 
                onClick={handleViewProjects}
                className="block w-full text-left text-blue-600 hover:text-blue-800"
              >
                → Projects Page
              </button>
              <button 
                onClick={() => navigate('/blog')}
                className="block w-full text-left text-blue-600 hover:text-blue-800"
              >
                → Blog Page
              </button>
              <button 
                onClick={handleContactMe}
                className="block w-full text-left text-blue-600 hover:text-blue-800"
              >
                → Contact Page
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      {/* <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">React</h3>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">TypeScript</h3>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Node.js</h3>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold">Tailwind CSS</h3>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home; 