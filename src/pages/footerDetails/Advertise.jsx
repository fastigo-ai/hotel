import React from "react";

const Advertise = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">🤝 Advertise With Us</h1>
        <p className="text-lg mb-8 text-center">
          We welcome local businesses, service providers, and tourism partners to advertise at Plains. Get your brand in front of travelers, crews, and long-stay guests through:
        </p>

        <div className="bg-blue-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Available Advertising Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>In-room flyers or brochures</li>
            <li>Lobby and hallway poster placements</li>
            <li>Keycard branding</li>
            <li>Partner listing on our website</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Ideal Partners</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Local restaurants, delivery, and diners</li>
            <li>Car rentals, mechanics, and towing services</li>
            <li>Event organizers and attractions in Stettler</li>
            <li>Health & wellness services</li>
          </ul>
        </div>

        <div className="text-lg bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-black mb-4">Let's Work Together</h2>
          <p className="mb-4">
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:plainsmotorinnn@gmail.com" className="text-blue-700 underline">
              plainsmotorinnn@gmail.com
            </a>
          </p>
          <p className="mb-4">
            📞 <strong>Phone:</strong>{" "}
            <a href="tel:4037423491" className="text-black underline">
              403-742-3491
            </a>
          </p>
          <p>
            Custom packages and flexible durations available. Let’s support each other and grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
