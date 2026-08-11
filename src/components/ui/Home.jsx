import React from "react";
import HeroSection from "../home/HeroSection";
import FeaturesBar from "../home/FeaturesBar";
import WelcomeSection from "../home/WelcomeSection";
import RoomsSection from "../home/RoomsSection";
import PromoBanner from "../home/PromoBanner";
import WhyChooseUs from "../home/WhyChooseUs";
import CTASection from "../home/CTASection";

const Home = () => {
  return (
    <div className="bg-[#ACA694]">
      <HeroSection />
      <FeaturesBar />
      <WelcomeSection />
      <RoomsSection />
      <PromoBanner />
      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default Home;
