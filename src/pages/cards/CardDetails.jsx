import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyDetail } from "../../api/Api";
import BookingWidget from "../booking widget/BookingWidget";
import { Tv, Coffee, Snowflake, Brush, Wifi, ParkingCircle, Truck, User } from "lucide-react";

const CardDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getPropertyDetail(id);
        console.log("Property images:", data.images);
        setProperty(data);
      } catch (error) {
        console.error("Error loading property detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 pb-6 animate-pulse">
        {/* Shimmer Title */}
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        
        {/* Desktop Images Grid */}
        <div className="hidden md:grid grid-cols-4 gap-2 h-[500px] my-6">
          <div className="col-span-2 row-span-2 bg-gray-200 rounded-xl"></div>
          <div className="bg-gray-200 rounded-xl"></div>
          <div className="bg-gray-200 rounded-xl"></div>
          <div className="bg-gray-200 rounded-xl"></div>
          <div className="bg-gray-200 rounded-xl"></div>
        </div>

        {/* Mobile Images Scrollable */}
        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 my-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-80 h-60 bg-gray-200 rounded-xl flex-shrink-0"></div>
          ))}
        </div>

        {/* Location & Meta info */}
        <div className="py-4 space-y-2">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>

        {/* Main Content split */}
        <div className="flex flex-col md:flex-row md:gap-10 max-w-7xl justify-between mt-6">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-6">
            <div className="border border-gray-200 rounded-xl px-6 py-4 h-20 bg-gray-50"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-4 border-t pt-4">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
          </div>

          {/* Right Column / Widget */}
          <div className="w-full md:w-[350px] lg:w-[380px] mt-6 md:mt-0">
            <div className="border border-gray-200 rounded-xl p-6 h-96 bg-gray-50"></div>
          </div>
        </div>
      </div>
    );
  }
  if (!property) return <p className="px-4">Property not found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 pb-6">
      {/* Desktop Images */}
      <div className="hidden md:grid grid-cols-4 gap-2 h-[500px] my-6">
        <div className="col-span-2 row-span-2">
          <img
            src={property.images[0]}
            alt="Main"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {property.images.slice(1, 5).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`property-${i + 1}`}
            className="w-full h-full object-cover rounded-xl"
          />
        ))}
      </div>


      {/* Mobile Scrollable Images */}
      <div className="md:hidden flex gap-2 overflow-x-auto snap-x scroll-smooth pb-4 my-6">
        {property.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`property-${i}`}
            className="w-80 h-60 object-cover rounded-xl flex-shrink-0 snap-center"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row md:gap-10 max-w-7xl justify-between">
        {/* Left Content */}
        <div className="md:w-3/5 space-y-6 lg:pr-8">
          <div>
            <h1 className="text-3xl font-bold font-serif mb-2 text-gray-900 mt-2">Entire rental unit in {property.location}</h1>
            <p className="text-sm text-gray-600 font-medium mt-1">
              {property.guest} guest{property.guest > 1 ? "s" : ""} •{" "}
              {property.bedroom} bedroom{property.bedroom > 1 ? "s" : ""} •{" "}
              {property.bed} bed{property.bed > 1 ? "s" : ""} •{" "}
              {property.bathroom} bathroom{property.bathroom > 1 ? "s" : ""} •{" "}
              {property.allowedPets} pet{property.allowedPets > 1 ? "s" : ""} allowed
            </p>
          </div>

          {/* Rating and Badges */}
          <div className="border border-gray-200 rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-50/50 my-6 max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="bg-[#FFAA00] p-2 rounded-lg text-white">
                 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'currentColor'}}><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fillRule="evenodd"></path></svg>
              </div>
              <div>
                <p className="font-semibold text-base text-gray-900">Guest favorite</p>
                <p className="text-sm text-gray-600 font-medium">
                  One of the most loved homes, according to guests
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 md:border-l md:border-gray-200 md:pl-6 ml-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900 leading-none">{property.rating || "5"}</p>
                <p className="text-[10px] text-gray-900 mt-1 tracking-wider">★★★★★</p>
              </div>
              <div className="text-center border-l border-gray-200 pl-6">
                <p className="text-2xl font-bold text-gray-900 leading-none">128</p>
                <p className="text-xs text-gray-900 underline font-medium mt-1">Reviews</p>
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              <User size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Hosted by Plains Motor</p>
              <p className="text-gray-500 text-sm font-medium">Hospitality expert in Stettler</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6 pb-6 border-b border-gray-200 mt-6">
            <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">About this property</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              {[
                [<Tv size={22} className="stroke-[1.5]" />, "TV included"],
                [<Coffee size={22} className="stroke-[1.5]" />, "Breakfast included"],
                [<Snowflake size={22} className="stroke-[1.5]" />, "Air conditioning"],
                [<Brush size={22} className="stroke-[1.5]" />, "Housekeeping"],
                [<Wifi size={22} className="stroke-[1.5]" />, "Free WiFi"],
                [<ParkingCircle size={22} className="stroke-[1.5]" />, "Parking included"],
                [<Truck size={22} className="stroke-[1.5]" />, "Semi truck trailer parking available"],
              ].map(([icon, label], index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-gray-700 flex-shrink-0">
                    {icon}
                  </span>
                  <p className="font-medium text-gray-800 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="pt-2">
            <h2 className="text-2xl font-bold font-serif mb-4 text-gray-900">Description</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">{property.description}</p>
          </div>
        </div>

        {/* Booking Widget */}
        <BookingWidget property={property} />
      </div>
    </div>
  );
};

export default CardDetails;
