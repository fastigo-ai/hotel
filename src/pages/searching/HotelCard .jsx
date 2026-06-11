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
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="space-y-1.5 my-2">
                  <div className="h-3.5 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-3.5 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-6 bg-gray-200 rounded w-10"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => {
        const isAvailable = item.inStock;

        return (
          <div
            key={item._id}
            onClick={() => {
              if (isAvailable) {
                navigate(`/carddetails/${item._id}`);
              }
            }}
            className={`relative flex flex-col bg-white rounded-xl border border-gray-200 shadow-md transition duration-300 ease-in-out
              ${
                isAvailable
                  ? 'cursor-pointer hover:shadow-xl hover:scale-[1.02]'
                  : 'opacity-60 cursor-not-allowed'
              }`}
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              {/* Badge */}
              {item.badge && (
                <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-lg">
                  {item.badge}
                </span>
              )}

              {/* Not Available Overlay */}
              {!isAvailable && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-t-xl">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Currently Not Available
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-lg font-semibold text-black">
                  {item.title}
                </h2>

                <p className="text-sm text-black mt-1">
                  Classic Triple Room • 1 queen bed
                </p>

                <ul className="text-sm text-black space-y-1 my-2">
                  <li>✔ Free cancellation</li>
                  <li>✔ No prepayment needed</li>
                </ul>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-bold text-black">
                  {item.price} CAD{' '}
                  <span className="text-sm text-gray-500">+ taxes</span>
                </p>

                <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  ★ {item.rating}
                </div>
              </div>

              {!isAvailable && (
                <p className="text-xs text-red-600 font-semibold mt-2">
                  Out of Stock
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HotelCard;
