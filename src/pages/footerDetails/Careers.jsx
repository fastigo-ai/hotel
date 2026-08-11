import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Briefcase, Mail, Phone, MapPin } from "lucide-react";
import '../../App.css';

const Careers = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center bg-[#1A4C43] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
            Careers at <span className="Text">P</span>lains <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn
          </h1>
          <p className="mt-4 text-lg text-white/90">
            <span className="font-semibold">Be part of something new. Grow with us.</span>
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Plains Motor Inn is entering a new chapter under fresh management — and we’re looking for dedicated, friendly, and hard-working individuals to join our growing team in Stettler, Alberta.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you’re experienced in hospitality or just starting out, we offer a supportive environment where your work is appreciated and your efforts make a difference.
        </p>
      </section>

      {/* Hiring & Benefits */}
      <section className="bg-[#F3F5F4] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Hiring For */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#E6EFEA] text-[#4BA9A2] rounded-lg flex items-center justify-center mb-6">
              <Briefcase size={24} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">We are hiring for:</h2>
            <ul className="space-y-4">
              {["Front Desk & Guest Services", "Housekeeping Staff", "Maintenance Personnel", "Breakfast Attendants", "Night Audit / Security"].map((job, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#F39C49] shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium text-lg">{job}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-[#4BA9A2] mb-6">What We Offer:</h2>
            <ul className="space-y-4">
              {[
                "A positive and respectful work environment",
                "Flexible schedules (full-time and part-time available)",
                "On-the-job training",
                "Opportunities for growth as the business expands",
                "Competitive wages",
                "A chance to be part of a team that’s improving and modernizing every day"
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#4BA9A2] shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-[#4BA9A2] mb-6">Join Our Team</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          We’re more than just a motel — we’re a team that cares about guests and each other. If you're reliable, friendly, and ready to grow with a locally managed business, we’d love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <Mail className="text-[#4BA9A2] mb-3" size={28} />
            <p className="text-lg font-medium mb-2">📧 To apply, please send your resume to:</p>
            <p className="mb-4 text-black font-semibold">plainsmotorinnn@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <Phone className="text-[#4BA9A2] mb-3" size={28} />
            <p className="text-lg font-medium mb-2">📞 Call us:</p>
            <p className="mb-4 text-black font-semibold">403-742-3491</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center text-center">
            <MapPin className="text-[#4BA9A2] mb-3" size={28} />
            <p className="text-lg font-medium mb-2">📍 Visit us at:</p>
            <p className="mb-4 text-black font-semibold">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Careers;
