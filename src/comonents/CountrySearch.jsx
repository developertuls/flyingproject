
import React, { useState } from "react";

const countries = [
  { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png", hidden: false },
  { name: "India", flag: "https://flagcdn.com/w320/pk.png", hidden: false },
  { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png", hidden: true },
  { name: "Nepal", flag: "https://flagcdn.com/w320/np.png", hidden: true },
  { name: "Japan", flag: "https://flagcdn.com/w320/jp.png", hidden: true },
];

export default function CountrySearch() {
  const [search, setSearch] = useState("");

  // সার্চ হলে সব দেশের উপর সার্চ হবে
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // শো করার লিস্ট (সার্চ ফাঁকা হলে শুধু hidden:false)
  const displayCountries = search
    ? filteredCountries
    : countries.filter((c) => !c.hidden);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Country Search</h2>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", width: "250px", marginBottom: "20px" }}
      />

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {displayCountries.length > 0 ? (
          displayCountries.map((country, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img src={country.flag} alt={country.name} width="100" />
              <h4>{country.name}</h4>
            </div>
          ))
        ) : (
          <p>No country found</p>
        )}
      </div>
    </div>
  );
}
