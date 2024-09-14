import React from "react";
import { Link } from "react-router-dom";
import "./ShelterMap.style.css";
import MapList from "@/map/ListMap/ListMap";
import { useShelterList } from "@/hooks/useShelterList";

const ShelterMap = () => {
  const { data, isLoading, isError, error } = useShelterList();

  const list = data?.items?.item || [];

  const shelters = list.map((shelter) => ({
    careNm: shelter.careNm,
    careAddr: shelter.careAddr,
    lat: shelter.latitude,  
    lng: shelter.longitude,  
  }));

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  if (list.length === 0) return <p>No shelters found.</p>;

  return (
    <div className="homepage">
      <h1>동물보호소</h1>

      <MapList shelters={shelters} />

      <div className="scrollable-box">
        <ul className="shelter-list">
          {list.map((shelter, index) => (
            <li key={index} className="shelter-item">
              <h2>{shelter.careNm}</h2>
              <p>{shelter.careAddr}</p>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/shelters">
        <button className="more-button">보호소 더보기...</button>
      </Link>
    </div>
  );
};

export default ShelterMap;
