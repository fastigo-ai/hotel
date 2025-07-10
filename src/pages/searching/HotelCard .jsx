import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPropertyCards } from '../../api/Api'; // Make sure this path is correct

const HotelCard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await getPropertyCards(); // Fetch from API
        setData(response);
      } catch (error) {
        console.error('Failed to fetch hotel cards:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  if (loading) return <p className="px-4">Loading hotels...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div
          key={item._id} // Use _id if coming from MongoDB or similar
          onClick={() => navigate(`/carddetails/${item._id}`)}
          className="cursor-pointer flex flex-col bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 ease-in-out"
        >
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-xl" />

          <div className="p-4 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-lg font-semibold text-black leading-snug">{item.title}</h2>
              {item.badge && (
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-lg ml-2">
                  {item.badge}
                </span>
              )}
            </div>

            <p className="text-sm text-black">Classic Triple Room • 1 queen bed</p>

            <ul className="text-sm text-black space-y-1 my-2">
              <li>✔ Free cancellation</li>
              <li>✔ No prepayment needed</li>
            </ul>

            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-lg font-bold text-black">
                  {item.price} CAD <span className="text-sm text-gray-500">+ taxes</span>
                </p>
              </div>
              <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                ★ {item.rating}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotelCard;
