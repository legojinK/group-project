import React from "react";
import Banner from "./component/Banner/Banner";
import "./HomePage.style.css";
import HomeAnimalSearch from "./component/HomeAnimalSearch/HomeAnimalSearch";
import Information from "./component/Information/Information";

const HomePage = () => {
  return (
    <div className="home-area">
      <Banner />
      <HomeAnimalSearch />
      <Information />
    </div>
  );
};

export default HomePage;
