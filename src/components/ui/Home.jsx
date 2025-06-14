import React from "react";
import Trending from "../../pages/tranding/Trending";
import Card from "../../pages/cards/Card";
import Search from "../../pages/searching/Search";
import Offers from "../../pages/offers/Offer";

const Home = () => {
  return (
    <>
      <Search />
      <Trending />
      <Card />

      <Offers />

      <Card />
      <hr />
      <Card />
    </>
  );
};

export default Home;
