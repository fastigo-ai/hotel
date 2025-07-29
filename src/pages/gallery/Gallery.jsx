import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

// Importing all images
import Image1 from '../../assets/trending/1.JPG';
import Image2 from '../../assets/trending/2.JPG';
import Image3 from '../../assets/trending/3.JPG';
import Image4 from '../../assets/trending/4.JPG';
import Image5 from '../../assets/trending/5.JPG';
import Image6 from '../../assets/trending/6.JPG';
import Image7 from '../../assets/trending/7.JPG';
import Image8 from '../../assets/trending/8.JPG';
import Image9 from '../../assets/trending/9.JPG';
import Image10 from '../../assets/trending/10.JPG';

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
