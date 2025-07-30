import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../../utils/constants';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          My Portfolio
        </Link>
        <div className="flex space-x-6">
          {NAVIGATION.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-blue-600'
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 