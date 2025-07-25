import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyDetail } from "../../api/Api";
import BookingWidget from "../booking widget/BookingWidget";

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

  if (loading) return <p className="px-4">Loading property details...</p>;
  if (!property) return <p className="px-4">Property not found.</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-1">{property.title}</h1>

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

      {/* Location and Info */}
      <div className="mx-auto py-4">
        <h3 className="text-xl font-bold mb-1">
          Entire rental unit in {property.location}
        </h3>
        <p className="text-gray-600">
          {property.guest} guest{property.guest > 1 ? "s" : ""} •{" "}
          {property.bedroom} bedroom{property.bedroom > 1 ? "s" : ""} •{" "}
          {property.bed} bed{property.bed > 1 ? "s" : ""} •{" "}
          {property.bathroom} bathroom{property.bathroom > 1 ? "s" : ""} •{" "}
          {property.allowedPets} pet{property.allowedPets > 1 ? "s" : ""} allowed
        </p>
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
        <div className="md:w-1/2 space-y-6">
          {/* Rating and Badges */}
          <div className="border rounded-xl px-6 py-4 flex items-center justify-between gap-4 max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="text-center leading-tight">
                <p className="font-semibold text-lg">Guest</p>
                <p className="font-semibold text-lg">favourite</p>
              </div>
              <p className="text-base text-gray-800 font-medium ml-4 hidden lg:block">
                One of the most loved homes, according to guests
              </p>
            </div>

            <div className="flex items-center gap-4 border-l pl-4">
              <div className="text-right">
                <p className="text-xl font-semibold">{property.rating}</p>
                <p className="text-sm text-yellow-500">★★★★★</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">128</p>
                <p className="text-sm text-gray-500">Reviews</p>
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div className="flex items-center gap-4">
            <div>
              <p className="font-semibold">Hosted by Plains Motor</p>
              {/* <p className="text-gray-500 text-sm">Superhost • 1 year hosting</p> */}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 border-t pt-4">
            <h1 className="text-xl font-bold mb-1">About this property</h1>
            {[
              ["☕", "Breakfast included"],
              ["❄️", "Air conditioning"],
              ["✔️", "Housekeeping"],
              ["🐾", "Pet friendly"],
              ["📶", "Free WiFi"],
              ["🅿️", "Parking included"],
            ].map(([icon, label], index) => (
              <div key={index} className="flex items-center gap-4">
                <span role="img" className="text-xl">
                  {icon}
                </span>
                <p className="font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
          </div>
        </div>

        {/* Booking Widget */}
        <BookingWidget property={property} />
      </div>
    </div>
  );
};

export default CardDetails;
