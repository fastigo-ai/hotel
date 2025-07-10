// src/components/DomesticFlightsGuide.jsx
import React from "react";

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
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">✈️ Domestic Flights in Canada</h2>
        <p className="text-lg text-gray-600 mt-2">
          Travel Canada by Air — Your Gateway to Adventure Starts Here
        </p>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Canada is vast, and flying is often the fastest way to explore it. Whether you're visiting from Vancouver, Toronto, or Halifax, Plains Motor Inn in Stettler, Alberta, is a convenient stop along your journey.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">🛫 Major Domestic Airlines</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 border">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2 border">Airline</th>
                <th className="px-4 py-2 border">Description</th>
              </tr>
            </thead>
            <tbody>
              {airlines.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-2 border font-medium">{item.name}</td>
                  <td className="px-4 py-2 border">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">🛬 Nearest Airports to Plains Motor Inn</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-4">
          {airports.map((airport, index) => (
            <li key={index}>
              <p className="font-semibold text-blue-700">{airport.name} {airport.time}</p>
              <p>{airport.detail}</p>
              {airport.extra && <p className="text-sm italic text-gray-600">{airport.extra}</p>}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-gray-800">
          ✅ Airport shuttles or rental cars available from both cities
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">🧳 Plan a Stopover in Stettler</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>✅ Free breakfast</li>
          <li>✅ Truck & car parking</li>
          <li>✅ Quiet, small-town atmosphere</li>
          <li>✅ Easy access to Alberta Prairie Railway tours and local heritage</li>
        </ul>
      </div>

      <div className="bg-white border border-blue-200 p-5 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">📞 Need Help Planning?</h3>
        <p className="text-gray-700 mb-2">
          We’re happy to assist with travel planning, car rentals, or directions from the airport.
        </p>
        <p className="text-gray-800">
          📩 Email us at <a href="mailto:plainsmotorinnn@gmail.com" className="text-blue-700 font-semibold">plainsmotorinnn@gmail.com</a><br />
          📞 Call <a href="tel:4037423491" className="text-blue-700 font-semibold">403-742-3491</a>
        </p>
      </div>
    </section>
  );
};

export default DomesticFlightsGuide;
