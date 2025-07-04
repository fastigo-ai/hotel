// import React, { createContext, useState, useContext } from 'react';

// // Create the context
// const HotelContext = createContext();

// // Create a custom hook for easy consumption
// export const useHotel = () => {
//   return useContext(HotelContext);
// };

// // Create the Provider component
// export const HotelProvider = ({ children }) => {
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [bookingDetails, setBookingDetails] = useState({
//     checkIn: '',
//     checkOut: '',
//     guests: 1,
//   });

//   // Dummy hotel data for demonstration - UPDATED
//   const hotels = [
//     {
//       id: "highrise-heaven",
//       image: "https://placehold.co/400x200/FF0000/FFFFFF?text=Highrise+Heaven", // Placeholder image
//       name: "Highrise Heaven 12th floor", // Changed title to name
//       price: 69, // Extracted numerical price
//       location: "City Center", // Added dummy location
//       description: "A luxurious apartment on the 12th floor with stunning city views.", // Added dummy description
//       amenities: ["Free Wi-Fi", "Balcony", "City View"], // Added dummy amenities
//       rating: 4.99,
//       badge: "Guest favourite",
//     },
//     {
//       id: "tiny-home",
//       image: "https://placehold.co/400x200/00FF00/000000?text=Tiny+Home", // Placeholder image
//       name: "Tiny home in Mysore",
//       price: 89,
//       location: "Mysore",
//       description: "Cozy tiny home perfect for a serene getaway in Mysore.",
//       amenities: ["Garden", "Kitchenette", "Free Parking"],
//       rating: 4.91,
//       badge: "Guest favourite",
//     },
//     {
//       id: "villa-in-mysore",
//       image: "https://placehold.co/400x200/0000FF/FFFFFF?text=Villa+Mysore", // Placeholder image
//       name: "Villa in Mysore",
//       price: 100,
//       location: "Mysore",
//       description: "Spacious villa offering comfort and privacy in Mysore.",
//       amenities: ["Private Pool", "Garden", "BBQ Area"],
//       rating: 4.87,
//       badge: "Guest favourite",
//     },
//     {
//       id: "home-in-mysuru",
//       image: "https://placehold.co/400x200/FFFF00/000000?text=Home+Mysuru", // Placeholder image
//       name: "Home in Mysuru",
//       price: 79,
//       location: "Mysuru",
//       description: "Comfortable home in Mysuru, ideal for families.",
//       amenities: ["Family Friendly", "Near Attractions", "Free Wi-Fi"],
//       rating: 5.0,
//       badge: "Guest favourite",
//     },
//     {
//       id: "flat-in-mysore-1",
//       image: "https://placehold.co/400x200/FF00FF/FFFFFF?text=Flat+Mysore+1", // Placeholder image
//       name: "Flat in Mysore",
//       price: 199,
//       location: "Mysore",
//       description: "Modern flat in Mysore with all essential amenities.",
//       amenities: ["Air Conditioning", "Lift Access", "City View"],
//       rating: 4.78,
//       badge: "Guest favourite",
//     },
//     {
//       id: "flat-in-mysore-2",
//       image: "https://placehold.co/400x200/00FFFF/000000?text=Flat+Mysore+2", // Placeholder image
//       name: "Flat in Mysore",
//       price: 249,
//       location: "Mysore",
//       description: "Spacious and well-appointed flat in a prime location in Mysore.",
//       amenities: ["Balcony", "Parking", "Fully Equipped Kitchen"],
//       rating: 4.78,
//       badge: "Guest favourite",
//     },
//     {
//       id: "flat-in-mysore-3",
//       image: "https://placehold.co/400x200/800080/FFFFFF?text=Flat+Mysore+3", // Placeholder image
//       name: "Flat in Mysore",
//       price: 249,
//       location: "Mysore",
//       description: "Another fantastic flat in Mysore, perfect for extended stays.",
//       amenities: ["Washing Machine", "Work Desk", "Netflix"],
//       rating: 4.78,
//       badge: "Guest favourite",
//     },
//   ];

//   const value = {
//     selectedHotel,
//     setSelectedHotel,
//     bookingDetails,
//     setBookingDetails,
//     hotels, // Make hotels available through context
//   };


//    return (
//     <HotelContext.Provider value={value}>
//       {children}
//     </HotelContext.Provider>
//   );
// };