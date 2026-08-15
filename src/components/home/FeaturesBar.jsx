import React from "react";
import { FaWifi, FaCoffee, FaParking, FaTruckMoving } from "react-icons/fa";

export default function FeaturesBar() {
  const features = [
    { icon: <FaWifi className="text-2xl text-gray-600" />, text: "FREE WIFI" },
    { icon: <FaCoffee className="text-2xl text-gray-600" />, text: "FREE CONTINENTAL BREAKFAST" },
    { icon: <FaParking className="text-2xl text-gray-600" />, text: "FREE PARKING" },
    { icon: <FaTruckMoving className="text-2xl text-gray-600" />, text: "FREE TRUCK & TRAILER PARKING" },
  ];

  return (
    <div className="bg-[#D2B48C] border-b border-[#c2a47c]">
      <div className="max-w-7xl mx-auto px-6 py-6 overflow-x-auto hide-scrollbar">
        <div className="flex justify-between items-center min-w-max md:min-w-0 gap-8 md:gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c2a47c] flex items-center justify-center bg-white shadow-sm">
                {feature.icon}
              </div>
              <span className="text-xs md:text-sm font-bold tracking-wider text-gray-900 uppercase">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
