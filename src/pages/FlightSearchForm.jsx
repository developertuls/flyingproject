
import { useState } from "react";
import { motion } from "motion/react";

export default function FlightSearchForm({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [focusedDeparture, setFocusedDeparture] = useState(false);
  const [focusedReturn, setFocusedReturn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ from, to, date }); 
  };

  return (



    
    <div className="bg-white p-6 ">
      <h2 className="book text-center text-2xl md:text-3xl font-bold text-[#0c2461] mb-4">
        Book Your Flight
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="transition-all duration-0.4 space-y-4 shadow-md md:w-[80%] mx-auto p-9"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            type="text"
            placeholder="Flying From"
            className="w-full border focus:ring-1 focus:outline-none placeholder:pl-3 placeholder:text-xl border-gray-300 py-3 rounded"
          />

          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            type="text"
            placeholder="Flying To"
            className="w-full border focus:ring-1 focus:outline-none placeholder:pl-3 placeholder:text-xl border-gray-300 py-3 rounded"
          />

          {/* Departure Date */}
          <div className="relative">
            {!focusedDeparture && (
              <span className="text-xl absolute left-3 top-3 text-gray-400 pointer-events-none">
                Departure Date
              </span>
            )}
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className={`focus:ring-1 focus:outline-none w-full border border-gray-300 p-3 rounded bg-transparent ${focusedDeparture ? "text-black" : "text-transparent"}`}
              onFocus={() => setFocusedDeparture(true)}
              onBlur={(e) => {
                if (!e.target.value) setFocusedDeparture(false);
              }}
            />
          </div>

          {/* Return Date */}
          <div className="relative">
            {!focusedReturn && (
              <span className="text-xl absolute left-3 top-3 text-gray-400 pointer-events-none">
                Return Date
              </span>
            )}
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type="date"
              className={`focus:ring-1 focus:outline-none w-full border border-gray-300 p-3 rounded bg-transparent ${focusedReturn ? "text-black" : "text-transparent"}`}
              onFocus={() => setFocusedReturn(true)}
              onBlur={(e) => {
                if (!e.target.value) setFocusedReturn(false);
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="transition-all duration-300 hover:w-[95%] block mx-auto bg-[#307b82] w-full hover:bg-[#2996a0] text-white py-4 text-2xl rounded font-semibold"
        >
          Search Flights
        </button>
      </motion.form>
    </div>
  );
}
