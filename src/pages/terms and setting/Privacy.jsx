import React from "react";
import '../../App.css'
const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6"><span className="Text">P</span>lans <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn – Stettler, Alberta</p>
      <p className="text-sm text-gray-500 mb-8">Effective Date: June 14, 2025</p>

      <p className="mb-6">
        At Plains Motor Inn, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you stay with us, contact us, or use our services.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Name, address, and contact details (phone, email)</li>
          <li>Valid government-issued ID at check-in</li>
          <li>Payment information (card or e-transfer details)</li>
          <li>Vehicle information (for parking purposes)</li>
          <li>Stay details (dates, preferences, room type)</li>
          <li>Guest feedback or service requests</li>
        </ul>
        <p className="mt-2">We do not collect or store sensitive personal information unless required by law.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Booking and confirming your stay</li>
          <li>Processing payments and deposits</li>
          <li>Providing customer service</li>
          <li>Complying with local laws (e.g., guest registry)</li>
          <li>Internal record keeping and service improvements</li>
          <li>Contacting you about your current or future reservations</li>
        </ul>
        <p className="mt-2">We do not sell, rent, or trade your information to third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Data Storage & Security</h2>
        <p className="mb-2">Guest records are stored securely and only accessible to authorized staff.</p>
        <p className="mb-2">Payment information is processed using trusted third-party systems (e.g., merchant processors, e-transfer platforms).</p>
        <p>Surveillance cameras are used in public/common areas for guest safety; footage is not shared unless required by law.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
        <p>Your personal data may only be shared:</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>With law enforcement if legally required</li>
          <li>With booking platforms (if you book through them)</li>
          <li>With payment providers during processing</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Cookies & Website Analytics</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Booking functionality</li>
          <li>Improving user experience</li>
          <li>Understanding how our site is used</li>
        </ul>
        <p className="mt-2">You may disable cookies in your browser settings.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Request a copy of your personal information</li>
          <li>Ask for corrections if information is inaccurate</li>
          <li>Request that your data be deleted (if legally possible)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>Plains Motor Inn</p>
        <p>4812 - 61 Street</p>
        <p>Stettler, AB T0C 2L1</p>
        <p>Phone: <a href="tel:4037423491" className="text-blue-600 underline">403-742-3491</a></p>
        <p>Email: <a href="mailto:plainsmotorinnn@gmail.com" className="text-blue-600 underline">plainsmotorinnn@gmail.com</a></p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
