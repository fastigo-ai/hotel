import React, { useEffect, useState } from "react";
import { useLocationContext } from "../../contexts/LocationSearch";

const LocationSearch = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { updateLocation } = useLocationContext();

  useEffect(() => {
    if (query.length < 2) return setSuggestions([]);

    const fetchSuggestions = async () => {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&types=(cities)&key=${import.meta.env.VITE_REACT_APP_GOOGLE_PLACES_API_KEY}`
      );
      const data = await res.json();
      setSuggestions(data.predictions || []);
    };

    const delayDebounce = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleSelect = (item) => {
    setQuery(item.description);
    setSuggestions([]);
    updateLocation({
      title: item.structured_formatting.main_text,
      description: item.structured_formatting.secondary_text,
      full_description: item.description,
      place_id: item.place_id,
    });
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destinations"
        className="outline-none text-sm placeholder:text-gray-500 py-0.5 w-full"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-50 bg-white border w-full shadow rounded mt-1">
          {suggestions.map((item) => (
            <li
              key={item.place_id}
              onClick={() => handleSelect(item)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              <strong>{item.structured_formatting.main_text}</strong>{" "}
              <span className="text-gray-500">
                {item.structured_formatting.secondary_text}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationSearch;
