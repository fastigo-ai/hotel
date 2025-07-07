import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UnifiedCheckInAndCheckoutForm from "./CheckinForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CancellationAndInfo from "../terms and setting/CancellationAndInfo ";

const stripePromise = loadStripe(
  "pk_live_51Rd957H5qV8bzWu9IuCvErOXCzKcLRU4lYk02I2UMf0xb5FH5kmvjwvQt8CiKPjAM1P90hR1myOxjEFtxQECUcKe00628bcTLT"
);

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { property, checkIn, checkOut, guests } = state || {};

  if (!property) {
    return <div className="p-4">Booking data not available.</div>;
  }

  const nights =
    checkIn && checkOut
      ? Math.max(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
          1
        )
      : 1;

  const subtotal = property.price * nights;
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <>
    
    <div className="container mx-auto max-w-7xl px-4 md:px-8 py-10 flex flex-col md:flex-row gap-10 font-sora">
      <div className="md:w-2/3 space-y-6">
        <Elements stripe={stripePromise}>
          <UnifiedCheckInAndCheckoutForm total={parseFloat(total.toFixed(2))} />
        </Elements>
      </div>

      <div className="md:w-1/3">
        <div className="border rounded-xl shadow-lg p-5 space-y-4 bg-white">
          <div className="flex gap-4">
            <img
              src={property.images[0]}
              alt="Property"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-base font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">Entire rental unit</p>
              <p className="text-sm text-gray-800 font-semibold">
                ★ {property.rating}{" "}
                <span className="text-gray-600">
                  ({property.reviews} reviews)
                </span>
              </p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <h4 className="text-lg font-semibold">Your total</h4>
            <div className="flex justify-between text-sm">
              <p>
                {property.price} CAD × {nights} night{nights > 1 ? "s" : ""}
              </p>
              <p>{subtotal.toFixed(2)} CAD</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Taxes</p>
              <p>{tax.toFixed(2)} CAD</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-base">
              <p>Total</p>
              <p>{total.toFixed(2)} CAD</p>
            </div>
          </div>
        </div>
      </div>

      
     
    </div>
        <CancellationAndInfo/>
    </>
    
  );
};

export default Confirm;
