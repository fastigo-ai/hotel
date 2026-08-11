// src/pages/footerDetails/Cookies.jsx
import React from "react";
import '../../App.css';

const Cookies = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Cookies Policy
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <strong><span className="Text font-serif">Plains</span> <span className="Text-M font-serif">Motor</span> <span className="Text-o font-serif">Inn</span> – Stettler, Alberta</strong>
          </p>
          <p className="mt-2 text-sm text-gray-300">Effective Date: June 14, 2025</p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Plains Motor Inn, we are committed to protecting your privacy and ensuring transparency in how we use cookies and similar technologies on our website.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">1. What Are Cookies?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help enhance your browsing experience and allow us to analyze how our site is used.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-6">
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2">Essential Cookies</p>
                <p className="text-gray-700">These are necessary for the website to function properly, such as enabling you to make bookings or access secure areas of the site.</p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2">Performance & Analytics Cookies</p>
                <p className="text-gray-700">These cookies help us understand how visitors use our website (e.g., which pages are visited most), so we can improve the experience.</p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2">Functionality Cookies</p>
                <p className="text-gray-700">These allow us to remember your preferences (such as language or location) for a more personalized experience.</p>
              </div>
              <div>
                <p className="text-lg text-gray-800 font-semibold mb-2">Third-Party Cookies</p>
                <p className="text-gray-700">Some features like online booking or analytics (e.g., Google Analytics) may use third-party cookies. These are managed by the respective platforms and not controlled directly by us.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">3. How We Use Cookies</h2>
            <ul className="space-y-3">
              {[
                "To enable booking and reservation functionality",
                "To track website traffic and usage trends",
                "To store your preferences and improve user experience",
                "To help protect the security of our website"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">4. Managing Cookies</h2>
            <p className="text-lg text-gray-700 mb-4">
              You can choose to accept or reject cookies via your browser settings. Disabling cookies may impact some functionality of our website, such as making reservations.
            </p>
            <p className="text-lg text-gray-700 mb-4 font-medium">To manage cookies in your browser, you can typically find these settings under:</p>
            <ul className="space-y-3">
              {[
                "Chrome – Settings - Privacy and Security - Cookies and other site data",
                "Firefox – Preferences - Privacy & Security - Cookies and Site Data",
                "Safari – Preferences - Privacy - Manage Website Data",
                "Edge – Settings - Site permissions - Cookies and site data"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">5. Changes to This Cookies Policy</h2>
            <p className="text-lg text-gray-700">
              We may update this policy from time to time. The revised version will be posted here with an updated effective date.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#1A4C43] p-10 rounded-xl shadow-sm text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">6. Contact Us</h2>
          <p className="text-lg text-white/90 mb-8">
            If you have any questions about our use of cookies or this policy, feel free to contact us:
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center bg-white/10 p-6 rounded-lg text-left">
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

export default Cookies;
