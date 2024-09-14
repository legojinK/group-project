import React from "react";
import AnimalFilter from "./component/AnimalFilter/AnimalFilter";
import "./AnimalsPage.style.css";
import AnimalCardWrapper from "./component/AnimalCardWrapper/AnimalCardWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./component/pagination/Pagination";

const AnimalsPage = () => {
  return (
    <div className="animals-page">
      <h6 className="page-nav">
        구조동물 &nbsp; &gt; &nbsp; <strong>보호 중인 동물</strong>
      </h6>
      <div className="animals-page-title">
        <span>보호 중인 동물</span>
      </div>
      <div className="animals-page-content">
        <div className="animals-page-instruction-box">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="animals-page-info-icon"
          />
          동물 입양상담은 동물보호센터로 문의하십시오.
        </div>
        <AnimalFilter />
        <AnimalCardWrapper />
        <Pagination />
      </div>
    </div>
  );
};

export default AnimalsPage;
