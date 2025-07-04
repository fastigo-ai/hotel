import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [msg, setMsg] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMsg("Stripe not ready yet.");
      return;
    }

    setProcessing(true);
    setMsg("⏳ Processing...");

    try {
      const res = await fetch('http://localhost:4242/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: (total) }) // Convert to paisa
      });

      const data = await res.json();
      if (!data.clientSecret) {
        setMsg("Failed to initiate payment.");
        setProcessing(false);
        return;
      }

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMsg("❌ " + result.error.message);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMsg("✅ Payment successful!");
      } else {
        setMsg("⚠ Payment status: " + result.paymentIntent.status);
      }
    } catch (err) {
      setMsg("❌ Error: " + err.message);
    }

    setProcessing(false);
  };

  return (
    <div className="max-w-3xl mx-auto   flex items-center justify-center  md:px-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-2">💳 Checkout</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          You're about to pay <span className="font-semibold">{total} CAD</span> for <strong>Plains Motor</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="p-3 border border-gray-300 rounded-md bg-gray-50">
            <CardElement options={cardStyle} />
          </div>

          <button
            type="submit"
            disabled={!stripe || processing}
            className={`w-full py-3 rounded-md text-white font-semibold transition ${
              processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {processing ? 'Processing...' : `Pay  ${total} CAD`}
          </button>

          {msg && (
            <p className="text-center text-sm font-medium text-gray-700 mt-2">{msg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

const cardStyle = {
  style: {
    base: {
      fontSize: '16px',
      color: '#32325d',
      '::placeholder': {
        color: '#aab7c4',
      },
      fontFamily: 'Nunito, sans-serif',
    },
    invalid: {
      color: '#fa755a',
    },
  },
};

export default CheckoutForm;
