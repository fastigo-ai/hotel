// src/pages/footerDetails/Accessibility.jsx
import React from "react";
import '../../App.css';

const Accessibility = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Accessibility Policy
          </h1>
          <p className="mt-4 text-lg text-white/90 text-xl">
            <strong><span className="Text font-serif">Plains</span> <span className="Text-M font-serif">Motor</span> <span className="Text-o font-serif">Inn</span> – Stettler, Alberta</strong>
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Plains Motor Inn, we are committed to ensuring that our property, services, and website are accessible to all guests, including individuals with disabilities. We believe everyone should be able to experience our hospitality comfortably and independently.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">1. Digital Accessibility</h2>
            <div className="space-y-4">
              {[
                "We strive to ensure that our website is accessible and easy to use for all people, regardless of ability.",
                "Our website is designed to meet WCAG 2.1 Level AA accessibility standards.",
                "We support screen readers, keyboard navigation, and high-contrast viewing modes.",
                "Images include alt text, and all navigation elements are clearly structured.",
                "We continuously monitor and update our digital content for accessibility compliance.",
                "If you experience difficulty accessing any part of our website, please contact us directly so we can assist you."
              ].map((item, idx) => (
                <p key={idx} className="text-lg text-gray-700 leading-relaxed flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">2. Property Accessibility</h2>
            <p className="text-lg text-gray-700 mb-6">
              We make every effort to provide accessible accommodations and amenities for guests with disabilities:
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A4C43]"></span> Accessible Parking:
                </p>
                <p className="text-gray-700 pl-4">Designated parking spots near accessible entrances.</p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A4C43]"></span> Ground-Level Access:
                </p>
                <p className="text-gray-700 pl-4">Step-free access to guest rooms and the front desk.</p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A4C43]"></span> Accessible Guest Rooms:
                </p>
                <p className="text-gray-700 pl-4">Available on request, including features like wider doorways and support bars in bathrooms.</p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1A4C43]"></span> Service Animals:
                </p>
                <p className="text-gray-700 pl-4">Welcomed in accordance with applicable local laws.</p>
              </div>
            </div>
            <p className="mt-6 text-lg text-[#4BA9A2] font-medium bg-[#E6EFEA] p-4 rounded-lg">
              If you require any special accommodations during your stay, please let us know in advance so we can best serve your needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">3. Continuous Improvement</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are dedicated to continually improving accessibility throughout our property and services. Staff members are trained to assist guests respectfully and sensitively, and we welcome your feedback to help us enhance your experience.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">4. Feedback and Assistance</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you encounter any accessibility barriers or have questions about our accessibility policies, please don’t hesitate to reach out:
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#1A4C43] p-10 rounded-xl shadow-sm text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center bg-white/10 p-6 rounded-lg text-left w-full justify-center">
            <div>
              <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">📍 Address</p>
              <p className="text-white">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-white/20"></div>
            <div>
              <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">📞 Phone</p>
              <a href="tel:4037423491" className="text-white font-bold hover:text-[#F39C49] transition-colors">403-742-3491</a>
              
              <p className="text-sm text-white/70 mt-4 mb-1 uppercase tracking-wider">📧 Email</p>
              <a href="mailto:plainsmotorinnn@gmail.com" className="text-white font-bold hover:text-[#F39C49] transition-colors">plainsmotorinnn@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
