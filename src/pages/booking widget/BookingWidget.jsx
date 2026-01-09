import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUser } from "../../redux/slices/authSlice";
import { DateRange } from "react-date-range";
import { FaCalendarAlt } from "react-icons/fa";
import SignInModal from "../Login/OtpForm";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { addDays, differenceInCalendarDays } from "date-fns";
import { DateTime } from "luxon";

const TIME_ZONE = "America/Toronto";

// Format date → Toronto time, keep local date to avoid off-by-one
const formatToCAD = (date) => {
  if (!date) return "";
  return DateTime.fromJSDate(date)
    .setZone(TIME_ZONE, { keepLocalTime: true })
    .toFormat("MMM dd, yyyy");
};

// Convert date → UTC ISO for backend (midnight Toronto)
const toISOStringDateOnly = (date) => {
  if (!date) return "";
  const dt = DateTime.fromJSDate(date)
    .setZone(TIME_ZONE, { keepLocalTime: true })
    .startOf("day")
    .toUTC();
  return dt.toISO();
};

const BookingWidget = ({ property }) => {
  const navigate = useNavigate();
  const isSignedIn = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [pendingReservation, setPendingReservation] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  const calendarRef = useRef();

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [checkInUTC, setCheckInUTC] = useState("");
  const [checkOutUTC, setCheckOutUTC] = useState("");

  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  // Convert selected dates → UTC ISO for backend
  useEffect(() => {
    const { startDate, endDate } = dateRange[0];
    if (startDate && endDate) {
      setCheckInUTC(toISOStringDateOnly(startDate));
      setCheckOutUTC(toISOStringDateOnly(endDate));
    }
  }, [dateRange]);

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateGuestCount = (type, delta) => {
    setGuests((prev) => {
      const newValue = prev[type] + delta;

      if (type === "adults") {
        const total = newValue + prev.children;
        if (total > property.defaultAllowedPersons) return prev;
      }

      if (type === "pets" && newValue > property.allowedPets) return prev;

      return {
        ...prev,
        [type]: Math.max(0, newValue),
      };
    });
  };

  const handleReserve = () => {
    if (!checkInUTC || !checkOutUTC) return;

    const nights = Math.max(
      1,
      differenceInCalendarDays(new Date(checkOutUTC), new Date(checkInUTC))
    );

    const subtotal = property.price * nights;
    const petFee = guests.pets * (property.petFeePerPet || 0);
    const tax = Math.floor((subtotal + petFee) * 0.1);
    const total = subtotal + petFee + tax;

    const bookingState = {
      property,
      checkIn: checkInUTC,
      checkOut: checkOutUTC,
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
  }, [isSignedIn, pendingReservation, navigate]);

  const petFee = guests.pets * (property.petFeePerPet || 0);
  const totalPrice = property.price + petFee;

  return (
    <div className="md:w-1/3 mt-8 md:mt-0 max-w-7xl">
      <div className="border p-6 rounded-xl shadow-lg space-y-4 bg-white">
        <h2 className="text-xl font-semibold">
          {totalPrice} CAD{" "}
          <span className="text-sm font-normal text-gray-500">
            {guests.pets > 0
              ? `(includes ${petFee} CAD for pets)`
              : "for 1 night"}
          </span>
        </h2>

        {/* 📅 Date Picker */}
        <div className="relative" ref={calendarRef}>
          <label className="text-sm text-gray-600">Dates</label>

          <div
            className="flex items-center border rounded-md mt-2 px-2 py-2 bg-white cursor-pointer"
            onClick={() => setOpenCalendar(!openCalendar)}
          >
            <FaCalendarAlt className="text-gray-600 mr-2" />
            <span className="text-sm text-gray-800">
              {`${formatToCAD(dateRange[0].startDate)} - ${formatToCAD(dateRange[0].endDate)}`}
            </span>
          </div>

          {openCalendar && (
            <div className="absolute z-50 mt-2 bg-white shadow-lg rounded-lg">
              <DateRange
                editableDateInputs
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                minDate={new Date()}
                rangeColors={["#2563eb"]}
              />
            </div>
          )}
        </div>

        {/* 👥 Guests */}
        <div
          className="p-3 relative cursor-pointer border rounded-lg"
          onClick={() => setShowGuestOptions(!showGuestOptions)}
        >
          <p className="text-xs font-semibold text-gray-600 uppercase">Guests</p>
          <p className="text-sm">
            {guests.adults} adult{guests.adults !== 1 ? "s" : ""}
            {guests.children > 0 && `, ${guests.children} children`}
            {guests.infants > 0 && `, ${guests.infants} infants`}
            {guests.pets > 0 && `, ${guests.pets} pets`}
          </p>

          {showGuestOptions && (
            <div className="absolute z-10 top-full left-0 w-full bg-white border rounded-lg shadow-lg p-4 mt-1 space-y-4">
              <GuestRow
                label="Adults"
                subtitle="Age 13+"
                count={guests.adults}
                onDecrease={() => updateGuestCount("adults", -1)}
                onIncrease={() => updateGuestCount("adults", 1)}
              />
              <GuestRow
                label="Children"
                subtitle="Ages 2–12"
                count={guests.children}
                onDecrease={() => updateGuestCount("children", -1)}
                onIncrease={() => updateGuestCount("children", 1)}
              />
              <GuestRow
                label="Infants"
                subtitle="Under 2"
                count={guests.infants}
                onDecrease={() => updateGuestCount("infants", -1)}
                onIncrease={() => updateGuestCount("infants", 1)}
              />
              {property.isPetFriendly && (
                <GuestRow
                  label="Pets"
                  subtitle="Service animal?"
                  count={guests.pets}
                  onDecrease={() => updateGuestCount("pets", -1)}
                  onIncrease={() => updateGuestCount("pets", 1)}
                />
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleReserve}
          disabled={!checkInUTC || !checkOutUTC}
          className={`w-full py-3 rounded-lg font-semibold ${
            !checkInUTC || !checkOutUTC
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-blue-800 text-white"
          }`}
        >
          Reserve
        </button>

        <p className="text-sm text-center text-gray-500">
          You won't be charged yet
        </p>
      </div>

      {showSignInModal && <SignInModal onClose={() => setShowSignInModal(false)} />}
    </div>
  );
};

const GuestRow = ({ label, subtitle, count, onDecrease, onIncrease }) => (
  <div className="flex justify-between items-center py-2 border-b">
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
    <div className="flex items-center gap-4">
      <button onClick={onDecrease} disabled={count <= 0}>
        −
      </button>
      <span>{count}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  </div>
);

export default BookingWidget;
