// src/components/AccommodationGuide.jsx
import React from "react";
import '../../App.css';

const accommodationData = [
  {
    type: "Motels",
    description: [
      "Drive-up convenience, ideal for road trips and short stays",
      "Often located in small towns or along highways",
      "Free parking, basic amenities, and budget-friendly rates",
    ],
    highlight:
      "Plains Motor Inn is a classic Canadian motel with 40 rooms, free breakfast, truck parking, and weekly/monthly rates — right in the heart of Stettler, Alberta.",
  },
  {
    type: "Hotels",
    description: [
      "Range from budget to luxury",
      "Typically found in urban centres",
      "May include restaurants, gyms, or business services",
    ],
    extra: "Popular chains in Canada: Hilton, Best Western, Holiday Inn, Marriott",
  },
  {
    type: "Inns & Lodges",
    description: [
      "Small, often family-run, with a cozy or rustic feel",
      "Common in rural or scenic areas",
      "Can include breakfast or home-cooked meals",
    ],
  },
  {
    type: "Bed & Breakfasts (B&Bs)",
    description: [
      "Private home-style accommodation with breakfast included",
      "Personalized, quaint experience",
      "Often limited to a few rooms",
    ],
  },
  {
    type: "Vacation Rentals (Airbnb, VRBO)",
    description: [
      "Entire homes, apartments, or suites for short-term stays",
      "Great for families or longer trips",
      "Can vary widely in price, quality, and reliability",
    ],
  },
  {
    type: "Cabins & Cottages",
    description: [
      "Found near lakes, parks, or ski areas",
      "Ideal for nature lovers or weekend getaways",
      "May have limited amenities but great privacy",
    ],
  },
  {
    type: "Hostels",
    description: [
      "Shared dorm-style rooms, low cost",
      "Popular with backpackers or solo travelers",
      "Found mostly in larger cities or near tourist hubs",
    ],
  },
  {
    type: "Campgrounds & RV Parks",
    description: [
      "Full-service campgrounds available across Canada",
      "Some offer cabins or yurts for rent",
      "Great for summer road trips and outdoor explorers",
    ],
  },
];

const PlainsMotorHighlight = () => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-12 max-w-4xl mx-auto border-t-4 border-t-[#F39C49]">
    <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">📍 Why Choose a Motel Like Plains?</h3>
    <ul className="space-y-4 mb-8">
      {[
        "✅ Affordable daily, weekly, and monthly rates",
        "✅ Pet-friendly rooms and truck parking",
        "✅ Convenient highway access — perfect for road travelers",
        "✅ Quiet, small-town Alberta hospitality"
      ].map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <span className="text-gray-700 text-lg">{item}</span>
        </li>
      ))}
    </ul>
    <div className="bg-[#F9FAFB] p-6 rounded-lg border border-gray-100">
      <p className="text-[#4BA9A2] font-bold text-lg mb-2">
        🧳 Explore Your Way — Then Stay with Us
      </p>
      <p className="text-gray-700 text-lg mb-4">
        No matter how you travel across Canada, Plains Motor Inn offers a clean, comfortable, and affordable place to stay in Stettler.
      </p>
      <div className="text-lg text-gray-800 space-y-1">
        <p>📞 <a href="tel:4037423491" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">403-742-3491</a></p>
        <p>📧 <a href="mailto:plainsmotorinnn@gmail.com" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">plainsmotorinnn@gmail.com</a></p>
      </div>
    </div>
  </div>
);

const AccommodationGuide = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Accommodation Guide</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            🛏️ Accommodation Types in Canada
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>Find the Stay That Suits Your Style — From Motels to Mountain Lodges</strong>
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodationData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">🔹 {item.type}</h3>
              <ul className="space-y-3 mb-4">
                {item.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                    <span className="text-gray-700 text-lg">{desc}</span>
                  </li>
                ))}
              </ul>
              {item.extra && <p className="mt-4 text-sm text-gray-500 italic border-t border-gray-100 pt-4">{item.extra}</p>}
              {item.highlight && (
                <div className="mt-6 bg-[#E6EFEA] p-4 rounded-lg text-[#4BA9A2] text-lg font-medium">
                  ✅ {item.highlight}
                </div>
              )}
            </div>
          ))}
        </div>

        <PlainsMotorHighlight />
        
      </section>
    </div>
  );
};

export default AccommodationGuide;
