import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings } from "../../redux/slices/bookingSlice";

const BookingDetails = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getUserBookings());
  }, [dispatch]);
console.log(bookings);
console.log(bookings.property);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-IN");

  return (
    <div className="p-4">
      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-800 text-white text-left text-sm">
                  <th className="p-3">#</th>
                  <th className="p-3">Room</th>
                  <th className="p-3">Check-in / out</th>
                  <th className="p-3">Guests</th>
                  <th className="p-3">Amount</th>
                  <th className="p-3">Status</th>
                  {/* <th className="p-3">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr
                    key={booking._id}
                    className="bg-white border-t border-gray-200 text-sm"
                  >
                    <td className="p-3 font-medium">{index + 1}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        {/* <img
                          src={booking.property.image}
                          alt="room"
                          className="w-16 h-12 object-cover rounded"
                        /> */}
                        <div>
                          <div className="font-semibold">{booking.property.name}</div>
                          <div className="text-gray-500 text-xs">
                            ₹{booking.property.price} / night
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <div><strong>Check-in:</strong> {formatDate(booking.checkInDate)}</div>
                        <div><strong>Check-out:</strong> {formatDate(booking.checkOutDate)}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div><strong>Adults:</strong> {booking.guests.adults}</div>
                      <div><strong>Children:</strong> {booking.guests.children}</div>
                      <div><strong>Pets:</strong> {booking.guests.pets}</div>
                    </td>
                    <td className="p-3">{booking.totalAmount} CAD</td>
                    <td className="p-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-md ${booking.bookingStatus === "booked" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
                        {booking.bookingStatus}
                      </span>
                    </td>
                    {/* <td className="p-3">
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {bookings.map((booking, index) => (
              <div key={booking._id} className="bg-white shadow-md rounded-md p-4 border">
                <div className="flex gap-3">
                  <img
                    src={booking.property.image}
                    alt="room"
                    className="w-24 h-20 object-cover rounded"
                  />
                  <div>
                    <div className="font-semibold">{booking.property.name}</div>
                    <div className="text-xs text-gray-500">₹{booking.property.price} / night</div>
                  </div>
                </div>

                <div className="mt-3 text-sm">
                  <div><strong>Check-in:</strong> {formatDate(booking.checkInDate)}</div>
                  <div><strong>Check-out:</strong> {formatDate(booking.checkOutDate)}</div>
                  <div><strong>Guests:</strong> {booking.guests.adults} Adults, {booking.guests.children} Children, {booking.guests.pets} Pets</div>
                  <div><strong>Total:</strong> {booking.totalAmount} CAD</div>
                  <div>
                    <strong>Status:</strong>{" "}
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${booking.bookingStatus === "booked" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
                      {booking.bookingStatus}
                    </span>
                  </div>
                </div>

                {/* <div className="mt-2 flex justify-end">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookingDetails;
