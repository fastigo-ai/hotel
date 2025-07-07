import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">About Us</h1>

        <p className="mb-6 text-lg leading-relaxed">
          Welcome to <span className="font-semibold">Plans Motor Inn</span> — Stettler, Alberta’s trusted stay, now under new management.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Located in the heart of Stettler, Plans Motor Inn features 40 clean and comfortable rooms, thoughtfully prepared to give every guest a restful experience. Whether you're here for a night or an extended stay, our mission is simple — to offer comfort, care, and real value.
        </p>

        <p className="mb-6 text-lg leading-relaxed">
          Now under new management, we’re making exciting changes throughout the property — upgrading our rooms, enhancing guest services, and creating a fresh, welcoming atmosphere. Every detail is being reimagined to better serve you.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">What We Offer</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li>Daily, weekly, and monthly stays at competitive rates</li>
          <li>Ample truck parking</li>
          <li>Pet-friendly rooms</li>
          <li>Complimentary breakfast</li>
          <li>A friendly team that’s always ready to help</li>
        </ul>

        <div className="mt-10 text-lg leading-relaxed">
          <p className="mb-4">
            At <span className="font-semibold">Plans Motor Inn</span>, we’re more than just a place to rest — we’re your home on the road.
          </p>
          <p>
            Whether you're passing through or staying awhile, we look forward to welcoming you with warmth and hospitality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
