
import React from "react";

const FlightDetails = () => {
  const flights = [
    {
      id: 1,
      flightName: "Dhaka to Saudi Arabia",
      departureLocation: "Dhaka (DAC)",
      departureTime: "10:00 AM",
      arrivalLocation: "Dubai (DXB)",
      arrivalTime: "1:30 PM",
      price: 450,
    },
    {
      id: 2,
      flightName: "Chittagong to Singapore",
      departureLocation: "Chittagong (CGP)",
      departureTime: "8:00 AM",
      arrivalLocation: "Singapore (SIN)",
      arrivalTime: "12:00 PM",
      price: 380,
    },
    {
      id: 3,
      flightName: "Dhaka to London",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "Dhaka to Indonesia",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },

    {
      id: 3,
      flightName: "Dhaka to Dubai",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "Dhaka to London",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "Korea to Dhaka",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "  London to  Dhaka",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "  London to Kuwait",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "slyet to Dhaka",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "Dhaka to Korea",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
    {
      id: 3,
      flightName: "Dhaka to London",
      departureLocation: "Dhaka (DAC)",
      departureTime: "9:30 PM",
      arrivalLocation: "London (LHR)",
      arrivalTime: "7:00 AM",
      price: 720,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="bg-white shadow-lg rounded-xl border border-gray-200 p-4"
        >
          <h2 className="text-2xl font-bold text-gray-800">{flight.flightName}</h2>
          <p className="text-gray-700">
            🛫 Departure: {flight.departureLocation} — {flight.departureTime}
          </p>
          <p className="text-gray-700">
            🛬 Arrival: {flight.arrivalLocation} — {flight.arrivalTime}
          </p>
          <p className="text-lg font-semibold text-green-600">
            💰 Price: ${flight.price}
          </p>
          <button className="mt-4 w-full  transition-all  bg-[#6F1E51] hover:bg-[#0fa1c5] text-white font-bold py-2 rounded-lg  duration-300">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default FlightDetails;
