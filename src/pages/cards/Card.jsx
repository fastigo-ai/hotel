import React from "react";
import { Link } from "react-router-dom";
import '../../App.css'
import Queen from '../../assets/Card/queenbed.webp';
import Image4 from "../../assets/card Image/4.avif";
import Image5 from "../../assets/card Image/5.avif";
import Image6 from "../../assets/card Image/6.avif";
import Image7 from "../../assets/card Image/7.avif";
import Bed1 from '../../assets/Card/bed1.png'
import Bed2 from '../../assets/Card/bed2.png'

const CardSlider = () => {
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
      price: 99,
      rating: 4.91,
      badge: "Guest favourite",
    },
    {
      id: "Plains Motors, 1 Queen Bed",
      image: Queen,
      title: "Plains Motors, 1 Queen Bed",
      price: 90,
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
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-lg md:text-2xl font-semibold mb-4">
        Available in Canada this Daily & weekend
      </h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
        {data.map((item, index) => (
          <Link
            to={`/carddetails/${item.id}`}
            key={index}
            className="min-w-[220px] sm:min-w-[250px] bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
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
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">
                {item.price} CAD for 2 nights • ★ {item.rating}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
