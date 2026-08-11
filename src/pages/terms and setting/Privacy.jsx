// src/pages/terms and setting/Privacy.jsx
import React from "react";
import '../../App.css';
import PrivacyBanner from "../../assets/banners/privacy_banner.png";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${PrivacyBanner})` }}
        ></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/90 text-xl">
            <strong><span className="Text font-serif ">Plains</span> <span className="Text-M font-serif">Motor</span> <span className="Text-o font-serif">Inn</span> – Stettler, Alberta</strong>
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Plains Motor Inn, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you stay with us, contact us, or use our services.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">1. Information We Collect</h2>
            <ul className="space-y-3 mb-4">
              {[
                "Name, address, and contact details (phone, email)",
                "Valid government-issued ID at check-in",
                "Payment information (card or e-transfer details)",
                "Vehicle information (for parking purposes)",
                "Stay details (dates, preferences, room type)",
                "Guest feedback or service requests"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700 italic border-l-4 border-[#1A4C43] pl-4">We do not collect or store sensitive personal information unless required by law.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-3 mb-4">
              {[
                "Booking and confirming your stay",
                "Processing payments and deposits",
                "Providing customer service",
                "Complying with local laws (e.g., guest registry)",
                "Internal record keeping and service improvements",
                "Contacting you about your current or future reservations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700 italic border-l-4 border-[#1A4C43] pl-4">We do not sell, rent, or trade your information to third parties.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">3. Data Storage & Security</h2>
            <div className="space-y-3 text-lg text-gray-700">
              <p>Guest records are stored securely and only accessible to authorized staff.</p>
              <p>Payment information is processed using trusted third-party systems (e.g., merchant processors, e-transfer platforms).</p>
              <p>Surveillance cameras are used in public/common areas for guest safety; footage is not shared unless required by law.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">4. Sharing of Information</h2>
            <p className="text-lg text-gray-700 mb-4">Your personal data may only be shared:</p>
            <ul className="space-y-3">
              {[
                "With law enforcement if legally required",
                "With booking platforms (if you book through them)",
                "With payment providers during processing"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">5. Cookies & Website Analytics</h2>
            <ul className="space-y-3 mb-4">
              {[
                "Booking functionality",
                "Improving user experience",
                "Understanding how our site is used"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-gray-700 italic border-l-4 border-[#1A4C43] pl-4">You may disable cookies in your browser settings.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">6. Your Rights</h2>
            <ul className="space-y-3">
              {[
                "Request a copy of your personal information",
                "Ask for corrections if information is inaccurate",
                "Request that your data be deleted (if legally possible)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#1A4C43] p-10 rounded-xl shadow-sm text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">Contact Us</h2>
          <div className="text-white/90 text-lg space-y-2 mb-8">
            <p>Plains Motor Inn</p>
            <p>4812 - 61 Street</p>
            <p>Stettler, AB T0C 2L1</p>
          </div>
          <div className="inline-flex flex-col sm:flex-row gap-6 sm:gap-12 items-center bg-white/10 p-6 rounded-lg">
            <div>
              <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">Phone</p>
              <a href="tel:4037423491" className="text-white font-bold hover:text-[#F39C49] transition-colors text-xl">403-742-3491</a>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div>
              <p className="text-sm text-white/70 mb-1 uppercase tracking-wider">Email</p>
              <a href="mailto:plainsmotorinnn@gmail.com" className="text-white font-bold hover:text-[#F39C49] transition-colors text-xl">plainsmotorinnn@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
