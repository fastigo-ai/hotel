import React from "react";
import '../../App.css';

const VacationRentals = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Accommodation Guide</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            🏡 Vacation Rentals in Canada
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>The Rise of Home-Stays, Cabins, and Unique Local Experiences</strong>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Canada offers more than just hotels and motels — vacation rentals have become increasingly popular for travelers seeking flexibility, space, and unique stays. But are they right for you?
        </p>
      </section>

      {/* Main Content Sections */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* What Are Vacation Rentals */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">🌟 What Are Vacation Rentals?</h2>
            <p className="text-gray-600 text-lg mb-6">Vacation rentals in Canada include:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Homes, condos, or apartments rented short-term",
                "Cabins and cottages (often lakeside or in mountains)",
                "Basement suites or private rooms in someone’s house",
                "Unique stays like yurts, domes, treehouses, and off-grid cabins"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-[#4BA9A2] font-medium bg-[#E6EFEA] p-4 rounded-lg inline-block">
              These are commonly found on platforms like: <strong>Airbnb, VRBO, CanadaStays</strong>
            </p>
          </div>

          {/* Pros */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-green-500">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">✅ Pros of Vacation Rentals</h2>
            <ul className="space-y-4">
              {[
                "More space — great for families or groups",
                "Kitchen access for self-catering",
                "Unique or scenic properties",
                "Can be cost-effective for long stays",
                "Often located in residential or remote areas"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-red-500">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">⚠️ Things to Watch For</h2>
            <ul className="space-y-4">
              {[
                "Cleaning fees and service charges can add up",
                "Availability is limited in rural towns",
                "No front desk or on-site support",
                "Inconsistent standards (each property is different)",
                "Some listings cancel last-minute or have unclear rules",
                "Not ideal for 1-night stays or work crews"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison Table */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🛏️ Motel vs. Vacation Rental: What to Choose?</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full table-auto text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#1A4C43] text-white">
                    <th className="p-4 font-semibold text-lg border-b border-gray-200">Feature</th>
                    <th className="p-4 font-semibold text-lg border-b border-gray-200">Vacation Rental</th>
                    <th className="p-4 font-semibold text-lg border-b border-gray-200 text-[#F39C49]">Plains Motor Inn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">Price Transparency</td>
                    <td className="p-4 text-gray-600">Varies + Fees</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">Flat daily/weekly/monthly rates</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">Check-in Flexibility</td>
                    <td className="p-4 text-gray-600">Owner-dependent</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">24/7 front desk</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">On-Site Staff</td>
                    <td className="p-4 text-gray-600">Usually None</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">Always Available</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">Cleaning & Housekeeping</td>
                    <td className="p-4 text-gray-600">Self-managed</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">Done for You</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">Good for 1-Night Stays</td>
                    <td className="p-4 text-gray-600">Often Not</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">Truck/Trailer Parking</td>
                    <td className="p-4 text-gray-600">Rare</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">✅ Yes</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-gray-800 font-medium">Ideal for Work Crews</td>
                    <td className="p-4 text-gray-600">Limited</td>
                    <td className="p-4 text-[#4BA9A2] font-semibold bg-[#F9FAFB]">✅ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer Sections */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        {/* When to Choose What */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-serif font-bold text-[#4BA9A2] mb-6">🧭 When to Choose a Vacation Rental:</h3>
            <ul className="space-y-4">
              {[
                "You're booking for a week or more with family",
                "You want a private, scenic escape",
                "You're traveling in a group and can split costs",
                "You don’t need services like daily cleaning"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-serif font-bold text-[#4BA9A2] mb-6">🏨 When a Motel is the Better Choice:</h3>
            <ul className="space-y-4">
              {[
                "You need flexible booking for 1–30 days",
                "You're a contractor, crew, or solo traveler",
                "You're passing through rural Alberta",
                "You need reliable Wi-Fi, parking, and front desk access",
                "You don’t want to deal with chores at check-out"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Work Travel */}
          <div className="bg-[#E6EFEA] p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">💼 Traveling for Work or Long Stay?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vacation rentals can feel like home, but motels like <strong>Plains Motor Inn</strong> offer more stability, service, and convenience — especially if you're staying for work, have irregular hours, or need easy parking and walk-up access.
            </p>
          </div>

          {/* Final Word */}
          <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#F39C49]">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">Final Word</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Canada has amazing vacation rentals — but they’re not for everyone, and they’re not always as easy as they seem. For a worry-free, clean, and straightforward stay, you can always count on <strong>Plains Motor Inn</strong> in Stettler, Alberta. Whether you're here for a night, a week, or longer — we'll be ready.
            </p>
            <div className="text-lg text-gray-800 space-y-2">
              <p>📍 <strong>Address:</strong> 4812 - 61 Street, Stettler, AB T0C 2L1</p>
              <p>📞 <strong>Phone:</strong> <a href="tel:4037423491" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">403-742-3491</a></p>
              <p>✉️ <strong>Email:</strong> <a href="mailto:plainsmotorinnn@gmail.com" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">plainsmotorinnn@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VacationRentals;
