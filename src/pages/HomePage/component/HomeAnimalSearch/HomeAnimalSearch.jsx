import React from "react";
import "./HomeAnimalSearch.style.css";
import AnimalCardSlider from "./AnimalCardSlider/AnimalCardSlider";

const HomeAnimalSearch = () => {
  return (
    <div className="home-animal-search">
      <div className="gradient-box-left" />
      <div className="gradient-box-right" />
      <div className="home-animal-search-description">
        <div className="home-animal-search-title">지금 구조된 동물들</div>
        <div className="home-animal-search-content">
          전국의 보호센터에서 보호중인 동물을 만나보세요.
        </div>
      </div>
      <AnimalCardSlider className="animal-card-slider" />
    </div>
  );
};

export default HomeAnimalSearch;
