import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

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


// Grouped destinations by section
const destinations = {
  top1: [
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image1 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image2 },
  ],
  bottom1: [
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image3 },
    { name: "Stettler Alberta", flag: "🇨🇦", image: Image4 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image5 },
  ],
  top2: [
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image6 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image7 },
  ],
  bottom2: [
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image8 },
    { name: "Stettler Alberta", flag: "🇨🇦", image: Image9 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image10 },
  ],
};

// For mobile horizontal scroll view
const allDestinations = [
  ...destinations.top1,
  ...destinations.bottom1,
  ...destinations.top2,
  ...destinations.bottom2,
];

// Single photo card
const DestinationCard = ({ name, flag, image }) => (
  <div className="relative rounded-lg overflow-hidden shadow-md group cursor-pointer min-w-[250px]">
    <img
      src={image}
      alt={name}
      className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-lg font-semibold px-3 py-1 rounded">
      <Link
        to="https://destinationstettler.com/things-to-do/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name} <span className="ml-1">{flag}</span>
      </Link>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="w-full bg-gray-50">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
          <span className="Text">P</span>lans <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn
        </h2>

        {/* Desktop & Tablet Layout */}
        <div className="hidden sm:block space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {destinations.top1.map((dest, index) => (
              <DestinationCard key={`top1-${index}`} {...dest} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.bottom1.map((dest, index) => (
              <DestinationCard key={`bottom1-${index}`} {...dest} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {destinations.top2.map((dest, index) => (
              <DestinationCard key={`top2-${index}`} {...dest} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {destinations.bottom2.map((dest, index) => (
              <DestinationCard key={`bottom2-${index}`} {...dest} />
            ))}
          </div>
        </div>

        {/* Mobile Layout - Horizontal Scroll */}
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

export default Gallery;
