import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPropertyCards } from "../../api/Api";
import RoomCard from "./RoomCard";

export default function RoomsSection() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getPropertyCards();
        // Fallback placeholder data if API is empty or fails, matching design
        if (!data || data.length === 0) {
          setRooms([
            { _id: '1', title: 'Standard Room', price: '98', guests: '2 Guests', beds: '1 Queen Bed', image: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2000&auto=format&fit=crop', inStock: true },
            { _id: '2', title: 'Double Room', price: '108', guests: '4 Guests', beds: '2 Queen Beds', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop', inStock: true },
            { _id: '3', title: 'Deluxe Room', price: '128', guests: '2 Guests', beds: '1 King Bed', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop', inStock: true },
            { _id: '4', title: 'Kitchen Suite', price: '148', guests: '4 Guests', beds: 'Full Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2000&auto=format&fit=crop', inStock: true }
          ]);
        } else {
          setRooms(data.slice(0, 4)); // Only show top 4 rooms on homepage
        }
      } catch (error) {
        console.error("Failed to fetch property cards:", error);
        // Fallback data
        setRooms([
            { _id: '1', title: 'Standard Room', price: '98', guests: '2 Guests', beds: '1 Queen Bed', image: 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2000&auto=format&fit=crop', inStock: true },
            { _id: '2', title: 'Double Room', price: '108', guests: '4 Guests', beds: '2 Queen Beds', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop', inStock: true },
            { _id: '3', title: 'Deluxe Room', price: '128', guests: '2 Guests', beds: '1 King Bed', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop', inStock: true },
            { _id: '4', title: 'Kitchen Suite', price: '148', guests: '4 Guests', beds: 'Full Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2000&auto=format&fit=crop', inStock: true }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  return (
    <section className="bg-transparent py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="uppercase tracking-widest text-xs font-bold text-gray-500 mb-2">Our Rooms</p>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
              Comfortable Rooms. <br />
              <span className="text-[#4BA9A2]">Everything You Need.</span>
            </h2>
          </div>
          
          <Link to="/hotel-card" className="bg-[#F39C49] hover:bg-[#e08c3c] text-black font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide text-sm whitespace-nowrap">
            View All Rooms
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white h-96 rounded-xl animate-pulse shadow-sm border border-gray-100 flex flex-col">
                 <div className="w-full h-48 bg-gray-200 rounded-t-xl"></div>
                 <div className="p-5 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <RoomCard key={room._id || room.title} room={room} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
