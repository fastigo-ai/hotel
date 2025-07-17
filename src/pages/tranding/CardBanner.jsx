// components/CardBanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Banner from "../../assets/logo/topBanner.png";
import Banner1 from "../../assets/logo/topBanner1.png";
import Daily from "../../assets/logo/daily.png";
import monthly from "../../assets/logo/monthly.png";
import weekly from "../../assets/logo/weekly.png";
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
    arrows: false,
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
    { to: "/carddetails/686fec855bda7cee043451e1", image: Banner },
    { to: "/carddetails/686feb9f5bda7cee043451cf", image: Banner1 },
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
