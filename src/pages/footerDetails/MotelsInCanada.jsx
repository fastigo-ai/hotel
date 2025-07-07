import React from "react";

const MotelsInCanada = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          🏨 Motels in Canada: What You Need to Know
        </h1>
        <p className="text-lg mb-6 text-center">
          <strong>Affordable, Comfortable, and Traveler-Friendly Stays Across the Country</strong>
        </p>
        <p className="text-lg mb-10 text-center">
          If you’re planning a road trip or traveling through Canada’s scenic highways, motels are one of the best ways to stay on budget while enjoying comfort, convenience, and local charm.
        </p>

        {/* What is a Motel */}
        <div className="bg-blue-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">🚗 What Is a Motel?</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Have direct outdoor access to each room (great for unloading vehicles)</li>
            <li>Offer easy parking near your door</li>
            <li>Are smaller, more personal than big hotels</li>
            <li>Focus on affordability, functionality, and quick check-ins</li>
          </ul>
        </div>

        {/* What Makes Canadian Motels Unique */}
        <div className="bg-green-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🇨🇦 What Makes Canadian Motels Unique?</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Spacious parking for cars, trucks, trailers, and RVs</li>
            <li>Friendly, small-town hospitality</li>
            <li>Flexible booking for nightly, weekly, or monthly stays</li>
            <li>Often family-run, with personalized service</li>
            <li>Many are pet-friendly and ideal for long-distance drivers, contractors, or touring guests</li>
          </ul>
        </div>

        {/* Who Stays at Motels */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-4">🧳 Who Stays at Motels in Canada?</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Road trippers exploring the provinces</li>
            <li>Contractors and tradespeople on project work</li>
            <li>Seniors or families seeking affordable options</li>
            <li>Solo travelers or couples passing through rural towns</li>
            <li>Guests attending local events, sports, or weddings</li>
          </ul>
        </div>

        {/* What to Look For */}
        <div className="bg-purple-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">💡 What to Look for in a Good Motel</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>✅ Clean, well-maintained rooms</li>
            <li>✅ Comfortable beds and quiet surroundings</li>
            <li>✅ Reliable Wi-Fi and in-room amenities</li>
            <li>✅ On-site or nearby dining options</li>
            <li>✅ Safety and 24/7 access</li>
            <li>✅ Honest pricing with no surprise fees</li>
          </ul>
        </div>

        {/* Example Motel */}
        <div className="bg-orange-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-orange-700 mb-4">🌾 Example: Plains Motor Inn, Stettler, Alberta</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Affordable daily, weekly & monthly rates</li>
            <li>Truck-friendly parking</li>
            <li>Pet-friendly rooms available</li>
            <li>Friendly, family-style service</li>
            <li>Central Alberta location — great stopover between Edmonton & Calgary</li>
          </ul>
          <div className="mt-4 text-lg">
            📍 <strong>Address:</strong> 4812 - 61 Street, Stettler, AB<br />
            📞 <strong>Phone:</strong> <a href="tel:4037423491" className="text-black underline">403-742-3491</a><br />
            ✉️ <strong>Email:</strong>{" "}
            <a href="mailto:plainsmotorinnn@gmail.com" className="text-black underline">
              plainsmotorinnn@gmail.com
            </a>
          </div>
        </div>

        {/* Where to Find */}
        <div className="bg-gray-100 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">🗺️ Where to Find Motels in Canada</h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>Trans-Canada Highway (Hwy 1)</li>
            <li>Alberta Hwy 21 / 12 / 2</li>
            <li>BC & Prairie province highways</li>
            <li>Near national parks, rural towns, and border crossings</li>
          </ul>
          <p className="mt-4 text-lg">
            Use platforms like: <strong>Google Maps</strong>, <strong>Booking.com</strong>, <strong>TripAdvisor</strong>, <strong>Hotels.ca</strong>
          </p>
        </div>

        {/* Final Note */}
        <div className="bg-white border-l-4 border-blue-600 p-6 shadow">
          <h2 className="text-2xl font-semibold text-black mb-3">🧭 Planning Your Stay?</h2>
          <p className="text-lg">
            For friendly, honest, and budget-conscious travel across Canada, motels are the smart choice. And if your path brings you through Central Alberta — we’d love to welcome you at <strong>Plains Motor Inn</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotelsInCanada;
