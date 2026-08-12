import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/card Image/plainsmotorinn.jpeg";

export default function HeroSection() {
  return (
    <section className="relative h-[700px] md:h-[850px] w-full flex items-center bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${heroBg}")` }}
      >
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row justify-start items-center mt-36 md:mt-0">
        
        {/* Left Content */}
        <div className="text-white max-w-lg mb-10 md:mb-0 space-y-6">
          <p className="uppercase tracking-[0.2em] font-semibold text-sm">we're your home on the road</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
            You're in <br /> <span className="text-[#4BA9A2]">Stettler.</span>
          </h1>
          <p className="text-lg font-medium opacity-90 leading-relaxed max-w-md">
            Built for shift workers, truck drivers, and road trippers. Easy highway access, ample truck parking, and zero booking fees when you book direct.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
            <span className="bg-[#003580] text-white text-lg font-bold px-3 py-1 rounded">8.4</span>
            <span className="text-sm font-semibold">Very Good</span>
            <span className="text-lg opacity-75">— expedia.ca</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/hotel-card" className="bg-[#F39C49] hover:bg-[#e08c3c] text-blue-900 font-bold p-1 rounded-md transition-colors text-center text-sm flex items-center justify-center">
              <div className="flex items-stretch justify-center h-full w-full">
                <div className="px-4 py-2 border-r border-blue-900/20 flex flex-col items-center justify-center">
                  <span className="text-[16px] uppercase tracking-wider  leading-none mb-1">Book Direct</span>
                  
                </div>
                
              </div>
            </Link>
            <a href="tel:403-742-3491" className="bg-[#4BA9A2] text-blue-900 border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md transition-colors text-center text-sm flex items-center justify-center gap-2 text-[16px]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              403-742-3491
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
