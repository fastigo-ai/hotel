import React from "react";
import '../../App.css'
const TravelGuide = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          🇨🇦 Explore Canada: Travel Guide
        </h1>
        <p className="text-lg mb-8 text-center">
          <strong>Discover Canada — From Coast to Rockies</strong>
        </p>
        <p className="text-lg mb-6 text-center">
          Planning a trip across Canada? Whether you're driving through Alberta or exploring the great outdoors, Canada offers some of the world’s most breathtaking landscapes, warm hospitality, and unforgettable experiences.
        </p>
        <p className="text-lg mb-10 text-center font-medium">
          <span className="Text">P</span>lains <span className="Text-M">M</span>otors <span className="Text-o">I</span>NN is proud to be part of your journey.
        </p>

        {/* Getting Around */}
        <div className="bg-blue-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">✈️ Getting Around Canada</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>By Car:</strong> Canada is built for road trips. Highways are safe and scenic, especially in Alberta and British Columbia.</li>
            <li><strong>By Train:</strong> VIA Rail offers beautiful cross-country train travel — especially through the Rockies.</li>
            <li><strong>By Air:</strong> Domestic flights are frequent, connecting major cities and remote regions.</li>
          </ul>
          <p className="mt-4 text-black font-medium">📍 Tip: Stettler is ideally located between Edmonton and Calgary — a smart overnight stop for travelers.</p>
        </div>

        {/* Must-See */}
        <div className="bg-green-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🏞 Must-See Canadian Destinations</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>Banff & Jasper National Parks (Alberta):</strong> Stunning mountains, turquoise lakes, and wildlife</li>
            <li><strong>Niagara Falls (Ontario):</strong> One of the world’s most famous waterfalls</li>
            <li><strong>Quebec City (Quebec):</strong> A slice of Europe in North America</li>
            <li><strong>Tofino (BC):</strong> Rainforests, surfing, and coastal charm</li>
            <li><strong>Prince Edward Island:</strong> Famous for seafood, beaches, and Anne of Green Gables</li>
          </ul>
        </div>

        {/* Travel Seasons */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🍁 Travel Seasons in Canada</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><strong>Summer (June–August):</strong> Perfect for road trips, camping, and festivals</li>
            <li><strong>Fall (Sept–Oct):</strong> Stunning foliage, quieter travel</li>
            <li><strong>Winter (Nov–Mar):</strong> Snow sports, Northern Lights, cozy escapes</li>
            <li><strong>Spring (Apr–May):</strong> Blooms, fewer crowds, and great deals</li>
          </ul>
        </div>

        {/* What to Pack */}
        <div className="bg-purple-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">🧳 What to Pack for a Canadian Trip</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Warm layers (weather can change fast — even in summer)</li>
            <li>Comfortable shoes for walking or hiking</li>
            <li>Travel insurance and emergency contacts</li>
            <li>Adapter (Canada uses 120V power, Type A/B plugs)</li>
            <li>Valid ID and travel documents</li>
          </ul>
        </div>

        {/* Prairie Trip */}
        <div className="bg-orange-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">🚗 Planning a Prairie Road Trip?</h2>
          <p className="text-lg mb-4">
            Stettler is a hidden gem in Alberta’s Heartland — surrounded by farmland, lakes, and small-town charm. Staying at Plains Motor Inn means you’re:
          </p>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>2.5 hrs from Calgary</li>
            <li>2 hrs from Edmonton</li>
            <li>Close to the Alberta Prairie Railway Excursions</li>
            <li>Near great fishing, hiking, and snowmobile trails</li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">🌐 Helpful Travel Links</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li><a href="https://travel.gc.ca/" target="_blank" rel="noopener noreferrer" className="text-black underline">Canada.ca Travel & Tourism</a></li>
            <li><a href="https://parks.canada.ca/" target="_blank" rel="noopener noreferrer" className="text-black underline">Parks Canada – National Park Passes</a></li>
            <li><a href="https://travelalberta.com/" target="_blank" rel="noopener noreferrer" className="text-black underline">Explore Alberta – Events & Attractions</a></li>
          </ul>
        </div>

        {/* Local Help */}
        <div className="bg-white p-6 border-l-4 border-blue-600 shadow">
          <h2 className="text-2xl font-semibold text-black mb-3">Need Local Tips?</h2>
          <p className="text-lg">
            Talk to our front desk staff — we’ll help you plan your route, recommend nearby spots, or even suggest a great local meal. We’ve hosted guests from across Canada (and the world) — and we’re always happy to help you feel at home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelGuide;
