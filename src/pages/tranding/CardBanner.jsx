// components/CardBanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// Cloudinary CDN Image URLs (Optimized with f_auto, q_auto)
const Banner = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092889/hotel_assets/logo/topBanner.png";
const Banner1 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092890/hotel_assets/logo/topBanner1.png";
const Daily = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092881/hotel_assets/logo/daily.png";
const monthly = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092886/hotel_assets/logo/monthly.png";
const weekly = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto/v1781092892/hotel_assets/logo/weekly.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // default for desktop
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "16px",
        },
      },
    ],
  };

  const banners = [
    { to: "/carddetails/6883b81d2c40d0dbe02ecf97", image: Banner },
    { to: "/carddetails/6883c0662c40d0dbe02ed022", image: Banner1 },
    { to: "/hotel-card", image: Daily },
    { to: "/hotel-card", image: monthly },
    { to: "/hotel-card", image: weekly },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Slider {...settings}>
        {banners.map((item, index) => (
          <div key={index} className="px-2">
            <Link to={item.to}>
              <img
                src={item.image}
                alt={`banner-${index}`}
                className="w-full h-80 object-contain md:object-cover rounded-xl"
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardBanner;
