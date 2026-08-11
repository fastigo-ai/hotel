import React from "react";
import '../../App.css';

const MotelsInCanada = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Accommodation Guide</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            🏨 Motels in Canada: What You Need to Know
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>Affordable, Comfortable, and Traveler-Friendly Stays Across the Country</strong>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          If you’re planning a road trip or traveling through Canada’s scenic highways, motels are one of the best ways to stay on budget while enjoying comfort, convenience, and local charm.
        </p>
      </section>

      {/* Main Content Sections */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* What is a Motel */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🚗 What Is a Motel?</h2>
            <ul className="space-y-4">
              {[
                "Have direct outdoor access to each room (great for unloading vehicles)",
                "Offer easy parking near your door",
                "Are smaller, more personal than big hotels",
                "Focus on affordability, functionality, and quick check-ins"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Makes Canadian Motels Unique */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🇨🇦 What Makes Canadian Motels Unique?</h2>
            <ul className="space-y-4">
              {[
                "Spacious parking for cars, trucks, trailers, and RVs",
                "Friendly, small-town hospitality",
                "Flexible booking for nightly, weekly, or monthly stays",
                "Often family-run, with personalized service",
                "Many are pet-friendly and ideal for long-distance drivers, contractors, or touring guests"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Stays at Motels */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🧳 Who Stays at Motels in Canada?</h2>
            <ul className="space-y-4">
              {[
                "Road trippers exploring the provinces",
                "Contractors and tradespeople on project work",
                "Seniors or families seeking affordable options",
                "Solo travelers or couples passing through rural towns",
                "Guests attending local events, sports, or weddings"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What to Look For */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">💡 What to Look for in a Good Motel</h2>
            <ul className="space-y-4">
              {[
                "✅ Clean, well-maintained rooms",
                "✅ Comfortable beds and quiet surroundings",
                "✅ Reliable Wi-Fi and in-room amenities",
                "✅ On-site or nearby dining options",
                "✅ Safety and 24/7 access",
                "✅ Honest pricing with no surprise fees"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example Motel */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🌾 Example: Plains Motor Inn, Stettler, Alberta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="space-y-4">
                {[
                  "Affordable daily, weekly & monthly rates",
                  "Truck-friendly parking",
                  "Pet-friendly rooms available",
                  "Friendly, family-style service",
                  "Central Alberta location — great stopover between Edmonton & Calgary"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#E6EFEA] p-6 rounded-lg">
                <p className="text-lg text-gray-800 mb-2">📍 <strong>Address:</strong> 4812 - 61 Street, Stettler, AB T0C 2L1</p>
                <p className="text-lg text-gray-800 mb-2">📞 <strong>Phone:</strong> <a href="tel:4037423491" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">403-742-3491</a></p>
                <p className="text-lg text-gray-800">
                  ✉️ <strong>Email:</strong>{" "}
                  <a href="mailto:plainsmotorinnn@gmail.com" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">plainsmotorinnn@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer / Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Where to Find */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🗺️ Where to Find Motels in Canada</h2>
          <ul className="space-y-4 mb-6">
            {[
              "Trans-Canada Highway (Hwy 1)",
              "Alberta Hwy 21 / 12 / 2",
              "BC & Prairie province highways",
              "Near national parks, rural towns, and border crossings"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg text-gray-600 bg-gray-50 p-4 rounded-lg">
            Use platforms like: <strong>Google Maps</strong>, <strong>Booking.com</strong>, <strong>TripAdvisor</strong>, <strong>Hotels.ca</strong>
          </p>
        </div>

        {/* Final Note */}
        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#F39C49]">
          <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🧭 Planning Your Stay?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            For friendly, honest, and budget-conscious travel across Canada, motels are the smart choice. And if your path brings you through Central Alberta — we’d love to welcome you at <strong>Plains Motor Inn</strong>.
          </p>
        </div>
      </section>

    </div>
  );
};

export default MotelsInCanada;
