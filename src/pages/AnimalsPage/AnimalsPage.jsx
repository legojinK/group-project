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
      <div className="animals-page-title">입양대상 동물</div>
      <div className="animals-page-content">
        <div className="animals-page-instruction-box">
          <FontAwesomeIcon icon={faInfoCircle} className="animals-page-info-icon" />
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
