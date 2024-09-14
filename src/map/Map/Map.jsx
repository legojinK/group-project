import React, { useEffect, useState } from "react";
import "./Map.style.css"

const { kakao } = window;

const MapTest = ({ lat, lng }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {

    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 1,
    };

    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(kakaoMap);
  }, [lat, lng]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
      }}
    >
      <div id="map" style={{ width: "99%", height: "400px" }}></div>
    </div>
  );
};

export default MapTest;
