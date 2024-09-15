import React from "react";
import AnimalFilter from "./component/AnimalFilter/AnimalFilter";
import "./AnimalsPage.style.css";
import AnimalCardWrapper from "./component/AnimalCardWrapper/AnimalCardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./component/pagination/Pagination";
import { Container } from "react-bootstrap";

const AnimalsPage = () => {
  return (
    <div className="animals-page">
      <h6 className="page-nav">
        구조동물 &nbsp; &gt; &nbsp; <strong>보호 중인 동물</strong>
      </h6>
      <div className="animals-img-box">
        <img
          className="img"
          src="https://www.animal.go.kr/front/images/pssrpAwards10/10_warning_5.jpg"
        />
      </div>

      <div className="animals-page-content">
        <Container>
          <h1 className="content-title">동물 상세 검색</h1>
          <AnimalFilter />
          <div className="animals-page-instruction-box">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="animals-page-info-icon"
            />
            동물 입양상담은 동물보호센터로 문의하십시오.
          </div>
        </Container>
        <AnimalCardWrapper />
        <Pagination />
      </div>
    </div>
  );
};

export default AnimalsPage;
