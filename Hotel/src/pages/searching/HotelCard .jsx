import React from 'react';
import { useNavigate } from 'react-router-dom';



import Queen from '../../assets/Card/queenbed.webp';

import Image4 from "../../assets/card Image/4.avif";
import Image5 from "../../assets/card Image/5.avif";
import Image6 from "../../assets/card Image/6.avif";
import Image7 from "../../assets/card Image/7.avif";
import Bed1 from '../../assets/Card/bed1.png'
import Bed2 from '../../assets/Card/bed2.png'

const HotelCard = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: "Plains Motors, Single Room",
      image: Bed1,
      title: "Plains Motors, Single Room",
      price: 90,
      rating: 4.99,
      badge: "Guest favourite",
    },
    {
      id: "Plains Motors, Double Room",
      image: Bed2,    
      title: "Plains Motors, Double Room",
      price: 69,
      rating: 4.91,
      badge: "Guest favourite",
    },
    {
      id: "Plains Motors, 1 Queen Bed",
      image: Queen,
      title: "Plains Motors, 1 Queen Bed",
      price: 69,
      rating: 4.87,
      badge: "Guest favourite",
    },
    {
      id: "home-in-mysuru",
      image: Image4,
      title: "Home in Mysuru",
      price: 69,
      rating: 5.0,
      badge: "Guest favourite",
    },
    {
      id: "flat-in-mysore-1",
      image: Image5,
      title: "Flat in Mysore",
      price: 69,
      rating: 4.78,
      badge: "Guest favourite",
    },
    {
      id: "flat-in-mysore-2",
      image: Image6,
      title: "Flat in Mysore",
      price: 249 ,
      rating: 4.78,
      badge: "Guest favourite",
    },
    {
      id: "flat-in-mysore-3",
      image: Image7,
      title: "Flat in Mysore",
      price: 69,
      rating: 4.78,
      badge: "Guest favourite",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/carddetails/${item.id}`)}
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
