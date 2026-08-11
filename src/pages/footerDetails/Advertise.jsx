import React from "react";
import { Link } from "react-router-dom";
import { Megaphone, LayoutList, Target, Mail, Phone } from "lucide-react";

const Advertise = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Promote Your Brand</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            🤝 Advertise With Us
          </h1>
          <p className="mt-4 text-lg text-white/90">Reach travelers, work crews, and long-stay guests.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We welcome local businesses, service providers, and tourism partners to advertise at Plains. Get your brand in front of travelers, crews, and long-stay guests through:
        </p>
      </section>

      {/* Advertising Options & Ideal Partners */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Advertising Options */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
              <LayoutList size={24} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">Available Advertising Options</h2>
            <ul className="space-y-4">
              {[
                "In-room flyers or brochures",
                "Lobby and hallway poster placements",
                "Keycard branding",
                "Partner listing on our website"
              ].map((option, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{option}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Partners */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">Ideal Partners</h2>
            <ul className="space-y-4">
              {[
                "Local restaurants, delivery, and diners",
                "Car rentals, mechanics, and towing services",
                "Event organizers and attractions in Stettler",
                "Health & wellness services"
              ].map((partner, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{partner}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* Let's Work Together CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 bg-[#FFF5EE] text-[#F39C49] rounded-full flex items-center justify-center mx-auto mb-8">
          <Megaphone size={28} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-[#4BA9A2] mb-6">Let's Work Together</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Custom packages and flexible durations available. Let’s support each other and grow together.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="mailto:plainsmotorinnn@gmail.com" className="w-full sm:w-auto bg-[#1A4C43] hover:bg-[#133c35] text-white font-bold py-4 px-8 rounded-md transition-colors flex items-center justify-center gap-3 shadow-md">
            <Mail size={20} />
            Email: plainsmotorinnn@gmail.com
          </a>
          <a href="tel:4037423491" className="w-full sm:w-auto bg-white border border-gray-300 hover:border-[#1A4C43] text-gray-800 font-bold py-4 px-8 rounded-md transition-colors flex items-center justify-center gap-3 shadow-sm">
            <Phone size={20} />
            Phone: 403-742-3491
          </a>
        </div>
      </section>

    </div>
  );
};

export default Advertise;
