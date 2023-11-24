import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-white text-xl font-bold">AntiRaggingQueryForm</div>
    <div className="space-x-4">
      <Link to="/" className="text-white hover:text-gray-300 opacity-0.7 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">Home</Link>
      <Link to="/login" className="text-white hover:text-gray-300 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">Login</Link>
      <Link to="/signup" className="text-white hover:text-gray-300 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">Sign Up</Link>
      <Link to="/submitqueries" className="text-white hover:text-gray-300 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">Submit Queries</Link>
      <Link to="/queriesreceived" className="text-white hover:text-gray-300 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">Queries Received</Link>
      <Link to="/termsandconditions" className="text-white hover:text-gray-300 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline">Terms And Conditions</Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;