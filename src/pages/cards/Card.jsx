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

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6 mt-6">
        {/* Shimmer Title */}
        <div className="h-7 w-64 bg-gray-200 rounded animate-pulse mb-4"></div>
        {/* Shimmer Cards Slider */}
        <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="min-w-[220px] sm:min-w-[250px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
              <div className="w-full h-40 bg-gray-200"></div>
              <div className="p-3 space-y-2.5">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const renderCard = (item) => {
    const cardContent = (
      <div className={`min-w-[220px] sm:min-w-[250px] bg-white rounded-xl shadow-sm overflow-hidden transition-shadow duration-200 ${
        item.inStock ? 'hover:shadow-md cursor-pointer' : 'opacity-60 cursor-not-allowed'
      }`}>
        {console.log(item, "this is my item")}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover"
          />
          {item.badge && (
            <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-full text-xs font-semibold shadow">
              {item.badge}
            </div>
          )}
          {!item.inStock && (
            <div className="absolute inset-0  flex items-center justify-center">
              <div className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Currently Not Available
              </div>
            </div>
          )}
        </div>
        <div className="p-3">
          <h3 className="font-medium text-sm text-gray-900">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 mb-1">{item.roomType} Room</p>
          <p className="text-xs text-gray-500 mb-1">
            {item.isSmokingAllowed ? "Smoking Allowed" : "Non-smoking"}
          </p>
          <p className="text-sm text-gray-700">
            ${item.price} for 1 night • ★ {item.rating}
          </p>
          {!item.inStock && (
            <p className="text-xs text-red-600 font-semibold mt-1">
              Out of Stock
            </p>
          )}
        </div>
      </div>
    );

    // If item is in stock, wrap with Link, otherwise return just the card
    if (item.inStock) {
      return (
        <Link
          to={`/carddetails/${item._id}`}
          key={item._id}
          className="block"
        >
          {cardContent}
        </Link>
      );
    } else {
      return (
        <div key={item._id} className="block">
          {cardContent}
        </div>
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 mt-6">
      <h2 className="text-lg md:text-2xl font-semibold mb-4">
        Daily,Weekly & Monthly
      </h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
        {cards.map((item) => renderCard(item))}
      </div>
    </div>
  );
};

export default CardSlider;