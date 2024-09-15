import React from "react";
import './ShelterCard.style.css';
import { faLocationDot, faPaw, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ShelterCard = ({ extraInfo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shelters/${extraInfo.careNm}`);
  };

  return (
    <div className="shelter-card" onClick={handleClick}>
      <div className="care-number">
        <FontAwesomeIcon icon={faPaw}/>
        <h1>{extraInfo.careNm}</h1>
      </div>
      <div className="care-add">
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{extraInfo.careAddr}</p>
      </div>
      <div className="care-tel">
        <FontAwesomeIcon icon={faPhone} />
        <p>{extraInfo.careTel}</p>
      </div>
    </div>
  );
};

export default ShelterCard;
