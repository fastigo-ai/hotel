import React from "react";

const Careers = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">
          Careers at Plains Motor Inn
        </h1>
        <p className="text-lg mb-6 text-center">
          <span className="font-semibold">Be part of something new. Grow with us.</span>
        </p>

        <p className="text-lg mb-6">
          Plains Motor Inn is entering a new chapter under fresh management — and we’re looking for dedicated, friendly, and hard-working individuals to join our growing team in Stettler, Alberta.
        </p>

        <p className="text-lg mb-6">
          Whether you’re experienced in hospitality or just starting out, we offer a supportive environment where your work is appreciated and your efforts make a difference.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-10 mb-4">We are hiring for:</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Front Desk & Guest Services</li>
          <li>Housekeeping Staff</li>
          <li>Maintenance Personnel</li>
          <li>Breakfast Attendants</li>
          <li>Night Audit / Security</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-10 mb-4">What We Offer:</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>A positive and respectful work environment</li>
          <li>Flexible schedules (full-time and part-time available)</li>
          <li>On-the-job training</li>
          <li>Opportunities for growth as the business expands</li>
          <li>Competitive wages</li>
          <li>A chance to be part of a team that’s improving and modernizing every day</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-10 mb-4">Join Our Team</h2>
        <p className="text-lg mb-4">
          We’re more than just a motel — we’re a team that cares about guests and each other. If you're reliable, friendly, and ready to grow with a locally managed business, we’d love to hear from you.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg shadow mt-6">
          <p className="text-lg font-medium mb-2">📧 To apply, please send your resume to:</p>
          <p className="mb-4 text-black font-semibold">plainsmotorinnn@gmail.com</p>

          <p className="text-lg font-medium mb-2">📍 Visit us at:</p>
          <p className="mb-4">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>

          <p className="text-lg font-medium mb-2">📞 Call us:</p>
          <p className="text-black font-semibold">403-742-3491</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;
