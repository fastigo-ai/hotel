import React from "react";

const Cookies = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
      <p className="mb-6">Plains Motor Inn – Stettler, Alberta</p>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: June 14, 2025
      </p>

      <p className="mb-6">
        At Plains Motor Inn, we are committed to protecting your privacy and
        ensuring transparency in how we use cookies and similar technologies on
        our website.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>

        <p className="mt-2">
          Cookies are small text files stored on your device (computer, tablet,
          or mobile) when you visit a website. They help enhance your browsing
          experience and allow us to analyze how our site is used.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Types of Cookies We Use
        </h2>

        <p className="mt-2">
          <strong>Essential Cookies </strong>These are necessary for the website
          to function properly, such as enabling you to make bookings or access
          secure areas of the site.
        </p>
        <p className="mt-2">
          <strong>Performance & Analytics Cookies</strong>
          These cookies help us understand how visitors use our website (e.g.,
          which pages are visited most), so we can improve the experience.
        </p>
        <p className="mt-2">
          <strong>Functionality Cookies</strong>
          These allow us to remember your preferences (such as language or
          location) for a more personalized experience.
        </p>
        <p className="mt-2">
          <strong>Third-Party Cookies</strong>
          Some features like online booking or analytics (e.g., Google
          Analytics) may use third-party cookies. These are managed by the
          respective platforms and not controlled directly by us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Cookies</h2>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>To enable booking and reservation functionality</li>
          <li>To track website traffic and usage trends</li>
          <li>To store your preferences and improve user experience</li>
          <li>To help protect the security of our website</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Managing Cookies</h2>
        <p>
          You can choose to accept or reject cookies via your browser settings.
          Disabling cookies may impact some functionality of our website, such
          as making reservations.
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            To manage cookies in your browser, you can typically find these
            settings under:
          </li>
          <li>
            Chrome – Settings - Privacy and Security - Cookies and other site
            data
          </li>
          <li>
            Firefox – Preferences - Privacy & Security - Cookies and Site Data
          </li>
          <li>Safari – Preferences - Privacy - Manage Website Data</li>
          <li>Edge – Settings - Site permissions - Cookies and site data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Changes to This Cookies Policy
        </h2>
        <p className="mt-2">
          We may update this policy from time to time. The revised version will
          be posted here with an updated effective date.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          6. Contact Us

        </h2>
        <p className="mt-2">
          If you have any questions about our use of cookies or this policy, feel free to contact us:

        </p>
      </section>
      <section className="mb-8">
         <div className="bg-blue-50 p-6 rounded-lg shadow">
          <p className="text-lg font-medium mb-2">📍 Address:</p>
          <p className="mb-4">Plains Motor Inn<br />4812 - 61 Street<br />Stettler, AB T0C 2L1</p>

          <p className="text-lg font-medium mb-2">📞 Phone: 403-742-3491</p>
          {/* <p className="mb-4 text-black font-semibold">403-742-3491</p> */}

          <p className="text-lg font-medium mb-2">📧 Email: plainsmotorinnn@gmail.com</p>
          {/* <p className="text-black font-semibold">plainsmotorinnn@gmail.com</p> */}
        </div>
      </section>
    </div>
  );
};

export default Cookies;
