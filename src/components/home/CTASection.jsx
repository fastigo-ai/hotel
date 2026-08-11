import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#4BA9A2 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
          Ready for a <span className="text-[#4BA9A2]">Comfortable Stay?</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you're stopping by for the night or staying for the season, we have a room waiting for you at Plains Motor Inn.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/hotel-card" className="bg-[#4BA9A2] hover:bg-[#3d8c86] text-white font-bold py-4 px-10 rounded-md transition-colors text-lg w-full sm:w-auto shadow-lg">
            Book Now
          </Link>
          <div className="text-gray-400 font-medium hidden sm:block">or</div>
          <a href="tel:403-742-3491" className="bg-[#F39C49] hover:bg-[#e08c3c] text-blue-900 font-bold py-4 px-10 rounded-md transition-colors text-lg flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call 403-742-3491
          </a>
        </div>
      </div>
    </section>
  );
}
