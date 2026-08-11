// src/pages/terms and setting/Termscondition.jsx
import React from "react";
import '../../App.css';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            <span className="Text font-serif">Plains</span> <span className="Text-M font-serif">Motor</span> <span className="Text-o font-serif">Inn</span> – Terms & Conditions
          </h1>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Plains Motor Inn in Stettler, Alberta. Please take a moment to review our terms and conditions, which help ensure a safe, comfortable, and respectful environment for all guests.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">1. Check-In & Check-Out</h2>
            <ul className="space-y-3">
              {[
                "Check-In Time: 3:00 PM",
                "Check-Out Time: 11:00 AM",
                "Early check-in or late check-out may be available upon request (subject to availability)."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">2. Booking & Cancellation</h2>
            <ul className="space-y-3">
              {[
                "Free cancellation up to 24 hours before check-in for direct bookings.",
                "Cancellations within 24 hours or no-shows may be charged one night’s stay.",
                "Separate cancellation policies may apply for group or long-term stays."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">3. Payment Policy</h2>
            <ul className="space-y-3">
              {[
                "We accept credit cards, debit cards, e-transfer, and cash.",
                "A valid government-issued photo ID is required at check-in.",
                "Weekly or monthly guests may be required to pay a refundable security deposit."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">4. Quiet Hours</h2>
            <ul className="space-y-3">
              {[
                "Quiet hours: 10:00 PM – 7:00 AM.",
                "No loud music or disturbances allowed during this time."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">5. Damage or Theft</h2>
            <ul className="space-y-3">
              {[
                "Guests are responsible for loss or damage to motel property.",
                "Charges apply for broken items, excessive mess, or missing items."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">6. Visitor Policy</h2>
            <ul className="space-y-3">
              {[
                "Visitors allowed between 8:00 AM and 10:00 PM.",
                "No unregistered overnight guests permitted."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">7. Long-Term Stays & Contractor Rates</h2>
            <p className="text-lg text-gray-700">Please inquire at the front desk for daily, weekly, and monthly pricing for workers, contractors, and extended stays.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">8. Amenities Included</h2>
            <ul className="space-y-3">
              {[
                "Free continental breakfast",
                "Free Wi-Fi",
                "Free parking (including large trucks)",
                "Cable TV",
                "Microwave and fridge in all rooms",
                "24/7 front desk assistance",
                "Friendly staff always ready to help"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#F39C49] mt-2 shrink-0"></div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-4">9. Privacy & Safety</h2>
            <ul className="space-y-3">
              {[
                "Security cameras active in public areas for safety.",
                "Guest information is never shared with third parties."
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
          <p className="text-xl text-white/90 mb-4">If you have any questions or need assistance, please contact the front desk.</p>
          <p className="text-2xl font-serif font-bold text-white">Thank you for choosing Plains Motor Inn. Enjoy your stay!</p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
