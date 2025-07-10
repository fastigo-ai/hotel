import React from "react";

const Partner = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-4 ">
          Partner with Plains Motor Inn
        </h1>

        <p className="text-lg mb-6 ">
          At Plains Motor Inn, we believe in building long-term relationships that benefit both our partners and our community.
        </p>
        <p className="text-lg mb-6 ">
          Whether you're a corporate client, a contractor, or a local business, we offer flexible, value-driven accommodation solutions tailored to your needs.
        </p>

        <h2 className="text-2xl font-semibold text-black mt-10 mb-4">Why Partner with Us?</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>
            <span className="font-medium text-black">✅ Convenient Location:</span> Located in the heart of Stettler, Alberta, Plains offers easy access to local industries, highways, and downtown amenities.
          </li>
          <li>
            <span className="font-medium text-black">✅ Special Corporate & Long-Term Rates:</span> We provide competitive rates for recurring bookings, extended stays, and multiple-room arrangements. Ideal for businesses, project teams, and government employees.
          </li>
          <li>
            <span className="font-medium text-black">✅ Comfortable & Practical Lodging:</span> Clean, spacious rooms, ample truck parking, pet-friendly options, and complimentary breakfast — all designed with your team's comfort in mind.
          </li>
          <li>
            <span className="font-medium text-black">✅ Flexible Billing Options:</span> Invoicing, direct billing, and GST-exempt options for approved partners.
          </li>
          <li>
            <span className="font-medium text-black">✅ Personalized Service:</span> Enjoy priority support and custom arrangements tailored to your company or event’s unique needs.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black mt-12 mb-4">Let’s Work Together</h2>
        <p className="text-lg mb-6">
          If you're interested in partnering with Plains Motor Inn, reach out to us to discuss your specific requirements. We’re happy to tailor a program that works for you.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <p className="text-lg font-medium mb-2">📍 Address:</p>
          <p className="mb-4">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>

          <p className="text-lg font-medium mb-2">📞 Phone:</p>
          <p className="mb-4 text-black font-semibold">403-742-3491</p>

          <p className="text-lg font-medium mb-2">📧 Email:</p>
          <p className="text-black font-semibold">plainsmotorinnn@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
