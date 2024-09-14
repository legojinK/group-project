import React from "react";
import { Link } from "react-router-dom";
import "./ShelterMap.style.css";
import MapList from "@/map/ListMap/ListMap";
import { useShelterList } from "@/hooks/useShelterList";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const ShelterMap = () => {
  const { data, isLoading, isError, error } = useShelterList();

  const list = data?.items?.item || [];

  const shelters = list.map((shelter) => ({
    careNm: shelter.careNm,
    careAddr: shelter.careAddr,
    lat: shelter.lat,
    lng: shelter.lng,
  }));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  if (list.length === 0) return <p>No shelters found.</p>;

  return (
    <div>
    <div className="home-animal-search">
      <div className="home-animal-search-description">
        <div className="home-animal-search-title">동물보호소</div>
        <div className="home-animal-search-content">
          전국의 동물보호소 정보를 확인해 보세요.
        </div>
      </div>
      </div>
      <div className="shelter-map">
      <MapList shelters={shelters} />
      <div className="">
        <div className="scrollable-box">
          <ul className="shelter-list">
            {list.map((shelter, index) => (
              <li key={index} className="shelter-item">
                <div className="name-address">
                <h2>{shelter.careNm}</h2>
                <p>{shelter.careAddr}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/shelters">
          <button className="more-button">보호소 더보기  ➜</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ShelterMap;
