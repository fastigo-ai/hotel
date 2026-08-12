import React from "react";
import FeatureCard from "./FeatureCard";
import { FaShieldAlt, FaMoneyBillWave, FaSyncAlt, FaUserTie } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#4BA9A2]" />, // Best rate guaranteed icon
      title: "Best Rate Guaranteed",
      description: "Always book direct for the best rates."
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-[#4BA9A2]" />, // No booking fees icon
      title: "No Booking Fees",
      description: "No hidden fees. No surprises."
    },
    {
      icon: <FaSyncAlt className="text-3xl text-[#4BA9A2]" />, // Flexible stays icon
      title: "Easy & Flexible Stays",
      description: "Daily, weekly & monthly options."
    },
    {
      icon: <FaUserTie className="text-3xl text-[#4BA9A2]" />, // Local & owner operated icon
      title: "Local & Owner Operated",
      description: "Proudly serving our community."
    }
  ];

  return (
    <section className="bg-transparent py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-gray-900 leading-tight mb-16">
          Why Guests <span className="text-[#4BA9A2]">Choose Us</span>
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
