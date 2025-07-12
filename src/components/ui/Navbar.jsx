// src/components/Header/ExpediaHeader.jsx
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, signIn } from "../../redux/slices/authSlice";
import Logo from "../../assets/logo/Logo13.png";

export default function ExpediaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    try {
      const localUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (localUser && token && !isAuthenticated) {
        dispatch(signIn({ user: JSON.parse(localUser), token }));
      }
    } catch (error) {
      console.error("LocalStorage parse error:", error);
    }
  }, [dispatch, isAuthenticated]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(signOut());
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="border-b border-gray-300 bg-white z-50 relative">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-14" />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/get-app">
          <button className="flex items-center space-x-2 border border-gray-300 rounded-full py-1.5 px-4 text-gray-900 text-sm font-medium hover:bg-gray-100">
            <span>Get the app</span>
          </button>
          </Link>

          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-gray-900 font-medium text-sm">CAD</span>
            <img
              src="https://placehold.co/24x16/flag-us-rectangle.png"
              alt="US Flag"
              className="w-6 h-4 rounded-sm object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
          <a href="tel:4037423491" className="text-gray-900 text-sm font-medium hover:text-blue-600">Contact</a>

          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-900 font-medium">
                Welcome, {user?.name || user?.mobile}
              </span>
              <button
                onClick={handleSignOut}
                className="text-gray-900 text-sm font-medium hover:text-blue-600"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link to="/signin" className="text-gray-900 text-sm font-medium hover:text-blue-600">
              Sign in
            </Link>
          )}
        </div>

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

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
          <a href="#" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            Get the app
          </a>
          <a href="#" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            CAD
          </a>
          <a href="tel:4037423491" className="block text-gray-800 text-sm font-medium hover:text-blue-600">
            Contact
          </a>
          {isAuthenticated ? (
            <>
              <div className="text-gray-800 text-sm font-medium">
                Welcome, {user?.name || user?.mobile}
              </div>
              <button
                onClick={handleSignOut}
                className="text-left w-full text-gray-800 text-sm font-medium hover:text-blue-600"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link
              to="/signin"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-800 text-sm font-medium hover:text-blue-600"
            >
              Sign in
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
