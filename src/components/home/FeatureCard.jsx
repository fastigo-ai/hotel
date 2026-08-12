import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#F8F5F2] hover:bg-white transition-colors duration-300 rounded-xl p-4 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md border border-gray-100">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-[#4BA9A2]/30 flex items-center justify-center mb-4 sm:mb-6 text-2xl sm:text-3xl text-[#4BA9A2] shadow-sm">
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
