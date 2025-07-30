import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development and technology.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Getting Started with React Router
          </h2>
          <p className="text-gray-600 mb-4">
            Learn how to set up routing in your React application with React Router...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">March 15, 2024</span>
            <a href="#none" className="text-blue-600 hover:text-blue-800">
              Read More →
            </a>
          </div>
        </article>

        <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
            TypeScript Best Practices
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the best practices for using TypeScript in your projects...
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">March 10, 2024</span>
            <a href="#none" className="text-blue-600 hover:text-blue-800">
              Read More →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog; 