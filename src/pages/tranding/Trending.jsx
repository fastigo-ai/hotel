// components/TrendingDestinations.jsx
import React from "react";
import Image1 from '../../assets/trending/1.jpg'
import Image2 from '../../assets/trending/2.jpg'
import Image3 from '../../assets/trending/3.jpg'
import Image4 from '../../assets/trending/4.jpg'
import Image5 from '../../assets/trending/5.jpg'
import { Link } from "react-router-dom";

const destinations = {
  top: [
    { name: "London", flag: "🇬🇧", image: Image1 },
    { name: "Seoul", flag: "🇰🇷", image: Image2 },
  ],
  bottom: [
    { name: "Toronto", flag: "🇨🇦", image: Image3 },
    { name: "Niagara Falls", flag: "🇨🇦", image: Image4 },
    { name: "Montréal", flag: "🇨🇦", image: Image5 },
  ],
};

const DestinationCard = ({ name, flag, image }) => (
  <Link to=''>
    <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer min-w-[250px]">
      <img
        src={image}
        alt={name}
        className="w-full h-75 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute top-2 left-2 text-white text-2xl font-bold bg-opacity-40 px-2 py-1 rounded">
        {name} <span className="ml-1">{flag}</span>
      </div>
    </div>
  </Link>
);

const TrendingDestinations = () => {
  const allDestinations = [...destinations.top, ...destinations.bottom];

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Trending destinations</h2>

      {/* Desktop & Tablet View */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {destinations.top.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.bottom.map((dest, index) => (
            <DestinationCard key={index + 2} {...dest} />
          ))}
        </div>
      </div>

      {/* Mobile View - Horizontal Scroll */}
      <div className="sm:hidden">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {allDestinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;
