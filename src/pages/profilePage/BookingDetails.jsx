import React, { useEffect } from "react";
import {
  FaTrash,
  FaHome,
  FaCalendarAlt,
  FaUserFriends,
  FaCreditCard,
  FaMapMarkerAlt
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../../redux/slices/bookingSlice";
import { cancelBooking } from "../../api/Api/";
import { Link } from "react-router-dom";

/* ===============================
   BookingDetails Component
================================= */

const BookingDetails = () => {
  const dispatch = useDispatch();
  const {
    bookings = [],
    loading,
    error,
  } = useSelector((state) => state.booking);

  /* ===============================
     Fetch bookings
  ================================= */
  useEffect(() => {
    dispatch(getUserBookings());
  }, [dispatch]);

  /* ===============================
     Helpers
  ================================= */

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const getPropertyData = (booking) => {
    const property = booking?.property || booking?.propertyId;
    return {
      id: property?._id,
      name: property?.name || property?.title || "Property",
      price: property?.price || property?.detail?.price || 0,
      image:
        property?.image ||
        property?.images?.[0] ||
        property?.detail?.images?.[0],
      location: property?.location || property?.city || "Stettler, AB",
    };
  };

  const getStatus = (booking) =>
    booking?.bookingStatus || booking?.status || "unknown";

  const getStatusBadge = (status) => {
    const lowerStatus = status.toLowerCase();
    
    let baseClasses = "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block ";
    
    switch (lowerStatus) {
      case "confirmed":
      case "booked":
        return <span className={baseClasses + "bg-green-100 text-green-700 border border-green-200"}>{status}</span>;
      case "pending":
        return <span className={baseClasses + "bg-yellow-100 text-yellow-700 border border-yellow-200"}>{status}</span>;
      case "cancelled":
        return <span className={baseClasses + "bg-red-100 text-red-700 border border-red-200"}>{status}</span>;
      case "completed":
        return <span className={baseClasses + "bg-blue-100 text-blue-700 border border-blue-200"}>{status}</span>;
      default:
        return <span className={baseClasses + "bg-gray-100 text-gray-700 border border-gray-200"}>{status}</span>;
    }
  };

  /* ===============================
     Cancel booking
  ================================= */

  const handleCancelBooking = async (booking) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this reservation?"
    );
    if (!confirm) return;

    try {
      const payload = {
        bookingId: booking._id,
        orderId: booking.orderId?._id || booking.orderId,
        propertyId:
          booking.property?._id ||
          booking.propertyId?._id ||
          booking.propertyId,
      };

      console.log("Cancel payload:", payload);

      await cancelBooking(payload);
      dispatch(getUserBookings());
    } catch (err) {
      console.error("Cancel failed:", err);
      alert("Failed to cancel booking. Please try again or contact support.");
    }
  };

  /* ===============================
     Loading / Error / Empty
  ================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F5F2] flex justify-center items-center">
        <div className="animate-spin h-16 w-16 border-4 border-[#4BA9A2] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F5F2] flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-gray-100">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => dispatch(getUserBookings())}
            className="bg-[#F39C49] hover:bg-[#e08c3c] text-black font-bold py-3 px-8 rounded transition-colors w-full uppercase tracking-wide text-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  /* ===============================
     Render
  ================================= */

  return (
    <div className="bg-[#F8F5F2] min-h-screen pb-20 pt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <p className="uppercase tracking-[0.2em] font-semibold text-sm mb-2 text-[#4BA9A2]">Your Account</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
            My Reservations
          </h1>
        </div>

        {bookings.length === 0 ? (
          /* Empty State */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center">
            <div className="w-24 h-24 bg-[#4BA9A2]/10 rounded-full flex items-center justify-center mb-6">
              <FaCalendarAlt className="text-4xl text-[#4BA9A2]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">No Reservations Found</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Looks like you haven't booked any stays with us yet. Ready for your next trip to Stettler?
            </p>
            <Link 
              to="/hotel-card" 
              className="bg-[#F39C49] hover:bg-[#e08c3c] text-black font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-sm"
            >
              Explore Our Rooms
            </Link>
          </div>
        ) : (
          /* Bookings List - Unified Card Layout for both Desktop and Mobile for a premium feel */
          <div className="space-y-6">
            {bookings.map((booking) => {
              const property = getPropertyData(booking);
              const status = getStatus(booking);
              const isCancelled = status.toLowerCase() === "cancelled";

              return (
                <div 
                  key={booking._id} 
                  className={`bg-white rounded-2xl shadow-sm border ${isCancelled ? 'border-red-100' : 'border-gray-100'} overflow-hidden flex flex-col md:flex-row transition-shadow hover:shadow-md`}
                >
                  {/* Image Section */}
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    {property.image ? (
                      <img
                        src={property.image}
                        alt={property.name}
                        className={`w-full h-full object-cover ${isCancelled ? 'grayscale opacity-70' : ''}`}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <FaHome className="text-4xl text-gray-400" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      {getStatusBadge(status)}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-serif font-bold text-gray-900">
                          {property.name}
                        </h3>
                        <div className="text-right hidden md:block">
                          <span className="text-xl font-bold text-[#4BA9A2]">${booking.totalAmount}</span>
                          <span className="text-xs text-gray-500 block">Total</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-6">
                        <FaMapMarkerAlt />
                        <span>{property.location}</span>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6">
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Check-in</p>
                          <p className="font-medium text-gray-900 flex items-center gap-2">
                            <FaCalendarAlt className="text-[#4BA9A2]" /> {formatDate(booking.checkInDate)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Check-out</p>
                          <p className="font-medium text-gray-900 flex items-center gap-2">
                            <FaCalendarAlt className="text-[#4BA9A2]" /> {formatDate(booking.checkOutDate)}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Guests</p>
                          <p className="font-medium text-gray-900 flex items-center gap-2">
                            <FaUserFriends className="text-[#4BA9A2]" /> {booking.guests?.adults || 0} Adults{(booking.guests?.children > 0) ? `, ${booking.guests.children} Kids` : ''}
                          </p>
                        </div>
                        <div className="md:hidden">
                          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Total</p>
                          <p className="font-medium text-gray-900 flex items-center gap-2">
                            <FaCreditCard className="text-[#4BA9A2]" /> ${booking.totalAmount}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-gray-100 flex justify-end">
                      {!isCancelled ? (
                        <button
                          onClick={() => handleCancelBooking(booking)}
                          className="flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-700 transition-colors uppercase tracking-wider"
                        >
                          <FaTrash /> Cancel Reservation
                        </button>
                      ) : (
                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                          Cancelled
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
