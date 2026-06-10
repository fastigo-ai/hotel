import React from "react";
// Cloudinary CDN Image URLs (Optimized with f_auto, q_auto)
const Image1 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092936/hotel_assets/trending/1.jpg";
const Image2 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092951/hotel_assets/trending/2.jpg";
const Image3 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092954/hotel_assets/trending/3.jpg";
const Image4 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092956/hotel_assets/trending/4.jpg";
const Image5 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092959/hotel_assets/trending/5.jpg";
const Image6 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092962/hotel_assets/trending/6.jpg";
const Image7 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092964/hotel_assets/trending/7.jpg";
const Image8 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092966/hotel_assets/trending/8.jpg";
const Image9 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092969/hotel_assets/trending/9.jpg";
const Image10 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092944/hotel_assets/trending/10.jpg";
import { Link } from "react-router-dom";
import "../../App.css";

// Organized data
const destinations = {
  top1: [
    { name: "Stettler, Alberta", flag: "CA", image: Image1 },
    { name: "Stettler, Alberta", flag: "CA", image: Image2 },
  ],
  bottom1: [
    { name: "Stettler, Alberta", flag: "CA", image: Image3 },
    { name: "Stettler Alberta", flag: "🇨🇦", image: Image4 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image5 },
  ],
  top2: [
    { name: "Stettler, Alberta", flag: "CA", image: Image6 },
    { name: "Stettler, Alberta", flag: "CA", image: Image7 },
  ],
  bottom2: [
    { name: "Stettler, Alberta", flag: "CA", image: Image8 },
    { name: "Stettler Alberta", flag: "🇨🇦", image: Image9 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image10 },
  ],
};

// Combined array for mobile view
const allDestinations = [
  ...destinations.top1,
  ...destinations.bottom1,
  ...destinations.top2,
  ...destinations.bottom2,
];

// Fixed single card component
const DestinationCard = ({ name, flag, image }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer min-w-[250px]">
    <img
      src={image}
      alt={name}
      className="w-full h-75 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute top-2 left-2 text-white text-2xl font-bold bg-opacity-40 px-2 py-1 rounded">
      <Link to="https://destinationstettler.com/things-to-do/" target="_blank">
        {name} <span className="ml-1">{flag}</span>
      </Link>
    </div>
  </div>
);

const TrendingDestinations = () => {
  return (
    <div className="w-full">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          <span className="Text">P</span>lains <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn
        </h2>

        {/* Desktop & Tablet View */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {destinations.top1.map((dest, index) => (
              <DestinationCard key={`top1-${index}`} {...dest} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.bottom1.map((dest, index) => (
              <DestinationCard key={`bottom1-${index}`} {...dest} />
            ))}
          </div>
        </div>

        <br />

        <div className="hidden sm:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {destinations.top2.map((dest, index) => (
              <DestinationCard key={`top2-${index}`} {...dest} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.bottom2.map((dest, index) => (
              <DestinationCard key={`bottom2-${index}`} {...dest} />
            ))}
          </div>
        </div>

        {/* Mobile View - Horizontal Scroll */}
        <div className="sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {allDestinations.map((dest, index) => (
              <DestinationCard key={`mobile-${index}`} {...dest} />
            ))}
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default TrendingDestinations;
