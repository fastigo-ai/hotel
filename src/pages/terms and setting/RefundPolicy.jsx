import React from "react";
import '../../App.css'
const RefundPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4"><span className="Text">P</span>lans <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn – Stettler, Alberta</p>
      <p className="mb-6">We strive to provide a clean, safe, and comfortable stay for all our guests. Please review our Refund Policy before making a reservation.</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. General Refund Guidelines</h2>
        <p>Refunds will be processed only according to the terms listed below.</p>
        <p>All refund requests must be made directly with the front desk or management.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Cancellations</h2>
        <p className="font-medium">Direct Bookings (Phone, Walk-In, Website):</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Free cancellation and full refund if cancelled at least 24 hours before check-in.</li>
          <li>Cancellations within 24 hours of check-in or no-shows will be charged one night’s rate and no refund will be given.</li>
        </ul>
        <p className="font-medium">Third-Party Bookings (Booking.com, Expedia, etc.):</p>
        <ul className="list-disc ml-6">
          <li>Refunds follow the cancellation policy of the platform you booked through.</li>
          <li>Please contact them directly for cancellation and refund.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Early Check-Outs</h2>
        <ul className="list-disc ml-6">
          <li>No refunds will be issued for early check-outs, regardless of reason.</li>
          <li>Once checked in, full payment is non-refundable.</li>
          <li>We recommend booking only for the number of nights you are certain of.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Long-Term or Weekly/Monthly Rates</h2>
        <ul className="list-disc ml-6">
          <li>Early check-out may result in recalculated daily rates.</li>
          <li>Refunds will be based on actual nights stayed at non-discounted rates.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. No Refunds Will Be Issued For:</h2>
        <ul className="list-disc ml-6">
          <li>Smoking in a non-smoking room</li>
          <li>Damaged or excessively dirty rooms</li>
          <li>Rule violations</li>
          <li>Shortened stays with less than 24-hour notice</li>
          <li>Weather-related changes (unless major emergency)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Refund Method</h2>
        <ul className="list-disc ml-6">
          <li>Refunds will be issued using the original payment method.</li>
          <li>Processing time: 3–7 business days (varies by bank).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Questions or Special Requests?</h2>
        <p>If you feel your case deserves special consideration, please speak to the front desk or email us. We handle each request with care and fairness.</p>
      </section>

      <div className="mt-8 border-t pt-4">
        <h3 className="text-lg font-semibold">Contact Info:</h3>
        <p><span className="Text">P</span>lans <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn</p>
        <p>4812 - 61 Street, Stettler, AB T0C 2L1</p>
        <p>Phone: <a href="tel:4037423491" className="text-blue-600 underline">403-742-3491</a></p>
      </div>
    </div>
  );
};

export default RefundPolicy;
