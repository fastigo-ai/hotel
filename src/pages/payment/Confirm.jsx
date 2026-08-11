// Updated Confirm Component with email field, room type logic, and manual room quantity
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { BASE_URL } from "../../api/Api";
import { User, BedDouble, Users, DoorOpen, CreditCard, Banknote, HeadphonesIcon, Star, Wallet } from "lucide-react";
const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { property, checkIn, checkOut, guests = {}, price } = state || {};

  // Get user from localStorage with better error handling
  const [user, setUser] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("stripe");

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      // Redirect to login if user data is invalid
      navigate("/login");
    }
  }, [navigate]);

  // Redirect if no property data
  useEffect(() => {
    if (!property || !checkIn || !checkOut) {
      navigate("/");
    }
  }, [property, checkIn, checkOut, navigate]);

  const nights = Math.max(
    1,
    Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
  );

  // Get property pricing details with fallbacks
  const nightlyPrice = price || property?.price || property?.detail?.price || 0;
  const smokingRoomCharge = 0;
  const petFeePerPet =
    property?.detail?.petFeePerPet || property?.petFeePerPet || 0;
  const extraPersonCharge =
    property?.detail?.extraPersonCharge || property?.extraPersonCharge || 0;
  const allowedPets =
    property?.detail?.allowedPets || property?.allowedPets || 0;

  // Room type logic - determine if single or double room
  const roomType = property?.detail?.roomType || property?.roomType || "double";
  const isDoubleRoom =
    roomType.toLowerCase().includes("double") ||
    roomType.toLowerCase().includes("twin") ||
    roomType.toLowerCase().includes("quad");
  const maxGuestsPerRoom = isDoubleRoom ? 4 : 2; // Double room: 4 guests, Single room: 2 guests

  // Calculate guests (excluding children as they're free)
  const payingGuests = (guests.adults || 0) + (guests.infants || 0); // Children are free
  const totalGuests =
    (guests.adults || 0) + (guests.children || 0) + (guests.infants || 0); // Total for display

  // Calculate minimum rooms needed based on paying guests
  const minRoomsNeeded = Math.ceil(payingGuests / maxGuestsPerRoom);

  const [formData, setFormData] = useState({
    firstname: user?.user?.firstname || user?.firstname || "",
    lastname: user?.user?.lastname || user?.lastname || "",
    // email: user?.user?.email || user?.email || "",
    email: "",

    phone: user?.user?.mobile || user?.mobile || "",
    specialRequest: "",
    isSmokingAllowed: false,
    isPetFriendly: false,
    pets: 0,
    extraPersons: 0,
    roomQuantity: minRoomsNeeded, // Manual room quantity field
    vehicleType: "",
    vehicleLength: "",
    arrivalTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Update form when user data loads
  useEffect(() => {
  if (user) {
    setFormData((prev) => ({
      ...prev,
      firstname: prev.firstname || user?.user?.firstname || user?.firstname || "",
      lastname: prev.lastname || user?.user?.lastname || user?.lastname || "",
      // email intentionally left blank
      phone: prev.phone || user?.user?.mobile || user?.mobile || "",
    }));
  }
}, [user]);

  // Update room quantity when guests change
  useEffect(() => {
    const newMinRooms = Math.ceil(payingGuests / maxGuestsPerRoom);
    if (formData.roomQuantity < newMinRooms) {
      setFormData((prev) => ({ ...prev, roomQuantity: newMinRooms }));
    }
  }, [payingGuests, maxGuestsPerRoom]);

  const formatDate = (date) => format(new Date(date), "MMM d, yyyy");

  // Calculate pricing based on manual room quantity
  const roomsBooked = formData.roomQuantity || 1;
  const totalCapacity = roomsBooked * maxGuestsPerRoom;
  const extraPersonsNeeded = Math.max(0, payingGuests - totalCapacity);

  const petFee = formData.isPetFriendly
    ? (formData.pets || 0) * petFeePerPet
    : 0;
  const smokingFee = formData.isSmokingAllowed ? smokingRoomCharge : 0;
  const extraPersonFee =
    (formData.extraPersons + extraPersonsNeeded) * extraPersonCharge;

  const subtotal = +(nightlyPrice * nights * roomsBooked).toFixed(2);
  const totalFees = petFee + smokingFee + extraPersonFee;
  const tax = +Math.ceil((subtotal + totalFees) * 0.05).toFixed(2);
  const tourismLevy = +Math.ceil((subtotal + totalFees) * 0.04).toFixed(2);

  const total = Math.ceil(subtotal + totalFees + tax + tourismLevy);

  // Validation function
  const validateForm = () => {
    const errors = {};

    if (!formData.firstname.trim()) {
      errors.firstname = "First name is required";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Last name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }

    // Validate room quantity
    if (formData.roomQuantity < minRoomsNeeded) {
      errors.roomQuantity = `Minimum ${minRoomsNeeded} room${
        minRoomsNeeded > 1 ? "s" : ""
      } required for ${payingGuests} paying guests`;
    }

    if (formData.roomQuantity <= 0) {
      errors.roomQuantity = "At least 1 room is required";
    }

    // Validate guest capacity
    if (payingGuests > totalCapacity + formData.extraPersons) {
      errors.guests = `Not enough capacity. Add more rooms or extra persons.`;
    }

    // Validate pets
    if (formData.isPetFriendly && formData.pets <= 0) {
      errors.pets = "Please specify number of pets";
    }

    if (formData.pets > allowedPets && allowedPets > 0) {
      errors.pets = `Maximum ${allowedPets} pets allowed`;
    }

    // Check if pets are allowed at property
    if (formData.pets > 0 && allowedPets === 0) {
      errors.pets = "Pets are not allowed at this property";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.user?.id && !user?.id) {
      setError("User authentication required. Please log in again.");
      navigate("/login");
      return;
    }

    if (!validateForm()) {
      setError("Please fix the errors below");
      return;
    }

    setLoading(true);
    setError(null);

    // Prepare payload matching API expectations exactly
    const payload = {
      propertyId: property?._id,
      userId: user?.user?.id || user?.id,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      totalStay: nights,
      totalAmount: total.toString(),
      currency: "cad",
      paymentMethod,
      specialRequest: formData.specialRequest || "",
      vehicleInfo: {
        type: formData.vehicleType,
        length: formData.vehicleLength,
        arrivalTime: formData.arrivalTime,
      },
      user: {
        firstname: formData.firstname.trim(),
        lastname: formData.lastname.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
      },
      guests: {
        adults: guests.adults || 0,
        children: guests.children || 0,
        infants: guests.infants || 0,
        pets: formData.isPetFriendly ? formData.pets || 0 : 0,
      },
      roomDetails: {
        roomType: roomType,
        quantity: roomsBooked,
        allowedPersonsPerRoom: maxGuestsPerRoom,
        extraPersons: formData.extraPersons + extraPersonsNeeded || 0,
        extraPersonCharge: extraPersonCharge,
        isSmokingAllowed: formData.isSmokingAllowed,
        smokingRoomCharge: smokingRoomCharge,
        isPetFriendly: formData.isPetFriendly,
        pets: formData.isPetFriendly ? formData.pets || 0 : 0,
        petFeePerPet: petFeePerPet,
      },
    };

    try {
      const response = await fetch(
        `${BASE_URL}/api/payments/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(user?.token && { Authorization: `Bearer ${user.token}` }),
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create checkout session");
      }

      if (data.bookingAction === "extended") {
        if (
          window.confirm(
            "This will extend your existing booking. Continue to payment?"
          )
        ) {
          window.location.href = data.url;
        } else {
          setLoading(false);
        }
      } else if (data.bookingAction === "additional_rooms") {
        if (
          window.confirm(
            "You already have a booking for these dates. This will add additional rooms. Continue to payment?"
          )
        ) {
          window.location.href = data.url;

        } else {
          setLoading(false);
        }
      } else {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError(err.message || "Failed to create booking. Please try again.");
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9F8] pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-2">Complete Your Booking</h1>
          <p className="text-sm text-gray-600">A few final details and your stay at the {property?.title || "Plains Motor Inn"} is secured.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FORM SECTION */}
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            
            {/* Guest Details */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <User className="text-[#006C64]" size={24} />
                <h2 className="text-2xl font-bold font-serif text-gray-900">Guest Details</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstname}
                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm ${validationErrors.firstname ? "border-red-500" : "border-gray-300"}`}
                    placeholder="e.g. John"
                  />
                  {validationErrors.firstname && <p className="text-red-500 text-xs mt-1">{validationErrors.firstname}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastname}
                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm ${validationErrors.lastname ? "border-red-500" : "border-gray-300"}`}
                    placeholder="e.g. Doe"
                  />
                  {validationErrors.lastname && <p className="text-red-500 text-xs mt-1">{validationErrors.lastname}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm ${validationErrors.phone ? "border-red-500" : "border-gray-300"}`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {validationErrors.phone && <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm ${validationErrors.email ? "border-red-500" : "border-gray-300"}`}
                    placeholder="john.doe@example.com"
                  />
                  {validationErrors.email && <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Vehicle Type</label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm bg-white"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="car">Car / SUV</option>
                    <option value="pickup">Pickup Truck</option>
                    <option value="semi">Semi-Truck</option>
                    <option value="rv">RV / Motorhome</option>
                    <option value="none">No Vehicle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Truck/Trailer Length</label>
                  <input
                    type="text"
                    value={formData.vehicleLength}
                    onChange={(e) => setFormData({ ...formData, vehicleLength: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm"
                    placeholder="e.g. 53 ft (if applicable)"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Expected Arrival Time</label>
                <input
                  type="time"
                  value={formData.arrivalTime}
                  onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                  className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Special Requests (Optional)</label>
                <textarea
                  rows="3"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-[#006C64] focus:outline-none resize-none text-sm"
                  placeholder="Any dietary requirements or specific room needs?"
                />
              </div>
              
              {validationErrors.guests && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-700 text-sm">{validationErrors.guests}</p>
                </div>
              )}
            </div>

            {/* Room Selection */}
            <div className="bg-[#EBF7F3] rounded-xl shadow-sm border border-[#D0EBE1] p-8 relative">
              <div className="absolute top-8 right-8 text-[#006C64]">
                <BedDouble size={28} />
              </div>
              <p className="text-[10px] font-bold text-[#006C64] uppercase tracking-widest mb-3">Room Selection</p>
              <h3 className="text-2xl font-bold font-serif text-gray-900 mb-3 capitalize">{roomType} Room: Signature Comfort</h3>
              <p className="text-sm text-gray-700 mb-6">Max {maxGuestsPerRoom} guests per room. High-speed Wi-Fi, Coffee station, and Luxury Linens included.</p>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded border border-[#D0EBE1] text-sm text-[#006C64] font-medium">
                  <Users size={16} />
                  <span>{payingGuests} Adult{payingGuests > 1 ? 's' : ''}, {guests.children || 0} Children</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded border border-[#D0EBE1] text-sm text-[#006C64] font-medium">
                  <DoorOpen size={16} />
                  <span>{roomsBooked} Room{roomsBooked > 1 ? 's' : ''}</span>
                </div>
              </div>
              
              {(payingGuests > totalCapacity || extraPersonsNeeded > 0) && (
                <div className="mt-6 p-4 bg-white border border-yellow-200 rounded-md">
                   <p className="text-sm text-yellow-800 font-medium">Extra Persons: {formData.extraPersons + extraPersonsNeeded}</p>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Wallet className="text-[#006C64]" size={24} />
                <h2 className="text-2xl font-bold font-serif text-gray-900">Payment Method</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <label className={`cursor-pointer border rounded-md p-5 flex gap-4 ${paymentMethod === 'stripe' ? 'border-[#006C64] bg-[#F7FBF9]' : 'border-gray-200 hover:border-gray-300'}`}>
                   <input type="radio" name="paymentMethod" value="stripe" checked={paymentMethod === 'stripe'} onChange={() => setPaymentMethod('stripe')} className="mt-1 w-4 h-4 text-[#006C64] focus:ring-[#006C64]" />
                   <div className="w-full">
                     <div className="flex justify-between items-center w-full mb-2">
                       <span className="font-semibold text-gray-900 text-sm">Pay Online (Card)</span>
                       <CreditCard size={18} className="text-gray-400" />
                     </div>
                     <p className="text-xs text-gray-500">Instant confirmation via secure payment gateway.</p>
                   </div>
                </label>

                <label className={`cursor-pointer border rounded-md p-5 flex gap-4 ${paymentMethod === 'cod' ? 'border-[#006C64] bg-[#F7FBF9]' : 'border-gray-200 hover:border-gray-300'}`}>
                   <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="mt-1 w-4 h-4 text-[#006C64] focus:ring-[#006C64]" />
                   <div className="w-full">
                     <div className="flex justify-between items-center w-full mb-2">
                       <span className="font-semibold text-gray-900 text-sm">Pay at Desk (Cash)</span>
                       <Banknote size={18} className="text-gray-400" />
                     </div>
                     <p className="text-xs text-gray-500">Hold your room with card, pay on arrival.</p>
                   </div>
                </label>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700 text-sm mb-6">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#F39C49] hover:bg-[#e08c3c] text-black font-bold text-lg rounded-md transition-colors"
              >
                {loading
                  ? "Processing..."
                  : `Confirm & Pay $${total}`}
              </button>
              
              <p className="text-[10px] text-gray-500 mt-4 text-center">
                By clicking confirm & pay, you agree to our <Link to="/terms" className="underline hover:text-gray-700">terms and conditions</Link> and <Link to="/privacy-policy" className="underline hover:text-gray-700">privacy policy</Link>.
              </p>
            </div>
          </form>

          {/* SIDEBAR SECTION */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Summary Card */}
            <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden">
              <img
                src={property?.images?.[0] || property?.image || "https://via.placeholder.com/600x400"}
                alt="Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold font-serif text-gray-900 capitalize">{roomType} Room</h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#8B5E34]">
                    <Star size={14} fill="currentColor" stroke="none" />
                    <span>{property?.rating || "5.0"}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-6 pb-6 border-b border-gray-100 uppercase tracking-widest">{property?.title || "Plains Motor Inn"}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-500 uppercase tracking-widest">Check-in</span>
                    <span className="font-semibold text-gray-900">{formatDate(checkIn)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-500 uppercase tracking-widest">Check-out</span>
                    <span className="font-semibold text-gray-900">{formatDate(checkOut)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-500 uppercase tracking-widest">Total Guests</span>
                    <span className="font-semibold text-gray-900">{totalGuests} Guest{totalGuests !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-500 uppercase tracking-widest">Room Type</span>
                    <span className="font-semibold text-gray-900 capitalize">{roomsBooked === 1 ? 'Single' : 'Multiple'} {roomType}</span>
                  </div>
                </div>

                <div className="bg-[#F8F9F8] rounded-md p-5 border border-gray-100">
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Price Breakdown</h4>
                  <div className="space-y-3 text-sm text-gray-600 border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between">
                      <span>${nightlyPrice} × {nights} night{nights > 1 ? 's' : ''}</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {extraPersonFee > 0 && (
                      <div className="flex justify-between">
                        <span>Extra persons</span>
                        <span>${extraPersonFee.toFixed(2)}</span>
                      </div>
                    )}
                    {smokingFee > 0 && (
                      <div className="flex justify-between">
                        <span>Smoking room</span>
                        <span>${smokingFee.toFixed(2)}</span>
                      </div>
                    )}
                    {petFee > 0 && (
                      <div className="flex justify-between">
                        <span>Pet fee</span>
                        <span>${petFee.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Taxes</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tourism Levy</span>
                      <span>${tourismLevy.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <span className="text-xl font-bold font-serif text-gray-900">Total</span>
                    <div className="text-right flex items-end gap-1">
                      <span className="text-3xl font-bold text-[#006C64] leading-none">${total}</span>
                      <span className="text-[10px] font-bold text-gray-500 mb-1">CAD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Box */}
            <div className="bg-[#EEF1F0] rounded-xl p-5 flex items-center gap-4 border border-gray-200">
              <div className="bg-[#DCE6E3] p-3 rounded-full text-[#006C64]">
                <HeadphonesIcon size={20} />
              </div>
              <div>
                <p className="text-[13px] font-bold text-gray-900">Need help with booking?</p>
                <p className="text-[11px] text-gray-600">Call our concierge: 403-742-3491</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;