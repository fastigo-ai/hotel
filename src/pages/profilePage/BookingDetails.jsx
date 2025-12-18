import React, { useEffect } from "react";
import {
  FaTrash,
  FaHome,
  FaCalendar,
  FaUsers,
  FaDollarSign,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../../redux/slices/bookingSlice";
import { cancelBooking } from "../../api/Api/";

/* ===============================
   BookingDetails Component
================================= */

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookings = [], loading, error } = useSelector(
    (state) => state.booking
  );

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
    return new Date(date).toLocaleDateString("en-IN");
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
      location: property?.location || property?.city || "",
    };
  };

  const getStatus = (booking) =>
    booking?.bookingStatus || booking?.status || "unknown";

  const statusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "confirmed":
      case "booked":
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

  /* ===============================
     Cancel booking
  ================================= */

  const handleCancelBooking = async (booking) => {
    const confirm = window.confirm(
      "Are you sure you want to cancel this booking?"
    );
    if (!confirm) return;

    try {
      const payload = {
        bookingId: booking._id,
        orderId: booking.orderId?._id || booking.orderId,
        propertyId:
          booking.property?._id || booking.propertyId?._id || booking.propertyId,
      };

      console.log("Cancel payload:", payload);

      await cancelBooking(payload);
      dispatch(getUserBookings());
    } catch (err) {
      console.error("Cancel failed:", err);
      alert("Failed to cancel booking");
    }
  };

  /* ===============================
     Loading / Error / Empty
  ================================= */

  if (loading) {
    return (
      <div className="flex justify-center py-16">
        <div className="animate-spin h-12 w-12 border-b-2 border-blue-600 rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-12">
        {error}
        <br />
        <button
          onClick={() => dispatch(getUserBookings())}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="text-center py-16">
        <FaHome className="mx-auto text-5xl text-gray-400 mb-4" />
        <h3 className="text-xl font-semibold">No bookings found</h3>
      </div>
    );
  }

  /* ===============================
     Render
  ================================= */

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {/* ================= Desktop ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Property</th>
              <th className="p-3">Dates</th>
              <th className="p-3">Guests</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => {
              const property = getPropertyData(booking);
              const status = getStatus(booking);

              return (
                <tr key={booking._id} className="border-t">
                  <td className="p-3">{i + 1}</td>

                  <td className="p-3 flex gap-3 items-center">
                    {property.image ? (
                      <img
                        src={property.image}
                        alt="property"
                        className="w-16 h-12 object-cover rounded"
                      />
                    ) : (
                      <FaHome className="text-gray-400" />
                    )}
                    <div>
                      <div className="font-semibold">{property.name}</div>
                      <div className="text-xs text-gray-500">
                        ${property.price} / night
                      </div>
                    </div>
                  </td>

                  <td className="p-3 text-xs">
                    <div>In: {formatDate(booking.checkInDate)}</div>
                    <div>Out: {formatDate(booking.checkOutDate)}</div>
                  </td>

                  <td className="p-3 text-xs">
                    {booking.guests?.adults || 0} Adults,
                    {booking.guests?.children || 0} Children
                  </td>

                  <td className="p-3 font-semibold">
                    {booking.totalAmount} CAD
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs capitalize ${statusStyle(
                        status
                      )}`}
                    >
                      {status}
                    </span>
                  </td>

                  <td className="p-3">
                    {status !== "cancelled" && (
                      <button
                        onClick={() => handleCancelBooking(booking)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile ================= */}
      <div className="md:hidden space-y-4">
        {bookings.map((booking) => {
          const property = getPropertyData(booking);
          const status = getStatus(booking);
          console.log("Rendering booking:", booking);

          return (
            <div
              key={booking._id}
              className="border rounded-lg p-4 shadow"
            >
              <div className="flex gap-3 mb-2">
                {property.image ? (
                  <img
                    src={property.image}
                    alt="property"
                    className="w-24 h-20 rounded object-cover"
                  />
                ) : (
                  <FaHome className="text-gray-400 text-3xl" />
                )}
                <div>
                  <div className="font-semibold">{property.name}</div>
                  <div className="text-xs text-gray-500">
                    ${property.price} / night
                  </div>
                  <span
                    className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${statusStyle(
                      status
                    )}`}
                  >
                    {status}
                  </span>
                </div>
              </div>

              <div className="text-sm space-y-1">
                <div>
                  <FaCalendar className="inline mr-1" />
                  {formatDate(booking.checkInDate)} →{" "}
                  {formatDate(booking.checkOutDate)}
                </div>
                <div>
                  <FaUsers className="inline mr-1" />
                  {booking.guests?.adults || 0} Adults
                </div>
                <div>
                  <FaDollarSign className="inline mr-1" />
                  {booking.totalAmount} CAD
                </div>
              </div>

              {status !== "cancelled" && (
                <button
                  onClick={() => handleCancelBooking(booking)}
                  className="mt-3 text-red-600 flex items-center gap-1"
                >
                  <FaTrash /> Cancel Booking
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookingDetails;