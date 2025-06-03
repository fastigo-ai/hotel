import React from "react";
import { FaBed, FaCalendarAlt, FaUser } from "react-icons/fa";

const BookingSearch = () => {
  return (
    <div className="w-full flex justify-center px-4 py-6">
      <form className="w-full max-w-7xl bg-amber-500 rounded-xl p-1 shadow-md flex flex-col md:flex-row gap-4 md:gap-2">
        
        {/* Destination */}
        <div className="flex items-center gap-2 p-3 bg-white rounded-lg flex-1 border border-gray-300 shadow-sm hover:shadow-md transition">
          <FaBed className="text-gray-500" />
          <input
            type="text"
            placeholder="Enter destination"
            className="text-sm text-black font-medium focus:outline-none w-full"
          />
        </div>

        {/* Dates */}
        <div className="flex items-center gap-2 p-3 bg-white rounded-lg flex-1 border border-gray-300 shadow-sm hover:shadow-md transition">
          <label htmlFor="checkIn" className="cursor-pointer">
            <FaCalendarAlt className="text-gray-500" />
          </label>
          <div className="grid grid-cols-2 gap-2 w-full">
            <input
              type="date"
              name="checkIn"
              id="checkIn"
              className="text-sm text-black font-medium outline-none cursor-pointer bg-white w-full"
            />
            <input
              type="date"
              name="checkOut"
              id="checkOut"
              className="text-sm text-black font-medium outline-none cursor-pointer bg-white w-full"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 p-3 bg-white rounded-lg flex-1 border border-gray-300 shadow-sm hover:shadow-md transition">
          <FaUser className="text-gray-500" />
          <span className="text-sm text-black font-medium">
            2 adults · 0 children · 1 room
          </span>
        </div>

        {/* Search Button */}
        <div className="flex items-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-lg w-full md:w-auto transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingSearch;
