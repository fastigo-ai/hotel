import React from "react";
import Trending from "../../pages/tranding/Trending";
import Card from "../../pages/cards/Card";
import Search from "../../pages/searching/Search";
import Offers from "../../pages/offers/Offer";
import CardBanner from "../../pages/tranding/CardBanner";
import ExpediaCard from "../../pages/tranding/FutherBanner";
import MembershipBanner from "../../pages/tranding/MembershipBanner";


const Home = () => {
  return (
    <>
      <Search />
      <MembershipBanner/>
      <CardBanner/>
      <Trending />
      
      <Card />

      <Offers />
      <ExpediaCard/>

    </>
  );
};

export default Home;
