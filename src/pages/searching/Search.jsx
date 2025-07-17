import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [showGuestOptions, setShowGuestOptions] = useState(false);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [guests, setGuests] = useState({
    adult: 2,
    children: 0,
    rooms: 1,
  });

  const formattedDate = `${format(dateRange[0].startDate, "MMM dd")} - ${format(
    dateRange[0].endDate,
    "MMM dd"
  )}`;

  const handleGuestChange = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]: operation === "increment" ? prev[type] + 1 : Math.max(prev[type] - 1, type === "adult" ? 1 : 0),
    }));
  };

  const handleClick = () => {
    navigate("/hotel-card");
  };

  const guestRef = useRef();
  const calendarRef = useRef();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setShowGuestOptions(false);
      }
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white px-4 py-6 rounded-lg max-w-7xl mx-auto relative ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
        <h2 className="text-lg font-semibold text-gray-700">Stays</h2>
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/* Location */}
        <div className="flex-1">
          <label className="text-sm text-gray-600">Where to?</label>
          <div className="flex items-center border rounded-md mt-2 px-2 bg-white">
            <FaLocationDot className="text-gray-600 mr-2" />
            <p className="flex-1 p-2 text-sm text-gray-800">Stettler, Alberta, Canada</p>
          </div>
        </div>

        {/* Dates */}
        <div className="flex-1 relative" ref={calendarRef}>
          <label className="text-sm text-gray-600">Dates</label>
          <div
            className="flex items-center border rounded-md mt-2 px-2 bg-white cursor-pointer"
            onClick={() => setOpenCalendar(!openCalendar)}
          >
            <FaCalendarAlt className="text-gray-600 mr-2" />
            <span className="p-2 text-sm text-gray-800">{formattedDate}</span>
          </div>

          {openCalendar && (
            <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => {
                  setDateRange([item.selection]);
                  const { startDate, endDate } = item.selection;
                  if (startDate && endDate && startDate.getTime() !== endDate.getTime()) {
                    setOpenCalendar(false);
                  }
                }}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                rangeColors={["#f39c0f"]}
              />
            </div>
          )}
        </div>

        {/* Travelers */}
        <div className="flex-1 relative" ref={guestRef}>
          <label className="text-sm text-gray-600">Travelers</label>
          <div
            className="flex items-center border rounded-md mt-2 px-2 bg-white cursor-pointer"
            onClick={() => setShowGuestOptions(!showGuestOptions)}
          >
            <FaUser className="text-gray-600 mr-2" />
            <span className="p-2 text-sm text-gray-800">
              {`${guests.adult} adults · ${guests.children} children · ${guests.rooms} room`}
            </span>
          </div>

          {showGuestOptions && (
            <div className="absolute top-full left-0 z-50 mt-2 bg-white shadow-md rounded-lg p-4 w-64 text-sm text-gray-800">
              {["adult", "children", "rooms"].map((type) => (
                <div key={type} className="flex justify-between items-center mb-3">
                  <span className="capitalize">{type}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={guests[type] <= (type === "adult" ? 1 : 0)}
                      onClick={() => handleGuestChange(type, "decrement")}
                      className="w-6 h-6 border rounded text-center font-bold hover:bg-gray-200 disabled:opacity-50"
                    >
                      –
                    </button>
                    <span>{guests[type]}</span>
                    <button
                      type="button"
                      onClick={() => handleGuestChange(type, "increment")}
                      className="w-6 h-6 border rounded text-center font-bold hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="mt-8 md:mt-7 w-full md:w-auto">
          <button
            type="button"
            onClick={handleClick}
            className="w-full md:w-auto bg-[#f39c0f] text-black rounded-full px-6 py-4 text-sm font-medium transition hover:bg-yellow-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
