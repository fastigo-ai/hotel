import React from "react";
import { Link } from "react-router-dom";
import { User, Bed, Wifi, ArrowRight } from "lucide-react";

export default function RoomCard({ room }) {
  // Using fallback values if API doesn't have exactly what we want to display
  const title = room.title || `${room.roomType || 'Standard'} Room`;
  const price = room.price || "98";
  
  // Handle both string 'image' from mock and array 'images' from API
  const image = room.images && room.images.length > 0 
    ? room.images[0] 
    : (room.image || "https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&w=2000&auto=format&fit=crop");
    
  // Handle both string mock values and numerical API values
  const guests = room.guests || (room.guest ? `${room.guest} Guests` : "2 Guests");
  const beds = room.beds || (room.bed ? `${room.bed} ${room.bed > 1 ? 'Beds' : 'Bed'}` : "1 Queen Bed");
  
  const hasWifi = room.hasWifi !== false; 

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="relative h-56 w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {!room.inStock && room.inStock !== undefined && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold uppercase tracking-wider">
              Unavailable
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6 flex-grow">
          <h3 className="font-serif font-bold text-xl text-gray-900 pr-4">{title}</h3>
          <div className="text-right shrink-0">
            <span className="text-[#4BA9A2] font-bold text-2xl"> ${price} <span className="text-[#e08c3c]"></span></span>
            <span className="text-xs text-gray-500 block">/night</span>
          </div>
        </div>

        <div className="flex flex-col space-y-3.5 mb-8 text-gray-800 text-sm font-medium shrink-0">
          <div className="flex items-center gap-4">
            <User size={18} className="text-gray-800" strokeWidth={1.5} />
            <span>{guests}</span>
          </div>
          <div className="flex items-center gap-4">
            <Bed size={18} className="text-gray-800" strokeWidth={1.5} />
            <span>{beds}</span>
          </div>
          {hasWifi && (
            <div className="flex items-center gap-4">
              <Wifi size={18} className="text-gray-800" strokeWidth={1.5} />
              <span>Free WiFi</span>
            </div>
          )}
        </div>

        <div className="mt-auto shrink-0 border-t border-gray-100 pt-5">
          {room.inStock !== false ? (
            <Link 
              to={room._id ? `/carddetails/${room._id}` : "#"} 
              className="flex justify-center items-center gap-2 w-full bg-[#F39C49] hover:bg-[#e08c3c] text-black px-4 py-2 rounded font-bold text-xs transition-colors uppercase tracking-widest"
            >
              <span>View Details</span>
              <ArrowRight size={16} />
            </Link>
          ) : (
             <span className="flex justify-between items-center w-full text-gray-400 font-bold text-xs uppercase tracking-widest cursor-not-allowed">
              <span>Out of Stock</span>
             </span>
          )}
        </div>
      </div>
    </div>
  );
}
