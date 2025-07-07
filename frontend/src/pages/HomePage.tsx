import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Choonwise
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Collaborate with friends to optimize your Bandcamp music purchases
        </p>
        <div className="space-x-4">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Connect Your Bandcamp</h3>
          <p className="text-gray-600">
            Link your Bandcamp account to sync your collection and wishlist
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Create Groups</h3>
          <p className="text-gray-600">
            Form groups with friends to share and analyze music collections
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Optimize Purchases</h3>
          <p className="text-gray-600">
            Get suggestions for sharing music and splitting purchase costs
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <div className="space-y-4 text-left max-w-2xl mx-auto">
          <div className="flex items-start space-x-3">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
            <p>Connect your Bandcamp account by entering your username</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
            <p>Create groups and invite friends who also use Bandcamp</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
            <p>View shared analysis of collections, wishlists, and purchase opportunities</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
            <p>Get suggestions for sharing music you own and optimizing group purchases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
