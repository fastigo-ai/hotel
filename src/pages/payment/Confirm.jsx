// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import CancellationAndInfo from "../terms and setting/CancellationAndInfo ";
// import { useSelector } from "react-redux";

// const Confirm = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const { property, checkIn, checkOut, guests } = state || {};
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   if (!property) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
//             </svg>
//           </div>
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">Booking Data Not Available</h2>
//           <p className="text-gray-600 mb-4">We couldn't find your booking information. Please try again.</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const nights =
//     checkIn && checkOut
//       ? Math.max(
//           (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
//           1
//         )
//       : 1; 

//   const subtotal = Math.floor(property.price * nights);
//   const tax = Math.floor(subtotal * 0.05);
//   const total = subtotal + tax;

//   const [formData, setFormData] = useState({
//     propertyId: property._id,
//     userId: user?.user?.id || null,
//     checkInDate: checkIn,
//     checkOutDate: checkOut,
//     totalStay: nights,
//     totalAmount: total.toString(),
//     currency: "cad",
//     specialRequest: "",
//     user: {
//       firstname: "",
//       lastname: "",
//     },
//     guests: guests || {
//       adults: 1,
//       children: 0,
//       infants: 0,
//       pets: 0,
//     },
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(
//         "https://starfish-app-6yhui.ondigitalocean.app/api/payments/create-checkout-session",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to create checkout session");
//       }

//       window.location.href = data.url;
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       weekday: 'short',
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="container mx-auto max-w-7xl px-4 md:px-8">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
//             <span>Home</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//             <span>Booking</span>
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//             <span className="text-indigo-600 font-medium">Confirm & Pay</span>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900">Confirm and pay</h1>
//           <p className="text-gray-600 mt-2">Review your booking details and complete your reservation</p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 font-sora">
//           {/* FORM SECTION */}
//           <div className="lg:w-2/3">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Guest Details Card */}
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                   </div>
//                   <h2 className="text-2xl font-bold text-gray-900">Guest Details</h2>
//                 </div>

//                 <div className="space-y-6">
//                   {/* Name Fields */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         First Name *
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter first name"
//                         value={formData.user.firstname}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             user: { ...prev.user, firstname: e.target.value },
//                           }))
//                         }
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-gray-700 mb-2">
//                         Last Name *
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="Enter last name"
//                         value={formData.user.lastname}
//                         onChange={(e) =>
//                           setFormData((prev) => ({
//                             ...prev,
//                             user: { ...prev.user, lastname: e.target.value },
//                           }))
//                         }
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       placeholder="Enter phone number"
//                       value={formData.user.phone}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           user: { ...prev.user, phone: e.target.value },
//                         }))
//                       }
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                     />
//                   </div>

//                   {/* Special Request */}
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Special Requests
//                     </label>
//                     <textarea
//                       placeholder="Any special requests or notes for the host (optional)"
//                       value={formData.specialRequest}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           specialRequest: e.target.value,
//                         }))
//                       }
//                       rows="4"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
//                     />
//                   </div>
//                 </div>
//               </div>

             

//               {/* Error Message */}
//               {error && (
//                 <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
//                   <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <p className="text-red-700 text-sm font-medium">{error}</p>
//                 </div>
//               )}

//               {/* Submit Button */}
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-indigo-800 focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
//                 >
//                   {loading ? (
//                     <div className="flex items-center justify-center gap-2">
//                       <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                       </svg>
//                       Processing...
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center gap-2">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                       </svg>
//                       Confirm & Pay ${total} CAD
//                     </div>
//                   )}
//                 </button>
//                 <p className="text-center text-sm text-gray-500 mt-3">
//                   By clicking confirm & pay, you agree to our terms and conditions
//                 </p>
//               </div>
//             </form>
//           </div>

//           {/* SIDEBAR */}
//           <div className="lg:w-1/3">
//             <div className="sticky top-8">
//               <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//                 {/* Property Image and Info */}
//                 <div className="p-6">
//                   <div className="flex gap-4 mb-6">
//                     <div className="relative">
//                       <img
//                         src={property.images[0]}
//                         alt="Property"
//                         className="w-24 h-24 rounded-xl object-cover"
//                       />
//                       <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
//                         <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
//                       <p className="text-sm text-gray-600 mb-2">Entire rental unit</p>
//                       <div className="flex items-center gap-1">
//                         <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                         </svg>
//                         <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
//                         <span className="text-sm text-gray-600">({property.reviews} reviews)</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Booking Details */}
//                   <div className="space-y-4 mb-6">
//                     <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                       <span className="text-sm font-medium text-gray-700">Check-in</span>
//                       <span className="text-sm font-semibold text-gray-900">{formatDate(checkIn)}</span>
//                     </div>
//                     <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                       <span className="text-sm font-medium text-gray-700">Check-out</span>
//                       <span className="text-sm font-semibold text-gray-900">{formatDate(checkOut)}</span>
//                     </div>
//                     <div className="flex justify-between items-center py-3 border-b border-gray-100">
//                       <span className="text-sm font-medium text-gray-700">Guests</span>
//                       <span className="text-sm font-semibold text-gray-900">
//                         {(formData.guests.adults + formData.guests.children)} guests
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Price Breakdown */}
//                 <div className="bg-gray-50 p-6">
//                   <h4 className="text-lg font-bold text-gray-900 mb-4">Price breakdown</h4>
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <span className="text-sm text-gray-600">
//                         ${property.price} CAD × {nights} night{nights > 1 ? "s" : ""}
//                       </span>
//                       <span className="text-sm font-medium text-gray-900">${subtotal} CAD</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-sm text-gray-600">Taxes & fees</span>
//                       <span className="text-sm font-medium text-gray-900">${tax} CAD</span>
//                     </div>
//                     <div className="border-t border-gray-200 pt-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-lg font-bold text-gray-900">Total</span>
//                         <span className="text-lg font-bold text-gray-900">${total} CAD</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Security Note */}
//               <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
//                 <div className="flex items-center gap-2 mb-2">
//                   <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                   <span className="text-sm font-semibold text-green-800">Secure Payment</span>
//                 </div>
//                 <p className="text-sm text-green-700">
//                   Your payment information is encrypted and secure. We never store your card details.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <CancellationAndInfo />
//     </div>
//   );
// };

// export default Confirm;





// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import CancellationAndInfo from "../terms and setting/CancellationAndInfo ";

// const Confirm = () => {
//   const { state } = useLocation();
//   const reduxBooking = useSelector((state) => state.booking.bookingData);
//   const user = JSON.parse(localStorage.getItem("user"));

//   const bookingData = state || reduxBooking;
//   const { property, checkIn, checkOut, guests } = bookingData || {};

//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   if (!property) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-8 rounded-xl shadow-lg text-center">
//           <h2 className="text-xl font-semibold text-red-600 mb-4">Booking Data Not Available</h2>
//           <p className="text-gray-600 mb-4">We couldn't find your booking information. Please try again.</p>
//           <button
//             onClick={() => navigate(-1)}
//             className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }
//   const petFeePerPetPerNight = 15; // CAD

//   const nights = Math.ceil(
//   (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
// );

// const { pets = 0 } = guests || {};

// const subtotal = Math.floor(property.price * nights);
// const petCharge = pets * nights * petFeePerPetPerNight;
// const tax = Math.floor((subtotal + petCharge) * 0.05); // 5% GST
// const total = subtotal + petCharge + tax;



//   // const nights =
//   //   checkIn && checkOut
//   //     ? Math.max((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24), 1)
//   //     : 1;

//   // const subtotal = Math.floor(property.price * nights);
//   // const tax = Math.floor(subtotal * 0.05);
//   // const total = subtotal + tax;

//   const [formData, setFormData] = useState({
//     propertyId: property._id,
//     userId: user?.user?.id || null,
//     checkInDate: checkIn,
//     checkOutDate: checkOut,
//     totalStay: nights,
//     totalAmount: total,
//     currency: "cad",
//     specialRequest: "",
//     roomDetails: {
//       roomType: "Standard",
//       quantity: 1,
//       allowedPersonsPerRoom: 2,
//       extraPersons: 0,
//       extraPersonCharge: 0,
//       isSmokingAllowed: false,
//       smokingRoomCharge: 0,
//       isPetFriendly: false,
//       pets: guests?.pets || 0,
//       petFeePerPet: 0,
//     },
//     guests: guests || {
//       adults: 1,
//       children: 0,
//       infants: 0,
//       pets: 0,
//     },
//     user: {
//       firstname: "",
//       lastname: "",
//       phone: ""
//     }
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     // Basic validations
//     if (!checkIn || !checkOut) {
//       return setError("Please select both check-in and check-out dates.");
//     }

//     if (new Date(checkIn) >= new Date(checkOut)) {
//       return setError("Check-out date must be after check-in date.");
//     }

//     const totalGuests =
//       formData.guests.adults +
//       formData.guests.children +
//       formData.guests.infants;

//     const maxCapacity =
//       formData.roomDetails.allowedPersonsPerRoom * formData.roomDetails.quantity;

//     if (totalGuests > maxCapacity) {
//       return setError(
//         `Total guests (${totalGuests}) exceed the room capacity (${maxCapacity}).`
//       );
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://starfish-app-6yhui.ondigitalocean.app/api/payments/create-checkout-session",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message || "Checkout session creation failed");
//       }
//       window.location.href = data.url;
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "short",
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Confirm and Pay</h1>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8"
//         >
//           {/* Main Form */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Guest Info */}
//             <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
//               <h2 className="text-xl font-semibold">Guest Details</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   value={formData.user.firstname}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       user: { ...prev.user, firstname: e.target.value },
//                     }))
//                   }
//                   required
//                   className="border p-3 rounded-xl w-full"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   value={formData.user.lastname}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       user: { ...prev.user, lastname: e.target.value },
//                     }))
//                   }
//                   required
//                   className="border p-3 rounded-xl w-full"
//                 />
//               </div>
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 value={formData.user.phone}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     user: { ...prev.user, phone: e.target.value },
//                   }))
//                 }
//                 required
//                 className="border p-3 rounded-xl w-full"
//               />
//             </div>

//             {/* Room Selection */}
//             <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
//               <h2 className="text-xl font-semibold">Room Preferences</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <select
//                   value={formData.roomDetails.roomType}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       roomDetails: {
//                         ...prev.roomDetails,
//                         roomType: e.target.value,
//                       },
//                     }))
//                   }
//                   className="border p-3 rounded-xl w-full"
//                 >
//                   <option value="Standard">Standard</option>
//                   <option value="Deluxe">Single</option>
//                   <option value="Suite">Double</option>
//                 </select>
//                 <input
//                 placeholder="Hello"
//                   type="number"
                  
//                   value={formData.roomDetails.quantity}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       roomDetails: {
//                         ...prev.roomDetails,
//                         quantity: parseInt(e.target.value) || 1,
//                       },
//                     }))
//                   }
//                   className="border p-3 rounded-xl w-full"
//                   placeholder="Room Quantity"
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <select
//                   value={formData.roomDetails.isSmokingAllowed ? "yes" : "no"}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       roomDetails: {
//                         ...prev.roomDetails,
//                         isSmokingAllowed: e.target.value === "yes",
//                       },
//                     }))
//                   }
//                   className="border p-3 rounded-xl w-full"
//                 >
//                   <option value="no">Non-Smoking Room</option>
//                   <option value="yes">Smoking Room</option>
//                 </select>
//                 <select
//                   value={formData.roomDetails.isPetFriendly ? "yes" : "no"}
//                   onChange={(e) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       roomDetails: {
//                         ...prev.roomDetails,
//                         isPetFriendly: e.target.value === "yes",
//                       },
//                     }))
//                   }
//                   className="border p-3 rounded-xl w-full"
//                 >
//                   <option value="no">No Pets</option>
//                   <option value="yes">Bringing Pets</option>
//                 </select>
//               </div>
//             </div>

//             {/* Guest Count */}
//             <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
//               <h2 className="text-xl font-semibold">Guest Count</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {["adults", "children", "infants", "pets"].map((key) => (
//                   <div key={key} className="space-y-1">
//                     <label className="capitalize block text-sm font-medium text-gray-700">{key}</label>
//                     <input
//                       type="number"
//                       min="0"
//                       value={formData.guests[key]}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           guests: {
//                             ...prev.guests,
//                             [key]: parseInt(e.target.value) || 0,
//                           },
//                         }))
//                       }
//                       className="border p-2 rounded-xl w-full"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Special Request */}
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <label className="block text-sm font-semibold text-gray-700 mb-2">Special Request</label>
//               <textarea
//                 rows="3"
//                 placeholder="Any notes for host?"
//                 value={formData.specialRequest}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     specialRequest: e.target.value,
//                   }))
//                 }
//                 className="w-full border p-3 rounded-xl"
//               />
//             </div>

//             {/* Error + Button */}
//             {error && (
//               <div className="bg-red-100 text-red-700 p-3 rounded-xl">{error}</div>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all"
//             >
//               {loading ? "Processing..." : `Confirm & Pay $${total} CAD`}
//             </button>
//           </div>

//           {/* Sidebar Summary */}
//           <div className="space-y-6">
//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <img src={property.images?.[0]} alt={property.title} className="w-full h-40 object-cover rounded-md mb-4" />
//               <h3 className="font-bold text-lg">{property.title}</h3>
//               <p className="text-sm text-gray-500">{property.location}</p>
//               <div className="mt-4 border-t pt-4 space-y-2 text-sm text-gray-700">
//                 <p><strong>Check-in:</strong> {formatDate(checkIn)}</p>
//                 <p><strong>Check-out:</strong> {formatDate(checkOut)}</p>
//                 <p><strong>Guests:</strong> {formData.guests.adults + formData.guests.children}</p>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-md">
//               <h4 className="font-bold mb-3">Price Breakdown</h4>
//               <div className="flex justify-between">
//                 <span>${property.price} × {nights} night(s)</span>
                
//                 <span>${subtotal}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Pets Fees</span>
//                 <span>${petCharge}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax & Fees</span>
//                 <span>${tax}</span>
//               </div>
//               <hr className="my-2" />
//               <div className="flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>${total} CAD</span>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//       <CancellationAndInfo />
//     </div>
//   );
// };

// export default Confirm;





// Full Confirm Component with Guest Details Form and Sidebar UI
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { property, checkIn, checkOut, guests = {}, price } = state || {};
  const user = JSON.parse(localStorage.getItem("user"));

  const nights = Math.max(
    1,
    Math.floor((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
  );

  const nightlyPrice = price || property?.price || 0;
  const smokingRoomCharge = property?.smokingRoomCharge || 0;
  const petFeePerPet = property?.petFeePerPet || 0;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    specialRequest: "",
    isSmokingAllowed: false,
    isPetFriendly: false,
    pets: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatDate = (date) => format(new Date(date), "MMM d, yyyy");

  const petFee = formData.isPetFriendly ? (formData.pets || 0) * petFeePerPet : 0;
  const smokingFee = formData.isSmokingAllowed ? smokingRoomCharge : 0;
  const subtotal = Math.floor(nightlyPrice * nights);
  const tax = Math.floor((subtotal + petFee + smokingFee) * 0.5);
  const total = subtotal + petFee + smokingFee + tax;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      propertyId: property?._id,
      userId: user?.user?.id || null,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      totalStay: nights,
      totalAmount: total.toString(),
      currency: "cad",
      specialRequest: formData.specialRequest,
      user: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        phone: formData.phone,
      },
      guests: {
        ...guests,
        pets: formData.isPetFriendly ? formData.pets : 0,
      },
      roomDetails: {
        roomType: property?.roomType || "Standard",
        quantity: 1,
        allowedPersonsPerRoom: property?.maxGuests,
        extraPersons: 0,
        extraPersonCharge: property?.extraPersonCharge || 0,
        isSmokingAllowed: formData.isSmokingAllowed,
        smokingRoomCharge: smokingRoomCharge,
        isPetFriendly: formData.isPetFriendly,
        pets: formData.pets || 0,
        petFeePerPet: petFeePerPet,
      },
    };

    try {
      const response = await fetch(
        "https://starfish-app-6yhui.ondigitalocean.app/api/payments/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create checkout session");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* FORM SECTION */}
      <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Guest Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              required
              value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
              className="px-4 py-3 border rounded-xl w-full"
            />
            <input
              type="text"
              placeholder="Last Name *"
              required
              value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
              className="px-4 py-3 border rounded-xl w-full"
            />
          </div>

          <div className="mt-4">
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-4 py-3 border rounded-xl w-full"
            />
          </div>

          <div className="mt-4">
            <textarea
              rows="4"
              placeholder="Any special requests (optional)"
              value={formData.specialRequest}
              onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
              className="w-full px-4 py-3 border rounded-xl resize-none"
            />
          </div>

          {/* Smoking Room Option */}
          <div className="mt-6">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.isSmokingAllowed}
                onChange={(e) =>
                  setFormData({ ...formData, isSmokingAllowed: e.target.checked })
                }
              />
              <span>Request a Smoking Room (+${smokingRoomCharge})</span>
            </label>
          </div>

          {/* Pet Friendly Option */}
          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.isPetFriendly}
                onChange={(e) =>
                  setFormData({ ...formData, isPetFriendly: e.target.checked })
                }
              />
              <span>Bringing Pets? (+${petFeePerPet} per pet)</span>
            </label>
            {formData.isPetFriendly && (
              <input
                type="number"
                min="1"
                placeholder="Number of Pets"
                value={formData.pets || ""}
                onChange={(e) =>
                  setFormData({ ...formData, pets: parseInt(e.target.value) || 0 })
                }
                className="px-4 py-2 border rounded-xl w-full max-w-xs"
              />
            )}
          </div>
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
            className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : `Confirm & Pay $${total} CAD`}
          </button>
          <p className="text-sm text-gray-500 mt-2 text-center">
            By clicking confirm & pay, you agree to our terms and conditions
          </p>
        </div>
      </form>

      {/* SIDEBAR SECTION */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <img
                src={property?.images?.[0]}
                alt="Property"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{property?.title}</h3>
                <p className="text-sm text-gray-600">
                  {property?.location?.city}, {property?.location?.country}
                </p>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-semibold">{property?.rating}</span>
                  <span className="text-sm text-gray-500">({property?.reviews} reviews)</span>
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
                <span>Guests</span>
                <span className="font-medium text-gray-900">
                  {(guests.adults || 0) + (guests.children || 0)} guests
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6">
            <h4 className="font-bold text-lg mb-4">Price breakdown</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>${nightlyPrice} × {nights} night{nights > 1 ? "s" : ""}</span>
                <span className="font-medium text-gray-900">${subtotal}</span>
              </div>
              {smokingFee > 0 && (
                <div className="flex justify-between">
                  <span>Smoking room charge</span>
                  <span className="font-medium text-gray-900">${smokingFee}</span>
                </div>
              )}
              {petFee > 0 && (
                <div className="flex justify-between">
                  <span>Pet fee</span>
                  <span className="font-medium text-gray-900">${petFee}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Taxes & fees</span>
                <span className="font-medium text-gray-900">${tax}</span>
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
