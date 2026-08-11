import React from "react";
import '../../App.css';

const Affiliate = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Partner Program</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Affiliate Program
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong>Earn with Every Referral to <span className="Text">P</span>lains <span className="Text-M">M</span>otors <span className="Text-o">I</span>NN</strong>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed">
          Do you have an audience, network, or client base that travels through Central Alberta? Plains Motor Inn offers a simple way for you to earn passive income — just refer your contacts to us and get rewarded when they book a stay.
        </p>
      </section>

      {/* Program Details */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Who Can Join */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">💼 Who Can Join?</h2>
            <ul className="space-y-4">
              {[
                "Travel agents and booking coordinators",
                "Tourism bloggers and influencers",
                "Construction, oilfield, and service companies",
                "Local businesses with frequent visitor traffic",
                "Event organizers and sports teams",
                "Facebook group admins and community leaders"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1A4C43] mt-2 shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Get */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">🎁 What You Get</h2>
            <ul className="space-y-4">
              {[
                "Commission on qualified bookings",
                "Monthly payout options",
                "Priority access to special offers",
                "Access to promotional materials and rate updates",
                "Recognition on our Partner Wall (optional)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-[#4BA9A2] mb-6">Start Earning Today</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          We'll get you started with everything you need to promote Plains and earn from every referral.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 inline-flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center text-left mx-auto">
          <div>
            <p className="text-lg font-medium text-gray-800 mb-1">📧 Email us at</p>
            <a href="mailto:plainsmotorinnn@gmail.com" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">plainsmotorinnn@gmail.com</a>
            <p className="text-gray-500 mt-1">with the subject <strong>"Affiliate Program"</strong></p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200"></div>
          <div>
            <p className="text-lg font-medium text-gray-800 mb-1">📞 Or call</p>
            <a href="tel:4037423491" className="text-[#4BA9A2] hover:text-[#F39C49] font-medium transition-colors underline">403-742-3491</a>
            <p className="text-gray-500 mt-1">to speak directly with our team.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Affiliate;
