import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../../redux/slices/bookingSlice";

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  // const { user } = useSelector((state) => state.auth); // ✅ Get user from Redux
  const user = JSON.parse(localStorage.getItem('user'))
console.log(JSON.parse(user.user));

  useEffect(() => {
    if (user) {
      dispatch(getUserBookings(user.user.id));
    }
  }, []);

  return (
    <div className="p-4 overflow-x-auto">
      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white text-left text-sm">
              <th className="p-3">#</th>
              <th className="p-3">User Details</th>
              <th className="p-3">Room Details</th>
              <th className="p-3">Booking Details</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id} className="bg-white border-t border-gray-200 text-sm">
                <td className="p-3 font-medium">{index + 1}</td>
                <td className="p-3">
                  <div>
                    <span className="text-xs font-semibold bg-blue-600 text-white px-2 py-1 rounded-md">
                      Order ID: {booking.orderId}
                    </span>
                    <div className="mt-1"><strong>Name:</strong> {booking.name}</div>
                    <div><strong>Phone No:</strong> {booking.phone}</div>
                  </div>
                </td>
                <td className="p-3">
                  <div><strong>Room:</strong> {booking.room}</div>
                  <div><strong>Price:</strong> ₹{booking.price}</div>
                </td>
                <td className="p-3">
                  <div><strong>Amount:</strong> ₹{booking.amount}</div>
                  <div><strong>Date:</strong> {booking.date}</div>
                </td>
                <td className="p-3">
                  {booking.status === "booked" ? (
                    <span className="text-xs font-semibold bg-green-500 text-white px-2 py-1 rounded-md">booked</span>
                  ) : (
                    <span className="text-xs font-semibold bg-red-500 text-white px-2 py-1 rounded-md">cancelled</span>
                  )}
                </td>
                <td className="p-3">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingDetails;
