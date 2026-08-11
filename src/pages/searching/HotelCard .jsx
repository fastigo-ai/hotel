import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPropertyCards } from '../../api/Api';

const HotelCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await getPropertyCards();
        setData(response);
      } catch (error) {
        console.error('Failed to fetch hotel cards:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-10 animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-pulse">
              <div className="w-full h-56 bg-gray-200"></div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="space-y-2 my-4">
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-8 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#085d54] mb-4">
          Available Accommodations
        </h1>
        <p className="text-gray-700 max-w-3xl text-sm md:text-base leading-relaxed">
          Experience a blend of comfort and hospitality. Our rooms are thoughtfully designed to provide a restful sanctuary for professional travelers and families alike.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => {
          const isAvailable = item.inStock !== false;

          return (
            <div
              key={item._id}
              onClick={() => {
                if (isAvailable) {
                  navigate(`/carddetails/${item._id}`);
                }
              }}
              className={`relative flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm transition duration-300 ease-in-out
                ${
                  isAvailable
                    ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1'
                    : 'opacity-70 cursor-not-allowed'
                }`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover rounded-t-xl"
                />

                {/* Badge */}
                <span className="absolute top-4 left-4 bg-[#f8a254] text-gray-900 px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
                  {item.badge || 'Guest Favourite'}
                </span>

                {/* Not Available Overlay */}
                {!isAvailable && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-t-xl z-10">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                      Currently Not Available
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <h2 className="text-2xl font-serif font-bold text-[#085d54] leading-tight">
                      {item.title}
                    </h2>
                    <div className="bg-[#b2e7e0] text-[#085d54] text-xs font-bold px-2 py-1 rounded whitespace-nowrap">
                      star {item.rating || 5}
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-5">
                    {item.description || 'Classic Triple Room • 1 queen bed'}
                  </p>

                  <ul className="text-sm text-gray-700 space-y-2.5 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="text-[#085d54] material-icons text-base font-medium">check_circle</span> 
                      Free cancellation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#085d54] material-icons text-base font-medium">check_circle</span> 
                      No prepayment needed
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-end mt-4">
                    <p className="text-[26px] font-bold text-[#4BA9A2] leading-none">
                      ${item.price}{' '}
                      <span className="text-xs font-normal text-gray-500">+ taxes</span>
                    </p>

                    <button className="bg-[#F39C49] hover:bg-[#e08c3c] text-black transition-colors px-4 py-1.5 text-sm font-bold rounded shadow-sm uppercase tracking-wider">
                      View Details
                    </button>
                  </div>
                  {!isAvailable && (
                    <p className="text-xs text-red-600 font-semibold mt-3 text-center">
                      Out of Stock
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelCard;
