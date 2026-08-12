import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../../App.css";

const Contact = () => {
  return (
    <div className="bg-[#F8F5F2] min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#4BA9A2] text-white py-16 md:py-24 text-center px-4 relative overflow-hidden">
        {/* Subtle background pattern/overlay could go here */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-semibold text-sm mb-4 text-[#E8B923]">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Contact <span className="Text">Plains</span> <span className="Text-M">Motor</span> <span className="Text-o">Inn</span>
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
            We're here to help make your stay perfect. Reach out with any questions, requests, or to book your room directly.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="bg-[#4BA9A2]/10 p-4 rounded-full text-[#4BA9A2]">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Location</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  Plains Motor Inn<br />
                  4812 - 61 Street<br />
                  Stettler, AB T0C 2L1
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="bg-[#4BA9A2]/10 p-4 rounded-full text-[#4BA9A2]">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 font-medium mb-1">
                  For reservations and inquiries:
                </p>
                <a href="tel:403-742-3491" className="text-[#4BA9A2] font-bold text-lg hover:underline">
                  403-742-3491
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="bg-[#4BA9A2]/10 p-4 rounded-full text-[#4BA9A2]">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 font-medium mb-1">
                  We reply within 24 hours:
                </p>
                <a href="mailto:info@plainsmotorinn.com" className="text-[#4BA9A2] font-bold text-base hover:underline break-all">
                  plainsmotorinnn@gmail.com
                </a>
              </div>
            </div>

            {/* Front Desk Hours */}
            

          </div>

          {/* Right Column: Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-[400px] relative">
              <iframe
  title="Plains Motor Inn Location"
  src="https://www.google.com/maps?q=Plains+Motor+Inn,+4812+61+Street,+Stettler,+AB+T0C+2L1&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="absolute inset-0"
/>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
