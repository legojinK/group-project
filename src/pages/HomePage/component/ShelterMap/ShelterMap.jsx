import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShelterMap.style.css";
import MapList from "@/map/ListMap/ListMap";
import { useShelterList } from "@/hooks/useShelterList";
import { Container } from "react-bootstrap";

const ShelterMap = () => {
  const { data } = useShelterList();
  const [hoveredShelterId, setHoveredShelterId] = useState(null);

  const list = data?.items?.item || [];

  const shelters = list.map((shelter) => ({
    id: `shelter-${shelter.careNm.replace(/\s+/g, "-")}`,
    careNm: shelter.careNm,
    careAddr: shelter.careAddr,
    lat: shelter.lat,
    lng: shelter.lng,
  }));

  return (
    <Container className="home-shelter-box">
      <div className="home-shelter-search">
        <div className="home-animal-search-description">
          <div className="home-shelter-title">동물보호소</div>
          <div className="home-animal-search-content">
            전국의 동물보호소 정보를 확인해 보세요.
          </div>
        </div>
      </div>
      <div className="shelter-map">
        <MapList shelters={shelters} hoveredShelterId={hoveredShelterId} />
        <div>
          <div className="scrollable-box">
            <ul className="shelter-list">
              {list.map((shelter) => (
                <li
                  key={shelter.careNm}
                  id={`shelter-${shelter.careNm.replace(/\s+/g, "-")}`}
                  className={`shelter-item ${hoveredShelterId === `shelter-${shelter.careNm.replace(/\s+/g, "-")}` ? "highlight" : ""}`}
                  onMouseEnter={() => setHoveredShelterId(`shelter-${shelter.careNm.replace(/\s+/g, "-")}`)}
                  onMouseLeave={() => setHoveredShelterId(null)}
                >
                  <Link to={`/shelters/${encodeURIComponent(shelter.careNm)}`}>
                    <div className="name-address">
                      <h2>{shelter.careNm}</h2>
                      <p>{shelter.careAddr}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/shelters">
            <button className="more-button">보호소 더보기 ➜</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ShelterMap;
