import React from "react";
import Banner from "./component/Banner/Banner";
import "./HomePage.style.css";
import HomeAnimalSearch from "./component/HomeAnimalSearch/HomeAnimalSearch";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home-area">
      <div className="home-img-area">
        <div className="home-img-box">
          <img
            className="home-img"
            src="https://www.animal.go.kr/front/images/contents/headline_img3.png"
          />
        </div>
        <div className="home-content-area">
          <div className="home-content-box">
            <h1>동물을 입양한 당신이 자랑스럽습니다!</h1>
            <p>
              개나 고양이를 키우고 싶다면 유기동물 보호시설에서 보호하고 있는
              유기동물을 입양하는 게 어떨까요? 원하는 동물을 새 식구로 맞이하는
              것은 물론 한 생명을 구했다는 자부심으로 가슴이 뿌듯해질 것입니다.
            </p>
          </div>
        </div>
      </div>
      <div className="div-empty"></div>
      <HomeAnimalSearch />
      <Banner />
    </div>
  );
};

export default HomePage;
