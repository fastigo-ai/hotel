import React from "react";

const Affiliate = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">
          Affiliate Program
        </h1>
        <p className="text-lg mb-8 text-center">
          <strong>Earn with Every Referral to Plains Motor Inn</strong>
        </p>
        <p className="text-lg mb-6 text-center">
          Do you have an audience, network, or client base that travels through Central Alberta? Plains Motor Inn offers a simple way for you to earn passive income — just refer your contacts to us and get rewarded when they book a stay.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">💼 Who Can Join?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Travel agents and booking coordinators</li>
            <li>Tourism bloggers and influencers</li>
            <li>Construction, oilfield, and service companies</li>
            <li>Local businesses with frequent visitor traffic</li>
            <li>Event organizers and sports teams</li>
            <li>Facebook group admins and community leaders</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">🎁 What You Get</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Commission on qualified bookings</li>
            <li>Monthly payout options</li>
            <li>Priority access to special offers</li>
            <li>Access to promotional materials and rate updates</li>
            <li>Recognition on our Partner Wall (optional)</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-black mb-4">Start Earning Today</h2>
          <p className="text-lg mb-4">
            📧 Email us at{" "}
            <a href="mailto:plainsmotorinnn@gmail.com" className="text-black underline">
              plainsmotorinnn@gmail.com
            </a>{" "}
            with the subject <strong>"Affiliate Program"</strong>
          </p>
          <p className="text-lg mb-4">
            📞 Or call{" "}
            <a href="tel:4037423491" className="text-black underline">
              403-742-3491
            </a>{" "}
            to speak directly with our team.
          </p>
          <p className="text-lg">
            We'll get you started with everything you need to promote Plains and earn from every referral.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
