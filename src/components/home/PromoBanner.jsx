import React from "react";
import { Link } from "react-router-dom";
import truckBg from "../../assets/truck.jpeg";

export default function PromoBanner() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] w-full flex items-center bg-gray-900 overflow-hidden z-10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-[center_60%] bg-no-repeat"
        style={{ backgroundImage: `url(${truckBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10"></div>
       </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center">
        <div className="max-w-xl text-white space-y-4">
          {/* <p className="uppercase tracking-[0.2em] font-bold text-[10px] sm:text-xs text-white/90"></p> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
            Semi-trucks and trailers <br />
            parking Available
          </h2>
          <p className="text-sm md:text-base font-medium opacity-90 leading-relaxed max-w-md pt-2">
            Ample space for large vehicles with easy access and peace of mind. We understand the needs of professional drivers and travelers towing equipment.
          </p>
          <div className="pt-4">
            
          </div>
        </div>
      </div>
    </section>
  );
}
