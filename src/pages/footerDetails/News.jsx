import React from "react";

const newsItems = [
  {
    title: "Under New Management",
    date: "July 2025",
    icon: "🆕",
    description:
      "Plains Motor Inn is now under new management committed to offering an upgraded experience, cleaner rooms, and more attentive service. We thank our loyal guests and welcome new visitors to experience the refreshed Plains!",
  },
  {
    title: "Renovations Completed in Select Rooms",
    date: "June 2025",
    icon: "🛠️",
    description:
      "We’ve updated several rooms with new flooring, improved lighting, and upgraded linens to ensure a more comfortable stay. More improvements are coming soon!",
  },
  {
    title: "Special Summer Weekly & Monthly Rates",
    date: "May 2025",
    icon: "🎉",
    description:
      "Whether you're working in the area or just passing through, take advantage of our discounted long-term stay rates this summer. Contact our front desk for details or email: plainsmotorinnn@gmail.com.",
  },
  {
    title: "Pet-Friendly Rooms Now Available",
    date: "April 2025",
    icon: "🐶",
    description:
      "Traveling with your furry friend? We now offer select pet-friendly rooms. Please let us know at the time of booking so we can accommodate you.",
  },
  {
    title: "Supporting Local Workers",
    date: "March 2025",
    icon: "🏗️",
    description:
      "Plains Motor Inn is proud to provide accommodation for workers on nearby construction, energy, and municipal projects. We thank local crews for their hard work and welcome long-term corporate bookings.",
  },
];

const News = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-8 text-center">
          News & Updates
        </h1>
        <p className="text-lg text-center mb-10">
          Stay connected with what's happening at Plains Motor Inn and around Stettler.
        </p>

        <div className="space-y-10">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-black">{item.title}</h2>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-md leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
