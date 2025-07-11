import React from "react";
import { FaTags } from "react-icons/fa"; 

const MembershipBanner = () => {
  return (
    <a href="tel:4037423491" className="text-black ">
    <div className="  max-w-7xl mx-auto px-4">
    <div className="bg-[#57ccc4] text-black rounded-2xl flex items-center justify-between px-4  py-4">
      
      {/* Left icon + text */}
      <div className="flex items-center gap-4">
        {/* Yellow Circle Icon */}
        <div className="bg-yellow-400 p-3 rounded-full">
          <FaTags className="text-black text-xl" />
        </div>

        {/* Promo Text */}
        <p className="text-sm md:text-base font-medium ">
          Call Now or Book to Reserve your Room Today.

        
        </p>
      </div>

      {/* Sign In Button */}
      <button className="bg-white text-black text-sm font-semibold px-4 py-2 rounded-full ">
        Sign in
      </button>
    </div>
    </div>
    </a>
  );
};

export default MembershipBanner;
