import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../../redux/slices/authSlice";
import SignInModal from "../Login/OtpForm"; // Adjust path if needed

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

  const totalGuests = guests.adults + guests.children;

  const updateGuestCount = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  const handleReserve = () => {
    if (!checkIn || !checkOut) return;

    if (!isSignedIn) {
      setPendingReservation({ property, checkIn, checkOut, guests });
      setShowSignInModal(true);
      return;
    }

    navigate("/confirm", {
      state: { property, checkIn, checkOut, guests },
    });
  };

  useEffect(() => {
    if (isSignedIn && pendingReservation) {
      navigate("/confirm", { state: pendingReservation });
      setPendingReservation(null);
    }
  }, [isSignedIn, pendingReservation, navigate]);

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMinCheckOutDate = () => {
    if (checkIn) {
      const checkInDate = new Date(checkIn);
      checkInDate.setDate(checkInDate.getDate() + 1);
      return checkInDate.toISOString().split("T")[0];
    }
    return getMinDate();
  };

  return (
    <div className="md:w-1/3 mt-8 md:mt-0 max-w-7xl">
      <div className="border p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold">
          {property.price} CAD <span className="text-sm font-normal text-gray-500">for 2 nights</span>
        </h2>

        {/* Date & Guest Picker */}
        <div className="border rounded-lg w-full">
          <div className="flex border-b">
            <div className="w-1/2 p-3">
              <p className="text-xs font-semibold text-gray-600 uppercase">Check-in</p>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={getMinDate()}
                className="w-full text-sm text-black outline-none"
              />
            </div>
            <div className="w-1/2 p-3 border-l">
              <p className="text-xs font-semibold text-gray-600 uppercase">Check-out</p>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={getMinCheckOutDate()}
                className="w-full text-sm text-black outline-none"
              />
            </div>
          </div>

          {/* Guest Picker */}
          <div className="p-3 relative cursor-pointer" onClick={() => setShowGuestOptions(!showGuestOptions)}>
            <p className="text-xs font-semibold text-gray-600 uppercase">Guests</p>
            <p className="text-sm">{totalGuests} guest{totalGuests > 1 ? "s" : ""}</p>

            {showGuestOptions && (
              <div className="absolute z-10 top-[100%] left-0 w-full bg-white border rounded-lg shadow-lg p-4 mt-1 space-y-4" onClick={(e) => e.stopPropagation()}>
                <GuestRow label="Adults" subtitle="Age 13+" count={guests.adults} onDecrease={() => updateGuestCount("adults", -1)} onIncrease={() => updateGuestCount("adults", 1)} />
                <GuestRow label="Children" subtitle="Ages 2–12" count={guests.children} onDecrease={() => updateGuestCount("children", -1)} onIncrease={() => updateGuestCount("children", 1)} />
                <GuestRow label="Infants" subtitle="Under 2" count={guests.infants} onDecrease={() => updateGuestCount("infants", -1)} onIncrease={() => updateGuestCount("infants", 1)} />
                <GuestRow label="Pets" subtitle={<a href="#" className="underline">Bringing a service animal?</a>} count={guests.pets} onDecrease={() => updateGuestCount("pets", -1)} onIncrease={() => updateGuestCount("pets", 1)} />
                <p className="text-xs text-gray-600">This place has a maximum of 2 guests, not including infants. Pets aren't allowed.</p>
                <button className="text-sm mt-2 underline text-gray-800" onClick={() => setShowGuestOptions(false)}>Close</button>
              </div>
            )}
          </div>
        </div>

        {/* Reserve Button */}
        <button
          onClick={handleReserve}
          disabled={!checkIn || !checkOut}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition ${!checkIn || !checkOut ? "bg-gray-400 cursor-not-allowed text-white" : "bg-blue-800 text-white hover:opacity-90"}`}
        >
          Reserve
        </button>

        <p className="text-sm text-center text-gray-500">You won't be charged yet</p>
      </div>

      {/* Sign In Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-md">
            <SignInModal onClose={() => setShowSignInModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

const GuestRow = ({ label, subtitle, count, onDecrease, onIncrease }) => (
  <div className="flex justify-between items-center">
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <div className="flex items-center gap-4">
      <button onClick={(e) => { e.stopPropagation(); onDecrease(); }} className="w-8 h-8 rounded-full border flex items-center justify-center text-lg font-bold text-gray-600">-</button>
      <span>{count}</span>
      <button onClick={(e) => { e.stopPropagation(); onIncrease(); }} className="w-8 h-8 rounded-full border flex items-center justify-center text-lg font-bold text-gray-600">+</button>
    </div>
  </div>
);

export default BookingWidget;
