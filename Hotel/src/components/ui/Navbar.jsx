import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import Logo from "../../assets/logo/logo12.png";

export default function ExpediaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 bg-white z-50 relative">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link to="/">
          <img src={Logo} alt="Logo" className="h-14 shadow-none border-none" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            type="button"
            className="flex items-center space-x-2 border border-gray-300 rounded-full py-1.5 px-4 text-gray-900 text-sm font-medium hover:bg-gray-100"
          >
            <span>Get the app</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
            </svg>
          </button>

          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-900 font-medium text-sm">CAD</span>
            <img
              src="https://placehold.co/24x16/flag-us-rectangle.png"
              alt="US Flag"
              className="w-6 h-4 rounded-sm object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>

          
          <a href="#" className="text-gray-900 text-sm font-medium hover:text-blue-600">
            Support
          </a>
         

          

          <Link to='/signin' className="text-gray-900 text-sm font-medium hover:text-blue-600">
            Sign in
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
          <a href="#" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            Get the app
          </a>
          <a href="#" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            CAD
          </a>
         
          <a href="#" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            Support
          </a>
         
          <Link to="/signin" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            Sign in
          </Link>
        </div>
      )}
    </header>
  );
}
