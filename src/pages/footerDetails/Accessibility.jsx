import React from "react";

const Accessibility = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Accessibility Policy</h1>
      <p className="mb-6">Plains Motor Inn – Stettler, Alberta</p>
      <p className="text-sm text-gray-500 mb-8">
        Effective Date: June 14, 2025
      </p>

      <p className="mb-6">
        At Plains Motor Inn, we are committed to ensuring that our property,
        services, and website are accessible to all guests, including
        individuals with disabilities. We believe everyone should be able to
        experience our hospitality comfortably and independently.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Digital Accessibility</h2>

        <p className="mt-2">
          We strive to ensure that our website is accessible and easy to use for
          all people, regardless of ability.
        </p>
        <p className="mt-2">
          Our website is designed to meet WCAG 2.1 Level AA accessibility
          standards.
        </p>
        <p className="mt-2">
          We support screen readers, keyboard navigation, and high-contrast
          viewing modes.
        </p>
        <p className="mt-2">
          Images include alt text, and all navigation elements are clearly
          structured.
        </p>
        <p className="mt-2">
          We continuously monitor and update our digital content for
          accessibility compliance.
        </p>
        <p className="mt-2">
          If you experience difficulty accessing any part of our website, please
          contact us directly so we can assist you.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Property Accessibility
        </h2>

        <p className="mt-2">
          We make every effort to provide accessible accommodations and
          amenities for guests with disabilities:
        </p>
        <p className="mt-2">
          <strong>Accessible Parking: </strong>
          Designated parking spots near accessible entrances.
        </p>
        <p className="mt-2">
          <strong>Ground-Level Access: </strong>
          Step-free access to guest rooms and the front desk.
        </p>
        <p className="mt-2">
          <strong>Accessible Guest Rooms: </strong>
          Available on request, including features like wider doorways and
          support bars in bathrooms.
        </p>
        <p className="mt-2">
          <strong>Service Animals: </strong>
          Welcomed in accordance with applicable local laws.
        </p>
        <p className="mt-2">
          If you require any special accommodations during your stay, please let
          us know in advance so we can best serve your needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. Continuous Improvement
        </h2>
        <p className="mt-2">
          We are dedicated to continually improving accessibility throughout our
          property and services. Staff members are trained to assist guests
          respectfully and sensitively, and we welcome your feedback to help us
          enhance your experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          4. Feedback and Assistance
        </h2>
        <p>
          If you encounter any accessibility barriers or have questions about
          our accessibility policies, please don’t hesitate to reach out:
        </p>
      </section>

     
      <section className="mb-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <p className="text-lg font-medium mb-2">📍 Address:</p>
          <p className="mb-4">
            Plains Motor Inn
            <br />
            4812 - 61 Street
            <br />
            Stettler, AB T0C 2L1
          </p>

          <p className="text-lg font-medium mb-2">📞 Phone: 403-742-3491</p>
          {/* <p className="mb-4 text-black font-semibold">403-742-3491</p> */}

          <p className="text-lg font-medium mb-2">
            📧 Email: plainsmotorinnn@gmail.com
          </p>
          {/* <p className="text-black font-semibold">plainsmotorinnn@gmail.com</p> */}
        </div>
      </section>
    </div>
  );
};

export default Accessibility;
