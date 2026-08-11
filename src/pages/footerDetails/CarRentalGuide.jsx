// src/components/CarRentalGuide.jsx
import React from "react";
import '../../App.css';

const rentalCompanies = [
  { name: "Enterprise", notes: "Great for local & airport rentals; known for customer service" },
  { name: "Hertz", notes: "Wide selection of vehicles; loyalty program available" },
  { name: "Avis/Budget", notes: "Common at airports; good deals for weekly/monthly rentals" },
  { name: "Turo", notes: "Peer-to-peer car sharing app (like Airbnb for cars) — often cheaper" },
  { name: "National/Alamo", notes: "Popular with business travelers" },
  { name: "Discount Car & Truck Rentals", notes: "More common in smaller towns" },
];

const drivingTips = [
  "🛣️ Drive on the right side",
  "📋 Valid driver’s license required (international is OK if in English/French)",
  "⛽ Gasoline is sold by the litre",
  "❄️ Winter tires are essential from October–April in most provinces",
  "🚗 Most rentals are automatic transmission",
];

const CarRentalGuide = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Travel Inspiration</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            🚘 Car Rentals in Canada
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>Freedom to Explore — Rent a Car and Discover Canada on Your Schedule</strong>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're flying into Alberta or road-tripping across the provinces, renting a car is one of the best ways to see Canada — especially rural gems like Stettler. At Plains Motor Inn, we welcome travelers who explore by car and are happy to help guide your rental experience.
        </p>
      </section>

      {/* Main Content Sections */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Top Car Rental Companies */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🔑 Top Car Rental Companies in Canada</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-[#1A4C43] text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-lg border-b border-gray-200">Company</th>
                    <th className="px-6 py-4 font-semibold text-lg border-b border-gray-200">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {rentalCompanies.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-[#4BA9A2] font-bold text-lg whitespace-nowrap bg-[#F9FAFB]">{item.name}</td>
                      <td className="px-6 py-4 text-gray-700">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Near Stettler & Driving Tips */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">📍 Car Rental Near Stettler</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-700 text-lg"><span className="font-semibold text-[#4BA9A2]">🔸 Red Deer:</span> 1 hour away, multiple rental options (Enterprise, Hertz, Budget)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-700 text-lg"><span className="font-semibold text-[#4BA9A2]">🔸 Calgary or Edmonton Airports:</span> Full selection of agencies, ideal if you're flying in</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🚦 Driving in Canada: What to Know</h3>
            <ul className="space-y-4">
              {drivingTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-700 text-lg">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Rent a Car for Stettler */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🚙 Why Rent a Car for Stettler?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Explore local attractions like Alberta Prairie Railway, Buffalo Lake, and nearby ranches",
                "Drive scenic routes between Calgary, Edmonton, and Drumheller",
                "Great for guests staying on weekly or monthly rates at Plains"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F9FAFB] p-6 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer / Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">📞 Need Help Arranging a Car?</h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            We're happy to help you:
          </p>
          <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
            {[
              "Choose the right rental company",
              "Find local pick-up/drop-off options",
              "Coordinate rental timing with your stay"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <div className="inline-flex flex-col sm:flex-row gap-8 sm:gap-16 items-center text-left mx-auto bg-[#F9FAFB] p-6 rounded-lg border border-gray-100">
            <div>
              <p className="text-lg font-medium text-gray-800 mb-1">📩 Email us at</p>
              <a href="mailto:plainsmotorinnn@gmail.com" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline text-lg">plainsmotorinnn@gmail.com</a>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
            <div>
              <p className="text-lg font-medium text-gray-800 mb-1">📞 Call</p>
              <a href="tel:4037423491" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline text-lg">403-742-3491</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CarRentalGuide;
