// src/components/Header/UserMenu.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { signOut } from "../../redux/slices/authSlice";

const UserMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(signOut());
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <div className="relative">
      <FaRegUserCircle
        className="text-3xl text-gray-900 cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      />
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <Link
            to="/booking-history"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setDropdownOpen(false)}
          >
            Booking Details
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
