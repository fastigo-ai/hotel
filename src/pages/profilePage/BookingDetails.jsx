import React, { useEffect } from "react";
import { FaTrash, FaHome, FaCalendar, FaUsers, FaDollarSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../../redux/slices/bookingSlice";

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookings = [], loading, error } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getUserBookings());
  }, [dispatch]);

  console.log("Bookings:", bookings);
  console.log("First booking property:", bookings[0]?.property);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString("en-IN");
    } catch (error) {
      return "Invalid Date";
    }
  };

  // Helper function to safely get property data
  const getPropertyData = (booking) => {
    const property = booking?.property || booking?.propertyId;
    return {
      name: property?.name || property?.title || "Property Name Not Available",
      price: property?.price || property?.detail?.price || 0,
      image: property?.image || property?.images?.[0] || property?.detail?.images?.[0] || null,
      location: property?.location || property?.city || "Location Not Available"
    };
  };

  // Helper function to get booking status with fallback
  const getBookingStatus = (booking) => {
    return booking?.bookingStatus || booking?.status || "unknown";
  };

  // Helper function to get status styling
  const getStatusStyle = (status) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "booked":
      case "confirmed":
      case "active":
        return "bg-green-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      case "cancelled":
        return "bg-red-500 text-white";
      case "completed":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="p-4">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-center text-gray-600 text-lg">Loading your bookings...</p>
          <p className="text-center text-gray-400 text-sm mt-2">This may take a moment</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-4">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg max-w-md">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold">Error loading bookings</h3>
                <p className="text-sm">{error}</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(getUserBookings())}
              className="mt-3 bg-red-600 text-white px-4 py-2 rounded text-sm hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (!bookings || bookings.length === 0) {
    return (
      <div className="p-4">
        <div className="flex flex-col items-center justify-center py-12">
          <div className="bg-gray-100 rounded-full p-6 mb-4">
            <FaHome className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Bookings Yet</h3>
          <p className="text-gray-500 text-center max-w-md mb-6">
            You haven't made any bookings yet. When you do, they'll appear here so you can track your reservations.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">My Bookings</h2>
        <p className="text-gray-600">Manage and view your property reservations</p>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-800 text-white text-left text-sm">
              <th className="p-4">#</th>
              <th className="p-4">Property</th>
              <th className="p-4">Dates</th>
              <th className="p-4">Guests</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => {
              const propertyData = getPropertyData(booking);
              const status = getBookingStatus(booking);
              
              return (
                <tr
                  key={booking._id || index}
                  className="bg-white border-t border-gray-200 text-sm hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-medium">{index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {propertyData.image ? (
                        <img
                          src={propertyData.image}
                          alt="property"
                          className="w-16 h-12 object-cover rounded"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/64x48?text=No+Image';
                          }}
                        />
                      ) : (
                        <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                          <FaHome className="text-gray-400 w-4 h-4" />
                        </div>
                      )}
                      <div>
                        <div className="font-semibold text-gray-900">{propertyData.name}</div>
                        <div className="text-gray-500 text-xs">
                          ${propertyData.price} / night
                        </div>
                        {propertyData.location && (
                          <div className="text-gray-400 text-xs">
                            {propertyData.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <FaCalendar className="w-3 h-3 text-green-500" />
                        <span className="text-xs">In: {formatDate(booking.checkInDate)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCalendar className="w-3 h-3 text-red-500" />
                        <span className="text-xs">Out: {formatDate(booking.checkOutDate)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1 text-xs">
                      <div><strong>Adults:</strong> {booking.guests?.adults || 0}</div>
                      <div><strong>Children:</strong> {booking.guests?.children || 0}</div>
                      {booking.guests?.pets > 0 && (
                        <div><strong>Pets:</strong> {booking.guests.pets}</div>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <FaDollarSign className="w-3 h-3 text-green-500" />
                      <span className="font-semibold">{booking.totalAmount || 0} CAD</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full capitalize ${getStatusStyle(status)}`}>
                      {status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {bookings.map((booking, index) => {
          const propertyData = getPropertyData(booking);
          const status = getBookingStatus(booking);
          
          return (
            <div key={booking._id || index} className="bg-white shadow-md rounded-lg p-4 border">
              <div className="flex gap-3 mb-3">
                {propertyData.image ? (
                  <img
                    src={propertyData.image}
                    alt="property"
                    className="w-24 h-20 object-cover rounded"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/96x80?text=No+Image';
                    }}
                  />
                ) : (
                  <div className="w-24 h-20 bg-gray-200 rounded flex items-center justify-center">
                    <FaHome className="text-gray-400 w-6 h-6" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{propertyData.name}</div>
                  <div className="text-xs text-gray-500">${propertyData.price} / night</div>
                  {propertyData.location && (
                    <div className="text-xs text-gray-400">{propertyData.location}</div>
                  )}
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-full capitalize mt-1 ${getStatusStyle(status)}`}>
                    {status}
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-3 h-3 text-blue-500" />
                  <span><strong>Check-in:</strong> {formatDate(booking.checkInDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendar className="w-3 h-3 text-blue-500" />
                  <span><strong>Check-out:</strong> {formatDate(booking.checkOutDate)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers className="w-3 h-3 text-green-500" />
                  <span><strong>Guests:</strong> {booking.guests?.adults || 0} Adults, {booking.guests?.children || 0} Children{booking.guests?.pets > 0 ? `, ${booking.guests.pets} Pets` : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaDollarSign className="w-3 h-3 text-green-500" />
                  <span><strong>Total:</strong> {booking.totalAmount || 0} CAD</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingDetails;