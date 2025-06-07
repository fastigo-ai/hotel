import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import UK from "../../assets/country/launguage/uk.jpg";


// const navItems = [
//   { label: "Stays", icon: "🏨", active: true },
//   { label: "Flights", icon: "✈️" },
//   { label: "Flight + Hotel", icon: "🧳" },
//   { label: "Car rentals", icon: "🚗" },
//   { label: "Attractions", icon: "🗺️" },
//   { label: "Airport taxis", icon: "🚕" },
// ];

const BookingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative text-white">
      {/* Background */}
      <img
        src="https://q-xx.bstatic.com/xdata/images/xphoto/max2880/463396394.jpg?k=3cf8c6ecca6bcd622c251d59165091e09c09676e2e0574ded4e9e84c4868b824&o="
        alt="holiday bg"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 to-black/20" />

      {/* Top nav */}
      <nav className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold font-serif whitespace-nowrap">
          Plains Motor
        </Link>

        {/* Desktop controls */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="px-3 py-2 rounded hover:bg-blue-800 transition">UK</span>
          <img
            src={UK}
            alt="uk flag"
            className="h-5 w-5 rounded-full cursor-pointer hover:ring-1 hover:ring-blue-800"
          />
          <span className="px-3 py-2 rounded hover:bg-blue-800 transition whitespace-nowrap">
            List your property
          </span>
          <button className="bg-white text-black px-4 py-2 rounded">Register</button>
          <button className="bg-white text-black px-4 py-2 rounded">Sign in</button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded hover:bg-white/20 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Slide-in mobile menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded hover:bg-gray-100"
            aria-label="Close menu"
          >
            <FaTimes size={18} />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <button className="px-4 py-2 rounded hover:bg-gray-100 text-left">List your property</button>
          <button className="px-4 py-2 rounded hover:bg-gray-100 text-left">Register</button>
          <button className="px-4 py-2 rounded hover:bg-gray-100 text-left">Sign in</button>
        </div>
      </aside>

      {/* Bottom nav row (hidden on small screens) */}
      {/* <div className=" md:block relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full border transition ${
                  item.active
                    ? "border-white bg-blue-800"
                    : "border-transparent hover:bg-blue-800"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Hero text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Holiday rentals <br className="hidden md:block" /> all over the world
        </h1>
        <p className="mt-1 text-lg sm:text-xl md:text-2xl">
          Houses, cabins, apartments and more
        </p>
      </div>

      {/* Search bar */}
     

    </header>
  );
};

export default BookingHeader;