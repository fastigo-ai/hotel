import React, { createContext, useContext, useState, useEffect } from "react";

const LocationContext = createContext();

export const useLocationContext = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    title: "Select Your Location",
    description: "Your Location Details",
    address_components: [],
  });

  const updateLocation = (newLocation) => {
    setLocation(newLocation);
    sessionStorage.setItem("location", JSON.stringify(newLocation));
  };

  useEffect(() => {
    const savedLocation = sessionStorage.getItem("location");
    if (savedLocation) {
      setLocation(JSON.parse(savedLocation));
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location, updateLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
