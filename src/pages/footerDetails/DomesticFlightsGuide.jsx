// src/components/DomesticFlightsGuide.jsx
import React from "react";
import '../../App.css';

const airlines = [
  { name: "Air Canada", description: "Canada’s national airline with wide domestic coverage" },
  { name: "WestJet", description: "Alberta-based airline with strong western Canada routes" },
  { name: "Flair Airlines", description: "Budget airline for low-cost travel across major cities" },
  { name: "Lynx Air", description: "New ultra-low-cost airline based in Calgary" },
  { name: "Porter Airlines", description: "Serves eastern Canada with growing western routes" },
  { name: "Air Transat", description: "Primarily international, but offers some domestic routes seasonally" },
];

const airports = [
  {
    name: "🟠 Red Deer Regional Airport (YQF)",
    time: "– 1 hour",
    detail: "Limited domestic routes (mainly seasonal/charter)",
  },
  {
    name: "🟢 Edmonton International Airport (YEG)",
    time: "– 2 hours",
    detail: "Major hub with daily flights across Canada",
  },
  {
    name: "🔵 Calgary International Airport (YYC)",
    time: "– 2.5 hours",
    detail: "Alberta’s busiest airport with full domestic & international service",
    extra: "Direct flights from: Vancouver, Toronto, Montreal, Winnipeg, Halifax, and more",
  },
];

const DomesticFlightsGuide = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Travel Inspiration</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            ✈️ Domestic Flights in Canada
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>Travel Canada by Air — Your Gateway to Adventure Starts Here</strong>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          Canada is vast, and flying is often the fastest way to explore it. Whether you're visiting from Vancouver, Toronto, or Halifax, <span className="Text font-serif text-[#4BA9A2]">P</span><span className="font-serif text-[#4BA9A2]">lains</span> <span className="Text-M font-serif text-[#4BA9A2]">M</span><span className="font-serif text-[#4BA9A2]">otors</span> <span className="Text-o font-serif text-[#4BA9A2]">I</span><span className="font-serif text-[#4BA9A2]">NN</span> in Stettler, Alberta, is a convenient stop along your journey.
        </p>
      </section>

      {/* Main Content Sections */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Major Domestic Airlines */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🛫 Major Domestic Airlines</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full text-left border-collapse">
                <thead className="bg-[#1A4C43] text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-lg border-b border-gray-200">Airline</th>
                    <th className="px-6 py-4 font-semibold text-lg border-b border-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {airlines.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-[#4BA9A2] font-bold text-lg whitespace-nowrap bg-[#F9FAFB]">{item.name}</td>
                      <td className="px-6 py-4 text-gray-700">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Nearest Airports */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🛬 Nearest Airports to <span className="Text">P</span>lains <span className="Text-M">M</span>otors <span className="Text-o">I</span>NN</h3>
            <ul className="space-y-6">
              {airports.map((airport, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <p className="font-bold text-lg text-gray-800">{airport.name} <span className="text-[#F39C49] font-medium">{airport.time}</span></p>
                  <p className="text-gray-700">{airport.detail}</p>
                  {airport.extra && <p className="text-sm italic text-gray-500 mt-1">{airport.extra}</p>}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[#4BA9A2] font-medium bg-[#E6EFEA] p-4 rounded-lg inline-block">
              ✅ Airport shuttles or rental cars available from both cities
            </p>
          </div>

          {/* Stopover */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🧳 Plan a Stopover in Stettler</h3>
            <ul className="space-y-4">
              {[
                "✅ Free breakfast",
                "✅ Truck & car parking",
                "✅ Quiet, small-town atmosphere",
                "✅ Easy access to Alberta Prairie Railway tours and local heritage"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* Footer / Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">📞 Need Help Planning?</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We’re happy to assist with travel planning, car rentals, or directions from the airport.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-8 sm:gap-16 items-center text-left">
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

export default DomesticFlightsGuide;
