import React from "react";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";
import '../../App.css';

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
      "We've updated several rooms with new flooring, improved lighting, and upgraded linens to ensure a more comfortable stay. More improvements are coming soon!",
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
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Latest Updates</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            News & Updates
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Stay connected with what's happening at <span className="Text">P</span>lains <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn and around Stettler.
          </p>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#E6EFEA] rounded-full flex items-center justify-center text-3xl shrink-0">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-[#F39C49] font-bold text-sm tracking-widest uppercase mb-2">{item.date}</p>
                <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Contact CTA */}
      <section className="bg-[#F3F5F4] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-16 h-16 bg-white text-[#4BA9A2] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Newspaper size={28} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">Media Inquiries</h2>
          <p className="text-gray-600 mb-8">
            For press releases, media kits, or interview requests, please contact our management team.
          </p>
          <a href="mailto:plainsmotorinnn@gmail.com" className="inline-block bg-[#1A4C43] hover:bg-[#133c35] text-white font-bold py-3 px-8 rounded-md transition-colors">
            Contact Press Office
          </a>
        </div>
      </section>
    </div>
  );
};

export default News;
