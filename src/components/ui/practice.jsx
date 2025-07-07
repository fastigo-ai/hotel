import React from "react";
import UK from '../../assets/country/launguage/uk.jpg'
import {Link} from 'react-router-dom'
import Search from "../../pages/searching/Search";
const Navbar = () => {
  const navItems = [
    { label: "Stays", icon: "🏨", active: true },
    { label: "Flights", icon: "✈️"  },
    { label: "Flight + Hotel", icon: "🧳"  },
    { label: "Car rentals", icon: "🚗"  },
    { label: "Attractions", icon: "🗺️"  },
    { label: "Airport taxis", icon: "🚕"  },
  ];

  return (
    <header className="w-full mb-36">
    <div className="bg-blue-900 text-white w-full  fixed z-50 top-0 left-0 " >
      {/* Top Section */}
      <div className="max-w-7xl flex justify-between items-center mx-auto px-6 py-3 ">
        {/* Logo */}
        <Link to='/'><div className="text-2xl font-bold cursor-pointer font-serif">Plains Motor</div></Link>

        {/* Right-side Controls */}
        <div className="flex items-center space-x-4 text-lg">
          <span className="px-3 py-2 cursor-pointer hover:bg-blue-800 rounded">UK</span>
          <span><img src={UK} alt="in" className="rounded-full h-5 w-5 cursor-pointer hover:bg-blue-800" /></span>
          
          <span className="px-3 py-2 cursor-pointer hover:bg-blue-800 rounded">List your property</span>
          <button className="bg-white text-black px-4 py-2 rounded cursor-pointer ">Register</button>
          <button className="bg-white text-black px-4 py-2 rounded cursor-pointer">Sign in</button>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="flex max-w-7xl mx-auto px-4 pb-3 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full border cursor-pointer ${
              item.active
                ? "border-white bg-blue-800"
                : "border-transparent hover:bg-blue-800"
            } mr-2`}
          >
            <span className="mr-2 h-6 w-6">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center px-4">
        <Search/>
      </div>
    </div>
    </header>
  );
};

export default Navbar;
