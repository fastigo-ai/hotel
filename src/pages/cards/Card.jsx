import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPropertyCards } from "../../api/Api"; 
import '../../App.css';

const CardSlider = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await getPropertyCards();
        setCards(data);
      } catch (error) {
        console.error("Failed to fetch property cards:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCards();
  }, []);

  if (loading) return <p className="px-4">Loading properties...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-lg md:text-2xl font-semibold mb-4">
        Available in Canada this Daily & Weekend
      </h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
        {cards.map((item) => (
          <Link
            to={`/carddetails/${item._id}`}
            key={item._id}
            className="min-w-[220px] sm:min-w-[250px] bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative">
              
              <img
                src={item.image} // or use item.image if it's a full URL
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              {item.badge && (
                <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">
                  {item.badge}
                </div>
              )}
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">
                {item.price} CAD for 1 nights • ★ {item.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
