
import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const from = params.get("from");
  const to = params.get("to");
  const departure = params.get("departure");
  const returnDate = params.get("returnDate");
  const passengers = params.get("passengers");
  const travelClass = params.get("travelClass");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <p><strong>From:</strong> {from}</p>
      <p><strong>To:</strong> {to}</p>
      <p><strong>Departure:</strong> {departure}</p>
      <p><strong>Return:</strong> {returnDate}</p>
      <p><strong>Passengers:</strong> {passengers}</p>
      <p><strong>Class:</strong> {travelClass}</p>
    </div>
  );
};

export default SearchResults;
