import React from "react";
import { Link } from "react-router-dom";
import no1 from "../../assets/card Image/no1.png";
import "../../App.css";
import { FaBed, FaMapMarkerAlt, FaHandshake, FaCalendarAlt } from "react-icons/fa";

export default function WelcomeSection() {
  const benefits = [
    {
      title: "Clean & Quiet Rooms",
      description: "Rest easy in comfortable, well-kept rooms.",
      icon: <FaBed />
    },
    {
      title: "Great Location",
      description: "Halfway between Red Deer & Drumheller",
      icon: <FaMapMarkerAlt />
    },
    {
      title: "Friendly Service",
      description: "Local, reliable, and always here to help.",
      icon: <FaHandshake />
    },
    {
      title: "Long Term Stays",
      description: "Weekly & monthly rates available.",
      icon: <FaCalendarAlt />
    }
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div>
            <p className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-4">Welcome to</p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4BA9A2] leading-tight mb-2">
              <span className="Text">Plains</span> <span className="Text-M">Motor</span> <span className="Text-o">Inn</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Simple stays. <br />
              <span className="text-gray-900">Better value.</span>
            </h3>
          </div>
          
          <p className="text-gray-600 text-lg">
            Whether you're here for the night or for the season, we've got your stay covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="text-3xl text-[#4BA9A2]">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link to="/about" className="inline-block bg-[#F39C49] hover:bg-[#e08c3c] text-black font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-sm">
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Right Image area */}
        <div className="relative">
          <img 
            src={no1}
            alt="Plains Motor Inn Exterior" 
            className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
          />
          
          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-[#F8F5F2] p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl border border-gray-200 hidden md:block">
            <p className="text-gray-600 font-medium mb-1">Rates from</p>
            <div className="flex items-baseline gap-1 text-[#4BA9A2] mb-3">
              <span className="text-3xl font-medium">$</span>
              <span className="text-6xl font-serif font-bold">98</span>
              <span className="text-lg text-gray-600">/night</span>
            </div>
            <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <span className="text-[#4BA9A2]">✓</span> Best Rate Guaranteed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
