import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectUser,
} from "../../redux/slices/authSlice";
import SignInModal from "../Login/OtpForm";

const BookingWidget = ({ property }) => {
  const navigate = useNavigate();
  const isSignedIn = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [pendingReservation, setPendingReservation] = useState(null);

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuestCount = (type, delta) => {
    setGuests((prev) => {
      const newValue = prev[type] + delta;

      if (type === "adults" ) {
        const totalGuests =
          (type === "adults" ? newValue : prev.adults) +
          (type === "children" ? newValue : prev.children);

        if (totalGuests > property.defaultAllowedPersons) return prev;
      }

      if (type === "pets" && newValue > property.allowedPets) return prev;

      return {
        ...prev,
        [type]: Math.max(0, newValue),
      };
    });
  };

  const getMinDate = () => new Date().toISOString().split("T")[0];
  const getMinCheckOutDate = () => {
    if (checkIn) {
      const d = new Date(checkIn);
      d.setDate(d.getDate() + 1);
      return d.toISOString().split("T")[0];
    }
    return getMinDate();
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) return;

    const nights = Math.max(
      1,
      Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
    );
    const subtotal = property.price * nights;
    const petFee = guests.pets * (property.petFeePerPet || 0);
    const tax = Math.floor((subtotal + petFee) * 0.1);
    const total = subtotal + petFee + tax;

    const bookingState = {
      property,
      checkIn,
      checkOut,
      guests,
      subtotal,
      petFee,
      tax,
      total,
    };

    if (!isSignedIn) {
      setPendingReservation(bookingState);
      setShowSignInModal(true);
      return;
    }

    navigate("/confirm", { state: bookingState });
  };

  useEffect(() => {
    if (isSignedIn && pendingReservation) {
      navigate("/confirm", { state: pendingReservation });
      setPendingReservation(null);
    }
  }, [isSignedIn]);

  const petFee = guests.pets * (property.petFeePerPet || 0);
  const totalPrice = property.price + petFee;

  return (
    <div className="md:w-1/3 mt-8 md:mt-0 max-w-7xl">
      <div className="border p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">
          {totalPrice} CAD{" "}
          <span className="text-sm font-normal text-gray-500">
            {guests.pets > 0
              ? `(includes ${petFee} CAD for pets)`
              : "for 1 night"}
          </span>
        </h2>

        {/* Dates */}
        <div className="border rounded-lg w-full">
          <div className="flex border-b">
            <div className="w-1/2 p-3">
              <p className="text-xs font-semibold text-gray-600 uppercase">Check-in</p>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} min={getMinDate()} className="w-full text-lg text-black outline-none" />
            </div>
            <div className="w-1/2 p-3 border-l">
              <p className="text-xs font-semibold text-gray-600 uppercase">Check-out</p>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} min={getMinCheckOutDate()} className="w-full text-lg text-black outline-none" />
            </div>
          </div>

          {/* Guests */}
          <div className="p-3 relative cursor-pointer" onClick={() => setShowGuestOptions(!showGuestOptions)}>
            <p className="text-xs font-semibold text-gray-600 uppercase">Guests</p>
            <p className="text-sm">
              {guests.adults} adult{guests.adults !== 1 ? "s" : ""}
              {guests.children > 0 && `, ${guests.children} child${guests.children !== 1 ? "ren" : ""}`}
              {guests.infants > 0 && `, ${guests.infants} infant${guests.infants !== 1 ? "s" : ""}`}
              {guests.pets > 0 && `, ${guests.pets} pet${guests.pets !== 1 ? "s" : ""}`}
            </p>

            {showGuestOptions && (
              <div className="absolute z-10 top-[100%] left-0 w-full bg-white border rounded-lg shadow-lg p-4 mt-1 space-y-4" onClick={(e) => e.stopPropagation()}>
                <GuestRow label="Adults" subtitle="Age 13+" count={guests.adults} onDecrease={() => updateGuestCount("adults", -1)} onIncrease={() => updateGuestCount("adults", 1)} />
                <GuestRow label="Children" subtitle="Ages 2–12" count={guests.children} onDecrease={() => updateGuestCount("children", -1)} onIncrease={() => updateGuestCount("children", 1)} />
                <GuestRow label="Infants" subtitle="Under 2" count={guests.infants} onDecrease={() => updateGuestCount("infants", -1)} onIncrease={() => updateGuestCount("infants", 1)} />
                {property.isPetFriendly && (
                  <GuestRow label="Pets" subtitle={<a href="#" className="underline">Bringing a service animal?</a>} count={guests.pets} onDecrease={() => updateGuestCount("pets", -1)} onIncrease={() => updateGuestCount("pets", 1)} />
                )}
                <button className="text-lg mt-2 underline font-bold text-gray-800" onClick={() => setShowGuestOptions(false)}>Close</button>
              </div>
            )}
          </div>
        </div>

        <button onClick={handleReserve} disabled={!checkIn || !checkOut} className={`w-full py-3 px-4 rounded-lg font-semibold transition ${!checkIn || !checkOut ? "bg-gray-400 cursor-not-allowed text-white" : "bg-blue-800 text-white hover:opacity-90"}`}>
          Reserve
        </button>

        <p className="text-sm text-center text-gray-500">You won't be charged yet</p>
      </div>

      {showSignInModal && (
        <div className="fixed inset-0  bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-md">
            <SignInModal onClose={() => setShowSignInModal(false)} setShowSignInModal={setShowSignInModal} />
          </div>
        </div>
      )}
    </div>
  );
};

const GuestRow = ({ label, subtitle, count, onDecrease, onIncrease }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-b-0">
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <div className="flex items-center gap-4">
      <button onClick={(e) => { e.stopPropagation(); onDecrease(); }} className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-lg font-bold text-gray-600 disabled:opacity-30" disabled={count <= 0}>−</button>
      <span className="w-4 text-center">{count}</span>
      <button onClick={(e) => { e.stopPropagation(); onIncrease(); }} className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-lg font-bold text-gray-600">+</button>
    </div>
  </div>
);

export default BookingWidget;
