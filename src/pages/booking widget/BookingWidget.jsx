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
      <div className="border p-6 rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.12)] bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            ${property.price}
            <span className="text-sm font-normal text-gray-500 ml-1">/ night</span>
          </h2>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '12px', width: '12px', fill: 'currentColor'}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
            {property.rating || "5.0"}
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col mb-4 rounded-xl border border-gray-300">
          {/* Dates */}
          <div ref={calendarRef} className="relative flex border-b border-gray-300">
            <div
              className="flex-1 px-3 py-2 cursor-pointer border-r border-gray-300 hover:bg-gray-50"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              <label className="text-[10px] font-bold text-gray-800 uppercase tracking-wider cursor-pointer">Check-In</label>
              <div className="text-sm text-gray-600">
                {formatToCAD(dateRange[0].startDate)}
              </div>
            </div>
            <div
              className="flex-1 px-3 py-2 cursor-pointer hover:bg-gray-50"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              <label className="text-[10px] font-bold text-gray-800 uppercase tracking-wider cursor-pointer">Check-Out</label>
              <div className="text-sm text-gray-600">
                {formatToCAD(dateRange[0].endDate)}
              </div>
            </div>

            {openCalendar && (
              <div className="absolute z-50 top-full right-0 mt-2 bg-white shadow-xl rounded-xl border border-gray-200">
                <DateRange
                  ranges={dateRange}
                  onChange={(item) => setDateRange([item.selection])}
                  minDate={new Date()}
                />
              </div>
            )}
          </div>

          {/* Guests */}
          <div ref={guestRef} className="relative">
            <div 
              className="px-3 py-2 cursor-pointer hover:bg-gray-50 flex justify-between items-center rounded-b-xl"
              onClick={() => setShowGuestOptions(!showGuestOptions)}
            >
              <div>
                <p className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">Guests</p>
                <p className="text-sm text-gray-600">
                  {guests.adults + guests.children} adult{guests.adults + guests.children > 1 ? 's' : ''}
                </p>
              </div>
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>

            {showGuestOptions && (
              <div className="absolute top-full right-0 mt-2 w-full bg-white border rounded-xl p-4 shadow-xl space-y-4 z-50">
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
        </div>

        <button
          onClick={handleReserve}
          className="w-full bg-[#F39C49] hover:bg-[#e08c3c] text-black py-3 rounded-lg font-semibold text-lg transition-colors"
        >
          Reserve Now
        </button>

        <p className="text-sm text-center text-gray-500 mt-4 mb-4">
          You won't be charged yet
        </p>

        {/* Pricing Breakdown */}
        <div className="space-y-4">
          <div className="flex justify-between text-gray-700 text-base">
            <span className="underline decoration-gray-300">${property.price} x 1 night</span>
            <span>${property.price}</span>
          </div>
          <div className="flex justify-between text-gray-700 text-base pb-6 border-b border-gray-200">
            <span className="underline decoration-gray-300">Service fee</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between text-gray-900 font-bold text-lg pt-1">
            <span>Total</span>
            <span className="text-[#006C64]">${property.price}</span>
          </div>
        </div>
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
