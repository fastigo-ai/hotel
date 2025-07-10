// src/components/CarRentalGuide.jsx
import React from "react";

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
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">🚘 Car Rentals in Canada</h2>
        <p className="text-lg text-gray-600 mt-2">Freedom to Explore — Rent a Car and Discover Canada on Your Schedule</p>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Whether you're flying into Alberta or road-tripping across the provinces, renting a car is one of the best ways to see Canada — especially rural gems like Stettler. At Plains Motor Inn, we welcome travelers who explore by car and are happy to help guide your rental experience.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">🔑 Top Car Rental Companies in Canada</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 border">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-4 py-2 border">Company</th>
                <th className="px-4 py-2 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              {rentalCompanies.map((item, idx) => (
                <tr key={idx} className="odd:bg-white even:bg-gray-50">
                  <td className="px-4 py-2 border font-medium">{item.name}</td>
                  <td className="px-4 py-2 border">{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">📍 Car Rental Near Stettler</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">🔸 Red Deer:</span> 1 hour away, multiple rental options (Enterprise, Hertz, Budget)
            </li>
            <li>
              <span className="font-semibold">🔸 Calgary or Edmonton Airports:</span> Full selection of agencies, ideal if you're flying in
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">🚦 Driving in Canada: What to Know</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {drivingTips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">🚙 Why Rent a Car for Stettler?</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Explore local attractions like Alberta Prairie Railway, Buffalo Lake, and nearby ranches</li>
          <li>Drive scenic routes between Calgary, Edmonton, and Drumheller</li>
          <li>Great for guests staying on weekly or monthly rates at Plains</li>
        </ul>
      </div>

      <div className="bg-white border border-blue-200 p-5 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">📞 Need Help Arranging a Car?</h3>
        <p className="text-gray-700 mb-2">
          We're happy to help you:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Choose the right rental company</li>
          <li>Find local pick-up/drop-off options</li>
          <li>Coordinate rental timing with your stay</li>
        </ul>
        <p className="mt-4 text-gray-800">
          📩 Email us at <a href="mailto:plainsmotorinnn@gmail.com" className="text-blue-700 font-semibold">plainsmotorinnn@gmail.com</a><br />
          📞 Call <a href="tel:4037423491" className="text-blue-700 font-semibold">403-742-3491</a>
        </p>
      </div>
    </section>
  );
};

export default CarRentalGuide;
