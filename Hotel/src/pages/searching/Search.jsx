// import React from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

// const BookingSearch = () => {
//   return (
//     <div className="w-full bg-transparent py-6">
//       <div className="max-w-7xl mx-auto px-4">
//         <form className=" rounded-xl p-1 shadow-md flex flex-col md:flex-row gap-3 md:gap-2">

//           {/* Destination */}
//           <div className="flex items-center gap-2 p-3 bg-white rounded-lg flex-1 border border-gray-300 shadow-sm hover:shadow-md transition">
//             <FaLocationDot className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Plains Motors"
//               className="text-sm text-black font-medium focus:outline-none w-full"
//             />
//           </div>

//           {/* Dates */}
//           <div className="flex items-center gap-2 p-3 bg-white rounded-lg flex-1 border border-gray-300 shadow-sm hover:shadow-md transition">
//             <label htmlFor="checkIn" className="cursor-pointer">
//               <FaCalendarAlt className="text-gray-500" />
//             </label>
//             <div className="grid grid-cols-2 gap-2 w-full">
//               <input
//                 type="date"
//                 name="checkIn"
//                 id="checkIn"
//                 className="text-sm text-black font-medium outline-none cursor-pointer bg-white w-full "
//               />
//               <input
//                 type="date"
//                 name="checkOut"
//                 id="checkOut"
//                 className="text-sm text-black font-medium outline-none cursor-pointer bg-white w-full"
//               />
//             </div>
//           </div>

//           {/* Guests */}
//           <div className="flex items-center gap-2 p-3 bg-white rounded-lg flex-1 border border-gray-300 shadow-sm hover:shadow-md transition">
//             <FaUser className="text-gray-500" />
//             <span className="text-sm text-black font-medium">
//               1 adults · 0 children · 1 room
//             </span>
//           </div>

//           {/* Search Button */}
//           <div className="flex items-center">
//             <button
//               type="submit"
//               className="bg-[rgb(27,188,155)] text-white font-bold text-sm px-6 py-3 rounded-lg w-full md:w-auto transition"
//             >
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookingSearch;

import React, { useState } from "react";
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

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const formattedDate = `${format(dateRange[0].startDate, "MMM dd")} - ${format(dateRange[0].endDate, "MMM dd")}`;

  const handleClick = () => {
    navigate("/hotel-card");
  };

  return (
    <div className="bg-white px-4 py-6 rounded-lg max-w-7xl mx-auto relative">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
        <h2 className="text-lg font-semibold text-gray-700">Stays</h2>
      </div>

      {/* Input Fields */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/* Location */}
        <div className="flex-1">
          <label className="text-sm text-gray-600">Where to?</label>
          <div className="flex items-center border rounded-md mt-2 px-2">
            <FaLocationDot className="text-gray-600 mr-2" />
            <input
              type="text"
              aria-label="Location"
              placeholder="Stettler, Alberta, Canada"
              className="flex-1 p-2 outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Dates with react-date-range */}
        <div className="flex-1 relative">
          <label className="text-sm text-gray-600">Dates</label>
          <div
            className="flex items-center border rounded-md mt-2 px-2 cursor-pointer"
            onClick={() => setOpenCalendar(!openCalendar)}
          >
            <FaCalendarAlt className="text-gray-600 mr-2" />
            <span className="p-2 text-sm text-gray-800">
              {formattedDate}
            </span>
          </div>
          {openCalendar && (
            <div className="absolute z-50 mt-2">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                rangeColors={["#f39c0f"]}
              />
            </div>
          )}
        </div>

        {/* Travelers */}
        <div className="flex-1">
          <label className="text-sm text-gray-600">Travelers</label>
          <div className="flex items-center border rounded-md mt-2 px-2">
            <FaUser className="text-gray-600 mr-2" />
            <input
              type="text"
              aria-label="Number of travelers and rooms"
              placeholder="2 travelers, 1 room"
              className="flex-1 p-2 outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-7 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="md:ml-auto w-full md:w-auto">
            <button
              type="button"
              onClick={handleClick}
              className="w-full md:w-auto bg-[#f39c0f] cursor-pointer text-black rounded-full px-6 py-4 text-sm font-medium transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
