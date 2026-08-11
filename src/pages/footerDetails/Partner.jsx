import React from "react";
import { Link } from "react-router-dom";
import { Handshake, MapPin, Building, CreditCard, Users, Briefcase } from "lucide-react";
import '../../App.css';

const Partner = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Corporate & B2B</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Partner with <span className="Text">Plains</span> <span className="Text-M">Motor</span> <span className="Text-o">Inn</span>
          </h1>
          <p className="mt-4 text-lg text-white/90">Build long-term relationships that benefit us both.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          At Plains Motor Inn, we believe in building long-term relationships that benefit both our partners and our community.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're a corporate client, a contractor, or a local business, we offer flexible, value-driven accommodation solutions tailored to your needs.
        </p>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-[#F3F5F4] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#4BA9A2] mb-4">Why Partner with Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">✅ Convenient Location</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Located in the heart of Stettler, Alberta, Plains offers easy access to local industries, highways, and downtown amenities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">✅ Special Corporate & Long-Term Rates</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We provide competitive rates for recurring bookings, extended stays, and multiple-room arrangements. Ideal for businesses, project teams, and government employees.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">✅ Comfortable & Practical Lodging</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clean, spacious rooms, ample truck parking, pet-friendly options, and complimentary breakfast — all designed with your team's comfort in mind.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">✅ Flexible Billing Options</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Invoicing, direct billing, and GST-exempt options for approved partners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
              <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">✅ Personalized Service</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                Enjoy priority support and custom arrangements tailored to your company or event’s unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 bg-[#E6EFEA] text-[#4BA9A2] rounded-full flex items-center justify-center mx-auto mb-8">
          <Handshake size={28} />
        </div>
        <h2 className="text-3xl font-serif font-bold text-[#4BA9A2] mb-6">Let’s Work Together</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          If you're interested in partnering with Plains Motor Inn, reach out to us to discuss your specific requirements. We’re happy to tailor a program that works for you.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 inline-flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center text-left mx-auto">
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">📍 Address:</p>
            <p className="mb-4">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">📧 Email:</p>
            <p className="text-black font-semibold">plainsmotorinnn@gmail.com</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">📞 Phone:</p>
            <p className="mb-4 text-black font-semibold">403-742-3491</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Partner;
