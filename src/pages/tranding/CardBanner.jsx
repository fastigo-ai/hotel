import React from "react";
import { Link } from "react-router-dom";
import Banner from "../../assets/logo/topBanner.png";
import Banner1 from "../../assets/logo/topBanner1.png";
import Daily from "../../assets/logo/daily.png";

const CardBanner = () => {
  return (
    <div className="flex md:flex-row flex-nowrap overflow-x-auto gap-4 p-4 max-w-7xl mx-auto hide-scrollbar">
      <Link
          to="/carddetails/686fec855bda7cee043451e1"
          className="min-w-[75%] sm:min-w-[300px] md:min-w-0 md:flex-1"
        >
          <img
            src={Banner}
            
            className="w-full h-80 rounded-xl object-cover transition-transform duration-300 "
          />
        </Link>
      <Link
          to="/carddetails/686feb9f5bda7cee043451cf"
          className="min-w-[75%] sm:min-w-[300px] md:min-w-0 md:flex-1"
        >
          <img
            src={Banner1}
            
            className="w-full h-80 rounded-xl object-cover transition-transform duration-300 "
          />
        </Link>
      <Link
          to="/hotel-card"
          className="min-w-[75%] sm:min-w-[300px] md:min-w-0 md:flex-1"
        >
          <img
            src={Daily}
            
            className="w-full h-80 rounded-xl object-cover transition-transform duration-300 "
          />
        </Link>
    </div>
  );
};

export default CardBanner;
