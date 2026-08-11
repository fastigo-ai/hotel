import React from "react";
import { 
  Info, 
  CalendarX, 
  LogOut, 
  Calendar, 
  Ban, 
  CreditCard, 
  HelpCircle,
  PhoneCall,
  MapPin
} from "lucide-react";
import '../../App.css';

const PolicySection = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-[#b2e7e0] p-2 rounded-lg text-[#085d54]">
        <Icon size={24} />
      </div>
      <h2 className="text-xl md:text-2xl font-serif font-bold text-[#085d54]">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed space-y-3">
      {children}
    </div>
  </div>
);

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#085d54] mb-4">
            Refund Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="font-semibold text-gray-800"><span className="Text">P</span>lains <span className="Text-M">M</span>otor <span className="Text-o">I</span>nn – Stettler, Alberta</span>
            <br />
            We strive to provide a clean, safe, and comfortable stay for all our guests. Please review our policy carefully before making a reservation.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          
          <PolicySection icon={Info} title="1. General Refund Guidelines">
            <p>Refunds will be processed only according to the terms listed below.</p>
            <p className="font-medium text-gray-900 bg-gray-100 p-3 rounded-lg inline-block mt-2">
              All refund requests must be made directly with the front desk or management.
            </p>
          </PolicySection>

          <PolicySection icon={CalendarX} title="2. Cancellations">
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900 mb-2">Direct Bookings (Phone, Walk-In, Website):</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#085d54] mt-1">•</span>
                    <span><strong className="text-gray-900">Free cancellation and full refund</strong> if cancelled at least 24 hours before check-in.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Cancellations within 24 hours of check-in or no-shows will be charged one night’s rate and <strong>no refund will be given</strong>.</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-900 mb-2">Third-Party Bookings (Booking.com, Expedia, etc.):</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#085d54] mt-1">•</span>
                    <span>Refunds follow the cancellation policy of the platform you booked through.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#085d54] mt-1">•</span>
                    <span>Please contact them directly for cancellation and refund.</span>
                  </li>
                </ul>
              </div>
            </div>
          </PolicySection>

          <PolicySection icon={LogOut} title="3. Early Check-Outs">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>No refunds will be issued for early check-outs, regardless of reason.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Once checked in, full payment is <strong>non-refundable</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#085d54] mt-1">•</span>
                <span>We recommend booking only for the number of nights you are certain of.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection icon={Calendar} title="4. Long-Term or Weekly/Monthly Rates">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#085d54] mt-1">•</span>
                <span>Early check-out may result in recalculated daily rates.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#085d54] mt-1">•</span>
                <span>Refunds will be based on actual nights stayed at non-discounted rates.</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection icon={Ban} title="5. No Refunds Will Be Issued For:">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {[
                "Smoking in a non-smoking room",
                "Damaged or excessively dirty rooms",
                "Rule violations",
                "Shortened stays with less than 24-hour notice",
                "Weather-related changes (unless major emergency)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-red-50 text-red-900 px-3 py-2 rounded-lg">
                  <Ban size={16} className="text-red-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </PolicySection>

          <PolicySection icon={CreditCard} title="6. Refund Method">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#085d54] mt-1">•</span>
                <span>Refunds will be issued using the original payment method.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#085d54] mt-1">•</span>
                <span>Processing time: <strong>3–7 business days</strong> (varies by bank).</span>
              </li>
            </ul>
          </PolicySection>

          <PolicySection icon={HelpCircle} title="7. Questions or Special Requests?">
            <p>
              If you feel your case deserves special consideration, please speak to the front desk or email us. We handle each request with care and fairness.
            </p>
          </PolicySection>

        </div>

        {/* Contact Footer Card */}
        <div className="bg-[#085d54] rounded-2xl shadow-lg p-8 text-white mt-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-2">Need Assistance?</h3>
            <p className="text-[#b2e7e0] mb-4 md:mb-0">Reach out to our front desk for immediate support.</p>
          </div>
          <div className="space-y-3 shrink-0">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <PhoneCall className="text-[#b2e7e0]" size={20} />
              <a href="tel:4037423491" className="text-lg font-bold hover:text-[#b2e7e0] transition-colors">
                403-742-3491
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="text-[#b2e7e0]" size={20} />
              <span className="text-sm">4812 - 61 Street, Stettler, AB T0C 2L1</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RefundPolicy;
