import React from "react";
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
    { name: "Stettler Falls", flag: "🇨🇦", image: Image4 },
    { name: "Stettler, Alberta", flag: "🇨🇦", image: Image5 },
  ],
  top2: [
    { name: "Stettler, Alberta", flag: "CA", image: Image6 },
    { name: "Stettler, Alberta", flag: "CA", image: Image7 },
  ],
  bottom2: [
    { name: "Stettler, Alberta", flag: "CA", image: Image8 },
    { name: "Stettler Falls", flag: "🇨🇦", image: Image9 },
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

        <div className="sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {allDestinations.map((dest, index) => (
              <DestinationCard key={`mobile-dup-${index}`} {...dest} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingDestinations;
