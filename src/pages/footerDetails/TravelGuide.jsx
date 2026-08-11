import React from "react";
import '../../App.css';

const TravelGuide = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Travel Inspiration</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            🇨🇦 Explore Canada: Travel Guide
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>Discover Canada — From Coast to Rockies</strong>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Planning a trip across Canada? Whether you're driving through Alberta or exploring the great outdoors, Canada offers some of the world’s most breathtaking landscapes, warm hospitality, and unforgettable experiences.
        </p>
        <p className="text-lg text-[#4BA9A2] font-serif font-medium">
          <span className="Text">P</span>lains <span className="Text-M">M</span>otors <span className="Text-o">I</span>NN is proud to be part of your journey.
        </p>
      </section>

      {/* Guide Content Section */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Getting Around */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">✈️ Getting Around Canada</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                <span className="text-gray-700 text-lg"><strong>By Car:</strong> Canada is built for road trips. Highways are safe and scenic, especially in Alberta and British Columbia.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                <span className="text-gray-700 text-lg"><strong>By Train:</strong> VIA Rail offers beautiful cross-country train travel — especially through the Rockies.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                <span className="text-gray-700 text-lg"><strong>By Air:</strong> Domestic flights are frequent, connecting major cities and remote regions.</span>
              </li>
            </ul>
            <p className="mt-6 text-[#4BA9A2] font-medium bg-[#E6EFEA] p-4 rounded-lg text-lg">📍 Tip: Stettler is ideally located between Edmonton and Calgary — a smart overnight stop for travelers.</p>
          </div>

          {/* Must-See */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🏞 Must-See Canadian Destinations</h2>
            <ul className="space-y-4">
              {[
                "<strong>Banff & Jasper National Parks (Alberta):</strong> Stunning mountains, turquoise lakes, and wildlife",
                "<strong>Niagara Falls (Ontario):</strong> One of the world’s most famous waterfalls",
                "<strong>Quebec City (Quebec):</strong> A slice of Europe in North America",
                "<strong>Tofino (BC):</strong> Rainforests, surfing, and coastal charm",
                "<strong>Prince Edward Island:</strong> Famous for seafood, beaches, and Anne of Green Gables"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg" dangerouslySetInnerHTML={{__html: item}}></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Travel Seasons */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🍁 Travel Seasons in Canada</h2>
            <ul className="space-y-4">
              {[
                "<strong>Summer (June–August):</strong> Perfect for road trips, camping, and festivals",
                "<strong>Fall (Sept–Oct):</strong> Stunning foliage, quieter travel",
                "<strong>Winter (Nov–Mar):</strong> Snow sports, Northern Lights, cozy escapes",
                "<strong>Spring (Apr–May):</strong> Blooms, fewer crowds, and great deals"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg" dangerouslySetInnerHTML={{__html: item}}></span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Pack */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🧳 What to Pack for a Canadian Trip</h2>
            <ul className="space-y-4">
              {[
                "Warm layers (weather can change fast — even in summer)",
                "Comfortable shoes for walking or hiking",
                "Travel insurance and emergency contacts",
                "Adapter (Canada uses 120V power, Type A/B plugs)",
                "Valid ID and travel documents"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prairie Trip */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🚗 Planning a Prairie Road Trip?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Stettler is a hidden gem in Alberta’s Heartland — surrounded by farmland, lakes, and small-town charm. Staying at Plains Motor Inn means you’re:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "2.5 hrs from Calgary",
                "2 hrs from Edmonton",
                "Close to the Alberta Prairie Railway Excursions",
                "Near great fishing, hiking, and snowmobile trails"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer / Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Helpful Links */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🌐 Helpful Travel Links</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
              <a href="https://travel.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium text-lg transition-colors underline">Canada.ca Travel & Tourism</a>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
              <a href="https://parks.canada.ca/" target="_blank" rel="noopener noreferrer" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium text-lg transition-colors underline">Parks Canada – National Park Passes</a>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
              <a href="https://travelalberta.com/" target="_blank" rel="noopener noreferrer" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium text-lg transition-colors underline">Explore Alberta – Events & Attractions</a>
            </li>
          </ul>
        </div>

        {/* Local Help */}
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#F39C49]">
          <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">Need Local Tips?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Talk to our front desk staff — we’ll help you plan your route, recommend nearby spots, or even suggest a great local meal. We’ve hosted guests from across Canada (and the world) — and we’re always happy to help you feel at home.
          </p>
        </div>
      </section>

    </div>
  );
};

export default TravelGuide;
