// Updated Confirm Component with room type logic and manual room quantity
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { BASE_URL } from "../../api/Api";

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { property, checkIn, checkOut, guests = {}, price } = state || {};
  
  // Get user from localStorage with better error handling
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      // Redirect to login if user data is invalid
      navigate('/login');
    }
  }, [navigate]);

  // Redirect if no property data
  useEffect(() => {
    if (!property || !checkIn || !checkOut) {
      navigate('/');
    }
  }, [property, checkIn, checkOut, navigate]);

  const nights = Math.max(
    1,
    Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
  );

  // Get property pricing details with fallbacks
  const nightlyPrice = price || property?.price || property?.detail?.price || 0;
  const smokingRoomCharge = property?.detail?.smokingRoomCharge || property?.smokingRoomCharge || 0;
  const petFeePerPet = property?.detail?.petFeePerPet || property?.petFeePerPet || 0;
  const extraPersonCharge = property?.detail?.extraPersonCharge || property?.extraPersonCharge || 0;
  const allowedPets = property?.detail?.allowedPets || property?.allowedPets || 0;
  
  // Room type logic - determine if single or double room
  const roomType = property?.detail?.roomType || property?.roomType || "double";
  const isDoubleRoom = roomType.toLowerCase().includes('double') || roomType.toLowerCase().includes('twin') || roomType.toLowerCase().includes('quad');
  const maxGuestsPerRoom = isDoubleRoom ? 4 : 2; // Double room: 4 guests, Single room: 2 guests
  
  // Calculate guests (excluding children as they're free)
  const payingGuests = (guests.adults || 0) + (guests.infants || 0); // Children are free
  const totalGuests = (guests.adults || 0) + (guests.children || 0) + (guests.infants || 0); // Total for display

  // Calculate minimum rooms needed based on paying guests
  const minRoomsNeeded = Math.ceil(payingGuests / maxGuestsPerRoom);

  const [formData, setFormData] = useState({
    firstname: user?.user?.firstname || user?.firstname || "",
    lastname: user?.user?.lastname || user?.lastname || "",
    phone: user?.user?.mobile || user?.mobile || "",
    specialRequest: "",
    isSmokingAllowed: false,
    isPetFriendly: false,
    pets: 0,
    extraPersons: 0,
    roomQuantity: minRoomsNeeded, // Manual room quantity field
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  // Update form when user data loads
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstname: prev.firstname || user?.user?.firstname || user?.firstname || "",
        lastname: prev.lastname || user?.user?.lastname || user?.lastname || "",
        phone: prev.phone || user?.user?.mobile || user?.mobile || "",
      }));
    }
  }, [user]);

  // Update room quantity when guests change
  useEffect(() => {
    const newMinRooms = Math.ceil(payingGuests / maxGuestsPerRoom);
    if (formData.roomQuantity < newMinRooms) {
      setFormData(prev => ({ ...prev, roomQuantity: newMinRooms }));
    }
  }, [payingGuests, maxGuestsPerRoom]);

  const formatDate = (date) => format(new Date(date), "MMM d, yyyy");

  // Calculate pricing based on manual room quantity
  const roomsBooked = formData.roomQuantity || 1;
const totalCapacity = roomsBooked * maxGuestsPerRoom;
const extraPersonsNeeded = Math.max(0, payingGuests - totalCapacity);

const petFee = formData.isPetFriendly ? (formData.pets || 0) * petFeePerPet : 0;
const smokingFee = formData.isSmokingAllowed ? smokingRoomCharge : 0;
const extraPersonFee = (formData.extraPersons + extraPersonsNeeded) * extraPersonCharge;

const subtotal = +(nightlyPrice * nights * roomsBooked).toFixed(2);
const totalFees = petFee + smokingFee + extraPersonFee;
const tax = +((subtotal + totalFees) * 0.05).toFixed(2);
const tourismLevy = +((subtotal + totalFees) * 0.04).toFixed(2);

const total = +(subtotal + totalFees + tax + tourismLevy).toFixed(2);



  // Validation function
  const validateForm = () => {
    const errors = {};

    if (!formData.firstname.trim()) {
      errors.firstname = "First name is required";
    }

    if (!formData.lastname.trim()) {
      errors.lastname = "Last name is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number";
    }

    // Validate room quantity
    if (formData.roomQuantity < minRoomsNeeded) {
      errors.roomQuantity = `Minimum ${minRoomsNeeded} room${minRoomsNeeded > 1 ? 's' : ''} required for ${payingGuests} paying guests`;
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
      navigate('/login');
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
      specialRequest: formData.specialRequest || "",
      user: {
        firstname: formData.firstname.trim(),
        lastname: formData.lastname.trim(),
        phone: formData.phone.trim(),
      },
      guests: {
        adults: guests.adults || 0,
        children: guests.children || 0,
        infants: guests.infants || 0,
        pets: formData.isPetFriendly ? (formData.pets || 0) : 0,
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
        pets: formData.isPetFriendly ? (formData.pets || 0) : 0,
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
            // Add authorization header if you have tokens
            ...(user?.token && { "Authorization": `Bearer ${user.token}` })
          },
          body: JSON.stringify(payload),
        }
      );
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to create checkout session");
      }
  
      // Handle different booking scenarios
      if (data.bookingAction === 'extended') {
        // Show confirmation for booking extension
        if (window.confirm("This will extend your existing booking. Continue to payment?")) {
          // Redirect to payment gateway - user will return to success/failure page based on payment outcome
          window.location.href = data.url;
        } else {
          setLoading(false);
          // User cancelled - stay on confirm page
        }
      } else if (data.bookingAction === 'additional_rooms') {
        // Show confirmation for additional rooms
        if (window.confirm("You already have a booking for these dates. This will add additional rooms. Continue to payment?")) {
          // Redirect to payment gateway - user will return to success/failure page based on payment outcome
          window.location.href = data.url;
        } else {
          setLoading(false);
          // User cancelled - stay on confirm page
        }
      } else {
        // Regular booking - proceed to payment
        // Redirect to payment gateway - user will return to success/failure page based on payment outcome
        window.location.href = data.url;
      }
  
      // Note: No navigation to success page here because:
      // 1. window.location.href will redirect to payment gateway
      // 2. Payment gateway will handle success/failure redirects
      // 3. User will only reach success page after successful payment
  
    } catch (err) {
      console.error("Booking error:", err);
      setError(err.message || "Failed to create booking. Please try again.");
      setLoading(false);
      // Stay on confirm page when there's an error
    }
    // Removed the finally block with navigate("/Payment-Success") 
    // because navigation should only happen after successful payment
  };

  // Show loading state if user data is still loading
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
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Guest Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name *"
                required
                value={formData.firstname}
                onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                className={`px-4 py-3 border rounded-xl w-full ${
                  validationErrors.firstname ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {validationErrors.firstname && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.firstname}</p>
              )}
            </div>
            
            <div>
              <input
                type="text"
                placeholder="Last Name *"
                required
                value={formData.lastname}
                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                className={`px-4 py-3 border rounded-xl w-full ${
                  validationErrors.lastname ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {validationErrors.lastname && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.lastname}</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`px-4 py-3 border rounded-xl w-full ${
                validationErrors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {validationErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
            )}
          </div>

          <div className="mt-4">
            <textarea
              rows="4"
              placeholder="Any special requests (optional)"
              value={formData.specialRequest}
              onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none"
            />
          </div>

          {/* Room Quantity Selection */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <h4 className="font-semibold text-blue-800 mb-2">Room Selection</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Room Type: <span className="capitalize font-semibold">{roomType}</span>
                </label>
                <p className="text-xs text-blue-600 mb-3">
                  Max {maxGuestsPerRoom} guests per room (Children stay free with adults in double rooms)
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Additional occupant *
                </label>
                <input
                  type="number"
                  min={minRoomsNeeded}
                  max="10"
                  value={formData.roomQuantity}
                  onChange={(e) => setFormData({ ...formData, roomQuantity: parseInt(e.target.value) || minRoomsNeeded })}
                  className={`px-3 py-2 border rounded-lg w-full ${
                    validationErrors.roomQuantity ? 'border-red-500' : 'border-blue-300'
                  }`}
                />
                {validationErrors.roomQuantity && (
                  <p className="text-red-500 text-xs mt-1">{validationErrors.roomQuantity}</p>
                )}
                {/* <p className="text-xs text-blue-600 mt-1">
                  Minimum {minRoomsNeeded} room{minRoomsNeeded > 1 ? 's' : ''} needed for {payingGuests} paying guests
                </p> */}
              </div>
            </div>
            
            <div className="mt-3 p-3 bg-white rounded-lg">
              <div className="text-sm text-gray-700">
                <div className="flex justify-between mb-1">
                  <span>Paying Guests (Adults + Infants):</span>
                  <span className="font-medium">{payingGuests}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Children (Free):</span>
                  <span className="font-medium">{guests.children || 0}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Total Capacity ({roomsBooked} × {maxGuestsPerRoom}):</span>
                  <span className="font-medium">{totalCapacity}</span>
                </div>
                {extraPersonsNeeded > 0 && (
                  <div className="flex justify-between text-orange-600">
                    <span>Extra Persons Needed:</span>
                    <span className="font-medium">{extraPersonsNeeded}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Extra Persons */}
          {(payingGuests > totalCapacity || extraPersonsNeeded > 0) && (
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <h4 className="font-semibold text-yellow-800 mb-2">Extra Person Charge</h4>
              <p className="text-sm text-yellow-700 mb-3">
                Your party exceeds the room capacity. {extraPersonsNeeded > 0 && `${extraPersonsNeeded} extra person${extraPersonsNeeded > 1 ? 's' : ''} required.`}
              </p>
              <label className="block">
                <span className="text-sm font-medium">Additional extra persons (+${extraPersonCharge} per person per night):</span>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={formData.extraPersons}
                  onChange={(e) => setFormData({ ...formData, extraPersons: parseInt(e.target.value) || 0 })}
                  className="mt-1 px-3 py-2 border rounded-lg w-full max-w-xs"
                />
              </label>
              {extraPersonsNeeded > 0 && (
                <p className="text-xs text-orange-600 mt-2">
                  Note: {extraPersonsNeeded} extra person{extraPersonsNeeded > 1 ? 's' : ''} will be automatically charged
                </p>
              )}
            </div>
          )}

          {/* Smoking Room Option */}
          {smokingRoomCharge > 0 && (
            <div className="mt-6">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.isSmokingAllowed}
                  onChange={(e) =>
                    setFormData({ ...formData, isSmokingAllowed: e.target.checked })
                  }
                  className="w-4 h-4 text-indigo-600"
                />
                <span>Request a Smoking Room (+${smokingRoomCharge})</span>
              </label>
            </div>
          )}

          {/* Pet Friendly Option */}
          {allowedPets > 0 && (
            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.isPetFriendly}
                  onChange={(e) =>
                    setFormData({ ...formData, isPetFriendly: e.target.checked, pets: e.target.checked ? 1 : 0 })
                  }
                  className="w-4 h-4 text-indigo-600"
                />
                <span>Bringing Pets? (+${petFeePerPet} per pet)</span>
              </label>
              {formData.isPetFriendly && (
                <div>
                  <input
                    type="number"
                    min="1"
                    max={allowedPets}
                    placeholder="Number of Pets"
                    value={formData.pets || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, pets: parseInt(e.target.value) || 0 })
                    }
                    className={`px-4 py-2 border rounded-xl w-full max-w-xs ${
                      validationErrors.pets ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {validationErrors.pets && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.pets}</p>
                  )}
                  <p className="text-sm text-gray-600 mt-1">Maximum {allowedPets} pets allowed</p>
                </div>
              )}
            </div>
          )}

          {validationErrors.guests && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-red-700 text-sm">{validationErrors.guests}</p>
            </div>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 font-medium">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              `Confirm & Pay $${total} CAD`
            )}
          </button>
          <Link to="/terms">
          <p className="text-sm text-gray-500 mt-2 text-center">
            By clicking confirm & pay, you agree to our terms and conditions
          </p>
          </Link>
          
        </div>
      </form>

      {/* SIDEBAR SECTION */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <img
                src={property?.images?.[0] || property?.image}
                alt="Property"
                className="w-24 h-24 rounded-xl object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/96x96?text=No+Image';
                }}
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {property?.title || property?.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {property?.location?.city || property?.city}, {property?.location?.country || property?.country}
                </p>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-semibold">{property?.rating || 'N/A'}</span>
                  <span className="text-sm text-gray-500">({property?.reviews || 0} reviews)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t pt-4 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Check-in</span>
                <span className="font-medium text-gray-900">{formatDate(checkIn)}</span>
              </div>
              <div className="flex justify-between">
                <span>Check-out</span>
                <span className="font-medium text-gray-900">{formatDate(checkOut)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Guests</span>
                <span className="font-medium text-gray-900">
                  {totalGuests} guest{totalGuests !== 1 ? 's' : ''} ({payingGuests} paying)
                </span>
              </div>
              <div className="flex justify-between">
                <span>Room Type</span>
                <span className="font-medium text-gray-900 capitalize">{roomType}</span>
              </div>
              <div className="flex justify-between">
                <span>Rooms</span>
                <span className="font-medium text-gray-900">
                  {roomsBooked} room{roomsBooked !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6">
            <h4 className="font-bold text-lg mb-4">Price breakdown</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>${nightlyPrice} × {nights} night{nights > 1 ? "s" : ""} × {roomsBooked} room{roomsBooked > 1 ? "s" : ""}</span>
                <span className="font-medium text-gray-900">${subtotal}</span>
              </div>
              {extraPersonFee > 0 && (
                <div className="flex justify-between">
                  <span>Extra person charge ({formData.extraPersons + extraPersonsNeeded} × ${extraPersonCharge})</span>
                  <span className="font-medium text-gray-900">${extraPersonFee}</span>
                </div>
              )}
              {smokingFee > 0 && (
                <div className="flex justify-between">
                  <span>Smoking room charge</span>
                  <span className="font-medium text-gray-900">${smokingFee}</span>
                </div>
              )}
              {petFee > 0 && (
                <div className="flex justify-between">
                  <span>Pet fee ({formData.pets} × ${petFeePerPet})</span>
                  <span className="font-medium text-gray-900">${petFee}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="font-medium text-gray-900">${tax}</span>
              </div>
              <div className="flex justify-between">
                <span>Tourism Levy tax</span>
                <span className="font-medium text-gray-900">${tourismLevy}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-base font-bold text-gray-900">
                <span>Total</span>
                <span>${total} CAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;