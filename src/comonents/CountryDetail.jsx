
import React from "react";
import { useParams } from "react-router-dom";

export default function CountryDetail({ countries }) {
  const { id } = useParams();
  const country = countries.find((c) => c.id === parseInt(id));

  if (!country) {
    return <h2 style={{ textAlign: "center" }}>Country not found</h2>;
  }

  return (
    <div className="mt-[90px] h-[70vh] bg-[red]" style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>{country.name}</h2>
      <img className="ml-8  mt-9 " src={country.flag} alt={country.name} width="200" />
      <p>More information about {country.name}...</p>
    </div>
  );
}
