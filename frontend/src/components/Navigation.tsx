import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Choonwise
          </Link>
          <div className="space-x-4">
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-blue-600">
              Profile
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
