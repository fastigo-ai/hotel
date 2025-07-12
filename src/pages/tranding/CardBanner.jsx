// components/CardBanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Banner from "../../assets/logo/topBanner.png";
import Banner1 from "../../assets/logo/topBanner1.png";
import Daily from "../../assets/logo/daily.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "16px", // Adds space on mobile sides
        },
      },
    ],
  };

  const banners = [
    { to: "/carddetails/686fec855bda7cee043451e1", image: Banner },
    { to: "/carddetails/686feb9f5bda7cee043451cf", image: Banner1 },
    { to: "/hotel-card", image: Daily },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Mobile View with Slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {banners.map((item, index) => (
            <div key={index} className="px-2"> {/* Gap between slides */}
              <Link to={item.to}>
                <img
                  src={item.image}
                  alt={`banner-${index}`}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View with Gap */}
      <div className="hidden md:flex flex-row gap-4">
        {banners.map((item, index) => (
          <Link
            to={item.to}
            className="flex-1"
            key={index}
          >
            <img
              src={item.image}
              alt={`banner-${index}`}
              className="w-full h-80 object-cover rounded-xl"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBanner;
