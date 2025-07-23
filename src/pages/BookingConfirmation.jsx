
// src/pages/BookingConfirmation.jsx

import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return <p className="text-center mt-10 text-red-600">No booking data found.</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-green-600">🎉 Booking Confirmed!</h2>

      <p><strong>Property Name:</strong> {booking.homeName}</p>
      <p><strong>User Name:</strong> {booking.userName}</p>
      <p><strong>Visit Date:</strong> {booking.visitDate}</p>
      <p><strong>Booking Amount:</strong> ৳{booking.amount}</p>

      <div className="mt-4 text-blue-500">
        Thank you for booking with us. We’ll contact you soon!
      </div>
    </div>
  );
};

export default BookingConfirmation;
