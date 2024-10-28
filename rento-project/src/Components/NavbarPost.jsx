import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavbarPost() {
  const navigate = useNavigate();

  // Logout function to handle clearing session and redirecting
  const handleLogout = () => {
    // Clear any authentication tokens or session data here
    localStorage.removeItem('userToken'); // Example: clearing token from localStorage

    // Navigate to the logout page (ImgLoader) to show the video
    navigate('/loader');
  };

  return (
    <nav className="bg-white shadow">
      <ul className="flex justify-between items-center px-8 py-4">
        {/* Left-aligned logo or brand name */}
        <li className="text-gray-800 text-lg">
          <Link to="/" className="text-3xl">Rento</Link>
        </li>
        
        {/* Right-aligned navigation links */}
        <div className="flex space-x-6 items-center">
          <li>
            <Link to="/vehicules" className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-red-500 transition-colors duration-100">Véhicules</Link>
          </li>
          <li>
            <Link to="/reservation" className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-red-500 transition-colors duration-100">Mes réservations</Link>
          </li>
          <li>
            <Link to="/about" className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-red-500 transition-colors duration-100">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-red-500 transition-colors duration-100">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-red-500 transition-colors duration-100">Contact</Link>
          </li>
          <li>
            {/* Align the logout button like the other links */}
            <button 
              onClick={handleLogout} 
              className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-red-500 transition-colors duration-100 focus:outline-none">
              Log Out
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavbarPost;
