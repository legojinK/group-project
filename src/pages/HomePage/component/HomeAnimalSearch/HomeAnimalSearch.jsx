import React from "react";
import "./HomeAnimalSearch.style.css";
import AnimalCardSlider from "./AnimalCardSlider/AnimalCardSlider";
import { Container } from "react-bootstrap";

const HomeAnimalSearch = () => {
  return (
    <Container>
      <div className="home-animal-search">
        <div className="home-animal-search-description">
          <h1 className="home-animal-search-title">지금 구조된 동물들</h1>
          <div className="home-animal-search-content">
            전국의 보호센터에서 보호 중인 동물을 만나보세요.
          </div>
        </div>
        <AnimalCardSlider className="animal-card-slider" />
      </div>
    </Container>
  );
};

export default HomeAnimalSearch;
