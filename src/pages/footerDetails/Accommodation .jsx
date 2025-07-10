// src/components/AccommodationGuide.jsx
import React from "react";

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
  <div className="p-6 rounded-xl shadow-sm mt-8">
    <h3 className="text-lg font-semibold  mb-3">📍 Why Choose a Motel Like Plains?</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700">
      <li>✅ Affordable daily, weekly, and monthly rates</li>
      <li>✅ Pet-friendly rooms and truck parking</li>
      <li>✅ Convenient highway access — perfect for road travelers</li>
      <li>✅ Quiet, small-town Alberta hospitality</li>
    </ul>
    <div className="mt-5 bg-white p-4   rounded-lg">
      <p className="text-gray-800 font-medium">
        🧳 Explore Your Way — Then Stay with Us
      </p>
      <p className="text-sm mt-1">
        No matter how you travel across Canada, Plains Motor Inn offers a clean, comfortable, and affordable place to stay in Stettler.
      </p>
      <p className="mt-3">
        📞 <a href="tel:4037423491" className=" font-semibold">403-742-3491</a><br />
        📧 <a href="mailto:plainsmotorinnn@gmail.com" className=" font-semibold">plainsmotorinnn@gmail.com</a>
      </p>
    </div>
  </div>
);

const AccommodationGuide = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">🛏️ Accommodation Types in Canada</h2>
        <p className="text-lg text-gray-600 mt-2">Find the Stay That Suits Your Style — From Motels to Mountain Lodges</p>
      </div>

      <div className="space-y-8">
        {accommodationData.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-semibold  mb-2">🔹 {item.type}</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
            {item.extra && <p className="mt-2 text-sm text-gray-600 italic">{item.extra}</p>}
            {item.highlight && (
              <div className="mt-4 bg-blue-100 p-3 rounded-md text-blue-900 text-sm">
                ✅ {item.highlight}
              </div>
            )}
          </div>
        ))}
      </div>

      <PlainsMotorHighlight />
    </section>
  );
};

export default AccommodationGuide;
