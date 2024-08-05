import React, { useState } from "react";

const CountryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Germany");
  const countries = [
    "Germany",
    "USA",
    "France",
    "Spain",
    "Italy",
    "Canada",
    "Australia",
    "Japan",
    "China",
    "India",
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gray-100 text-gray-800 font-semibold py-1 px-2 text-sm rounded inline-flex items-center"
      >
        <span className="mr-1">{selectedCountry}</span>
        <svg
          width="8"
          height="6"
          viewBox="0 0 8 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L4 4.5L7 1.5"
            stroke="#DD88CF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute bg-white shadow rounded mt-2 py-1 w-full z-10">
          {countries.map((country) => (
            <li
              key={country}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => selectCountry(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryDropdown;
