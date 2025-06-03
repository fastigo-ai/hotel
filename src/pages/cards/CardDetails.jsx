import React from "react";
import { useParams } from "react-router-dom";
import Image1 from "../../assets/card Image/no1.jpg";
import Image2 from "../../assets/card Image/no2.jpg";
import Image3 from "../../assets/card Image/no3.jpg";
import Image4 from "../../assets/card Image/no4.jpg";
import Image5 from "../../assets/card Image/no5.jpg";
import Image6 from "../../assets/card Image/no6.jpg";
import BookingWidget from "../booking widget/BookingWidget";

const CardDetails = () => {
  const { id } = useParams();

  const listings = {
    "highrise-heaven": {
      title: "Highrise Heaven 12th floor With Garden Patio",
      location: "Gurugram, India",
      guests: 2,
      bedroom: 1,
      bed: 1,
      bathroom: 1,
      rating: 4.99,
      reviews: 79,
      host: "Sumit",
      description:
        "Welcome to this another luxurious property by Tulip Homes situated on 12 floor...",
      images: [Image1, Image2, Image3, Image4,Image5,Image6],
      price: 6147,
    },
  };

  const property = listings[id];

  if (!property) return <div className="p-4">Property not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Title + Location */}
      <h1 className="text-2xl font-bold mb-1">{property.title}</h1>

      {/* Images Section */}
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
      <div className="mx-auto py-4">
        <h3 className="text-xl font-bold mb-1">
          Entire rental unit in {property.location}
        </h3>
        <p className="text-gray-600 ">
          {property.guests} guests • {property.bedroom} bedroom • {property.bed}{" "}
          bed • {property.bathroom} bathroom
        </p>
      </div>

      {/* Mobile Scrollable Image Section */}
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
          {/* Rating & Tags */}
          <div className="border rounded-xl px-6 py-4 flex items-center justify-between gap-4 max-w-4xl">
            {/* Badge Info */}
            <div className="flex items-center gap-4">
              
              <div className="text-center leading-tight">
                <p className="font-semibold text-lg">Guest</p>
                <p className="font-semibold text-lg">favourite</p>
              </div>

              <p className="text-base text-gray-800 font-medium ml-4 hidden lg:block">
  One of the most loved homes, according to guests
</p>

            </div>

            {/* Rating Info */}
            <div className="flex items-center gap-4 border-l pl-4">
              <div className="text-right">
                <p className="text-xl font-semibold">
                  {property.rating.toFixed(2)}
                </p>
                <p className="text-sm text-yellow-500">★★★★★</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold">{property.reviews}</p>
                <p className="text-sm text-gray-500">Reviews</p>
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div className="flex items-center gap-4">
            <img
              src="https://via.placeholder.com/48"
              alt="Host"
              className="rounded-full w-12 h-12"
            />
            <div>
              <p className="font-semibold">Hosted by {property.host}</p>
              <p className="text-gray-500 text-sm">
                Superhost • 1 year hosting
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/48"
                alt="Host"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-semibold">Top 10% of homes</p>
                <p className="text-gray-500 text-sm">
                  This home is highly ranked based on ratings, reviews and
                  reliability.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/48"
                alt="Host"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-semibold">
                  30-min drive to Sultanpur National Park
                </p>
                <p className="text-gray-500 text-sm">
                  This home is near the national park.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/48"
                alt="Host"
                className="rounded-full w-12 h-12"
              />
              <div>
                <p className="font-semibold">Top 10% of homes</p>
                <p className="text-gray-500 text-sm">
                  Get a full refund if you change your mind.
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {property.description}
            </p>
          </div>
        </div>

        {/* Booking Card */}
        
          <BookingWidget/>
       
      </div>
    </div>
  );
};

export default CardDetails;
