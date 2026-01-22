import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsAuthenticated,
  selectUser,
} from "../../redux/slices/authSlice";
import { DateRange } from "react-date-range";
import { FaCalendarAlt } from "react-icons/fa";
import SignInModal from "../Login/OtpForm";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { addDays, differenceInCalendarDays } from "date-fns";
import { DateTime } from "luxon";

const TIME_ZONE = "America/Toronto";

const formatToCAD = (date) =>
  DateTime.fromJSDate(date)
    .setZone(TIME_ZONE, { keepLocalTime: true })
    .toFormat("MMM dd, yyyy");

const toISOStringDateOnly = (date) =>
  DateTime.fromJSDate(date)
    .setZone(TIME_ZONE, { keepLocalTime: true })
    .startOf("day")
    .toUTC()
    .toISO();

const BookingWidget = ({ property }) => {
  const navigate = useNavigate();
  const isSignedIn = useSelector(selectIsAuthenticated);

  const [showGuestOptions, setShowGuestOptions] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [pendingReservation, setPendingReservation] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);

  const calendarRef = useRef(null);
  const guestRef = useRef(null);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [checkInUTC, setCheckInUTC] = useState("");
  const [checkOutUTC, setCheckOutUTC] = useState("");

  // 🔒 Guest rules
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0, // max 2
    infants: 0,  // fixed
    pets: 0,     // fixed
  });

  useEffect(() => {
    const { startDate, endDate } = dateRange[0];
    setCheckInUTC(toISOStringDateOnly(startDate));
    setCheckOutUTC(toISOStringDateOnly(endDate));
  }, [dateRange]);

  // Outside clicks
  useEffect(() => {
    const handler = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setOpenCalendar(false);
      }
      if (guestRef.current && !guestRef.current.contains(e.target)) {
        setShowGuestOptions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ✅ Adults & Children logic
  const updateGuestCount = (type, delta) => {
    setGuests((prev) => {
      if (type === "adults") {
        const newAdults = prev.adults + delta;
        if (newAdults < 1) return prev;

        const total = newAdults + prev.children;
        if (total > property.defaultAllowedPersons) return prev;

        return { ...prev, adults: newAdults };
      }

      if (type === "children") {
        const newChildren = prev.children + delta;
        if (newChildren < 0 || newChildren > 2) return prev;

        const total = prev.adults + newChildren;
        if (total > property.defaultAllowedPersons) return prev;

        return { ...prev, children: newChildren };
      }

      return prev;
    });
  };

  const handleReserve = () => {
    const nights = Math.max(
      1,
      differenceInCalendarDays(
        new Date(checkOutUTC),
        new Date(checkInUTC)
      )
    );

    const subtotal = property.price * nights;
    const tax = Math.floor(subtotal * 0.1);
    const total = subtotal + tax;

    const bookingState = {
      property,
      checkIn: checkInUTC,
      checkOut: checkOutUTC,
      guests: {
        adults: guests.adults,
        children: guests.children, // <= 2 guaranteed
        infants: 0,
        pets: 0,
      },
      subtotal,
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

  return (
    <div className="md:w-1/3 mt-8 md:mt-0">
      <div className="border p-6 rounded-xl shadow-lg bg-white space-y-4">
        <h2 className="text-xl font-semibold">
          {property.price} CAD
          <span className="text-sm text-gray-500"> / night</span>
        </h2>

        {/* Dates */}
        <div ref={calendarRef} className="relative">
          <label className="text-sm text-gray-600">Dates</label>
          <div
            className="flex items-center border rounded-md px-2 py-2 cursor-pointer"
            onClick={() => setOpenCalendar(!openCalendar)}
          >
            <FaCalendarAlt className="mr-2" />
            {formatToCAD(dateRange[0].startDate)} -{" "}
            {formatToCAD(dateRange[0].endDate)}
          </div>

          {openCalendar && (
            <div className="absolute z-50 mt-2 bg-white shadow rounded">
              <DateRange
                ranges={dateRange}
                onChange={(item) => setDateRange([item.selection])}
                minDate={new Date()}
              />
            </div>
          )}
        </div>

        {/* Guests */}
        <div ref={guestRef} className="relative border p-3 rounded-lg">
          <div onClick={() => setShowGuestOptions(!showGuestOptions)}>
            <p className="text-xs text-gray-600 uppercase">Guests</p>
            <p className="text-sm">
              {guests.adults} adults
              {guests.children > 0 && `, ${guests.children} children`}
            </p>
          </div>

          {showGuestOptions && (
            <div className="absolute top-full mt-2 w-full bg-white border rounded-lg p-4 shadow space-y-4">
              <GuestRow
                label="Adults"
                subtitle="Age 13+"
                count={guests.adults}
                onDecrease={() => updateGuestCount("adults", -1)}
                onIncrease={() => updateGuestCount("adults", 1)}
              />

              <GuestRow
                label="Children"
                subtitle="Ages 2–12 (max 2)"
                count={guests.children}
                onDecrease={() => updateGuestCount("children", -1)}
                onIncrease={() => updateGuestCount("children", 1)}
              />

              <p className="text-xs text-gray-500">
                Infants not allowed • Pets not allowed
              </p>
            </div>
          )}
        </div>

        <button
          onClick={handleReserve}
          className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold"
        >
          Reserve
        </button>

        <p className="text-sm text-center text-gray-500">
          You won’t be charged yet
        </p>
      </div>

      {showSignInModal && (
        <SignInModal onClose={() => setShowSignInModal(false)} />
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
    <div className="flex gap-4 items-center">
      <button onClick={onDecrease} disabled={count <= 0}>
        −
      </button>
      <span>{count}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  </div>
);

export default BookingWidget;
