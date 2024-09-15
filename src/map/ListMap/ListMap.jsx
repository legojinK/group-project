import React, { useEffect, useState } from "react";
import "./ListMap.style.css";

const { kakao } = window;

const MapList = ({ shelters }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!shelters.length) return;

    const container = document.getElementById("map");
    if (!container) {
      console.error("Map container not found");
      return;
    }

    if (!window.kakao || !window.kakao.maps) {
      console.error("Kakao Maps API is not loaded");
      return;
    }

    const options = {
      center: new window.kakao.maps.LatLng(
        shelters[0]?.lat || 0,
        shelters[0]?.lng || 0
      ),
      level: 10,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    setMap(kakaoMap);

    const markers = shelters.map((shelter) => {
      const markerPosition = new kakao.maps.LatLng(shelter.lat, shelter.lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(kakaoMap);
      return marker;
    });

    return () => {
      markers.forEach((marker) => marker.setMap(null));
    };
  }, [shelters]);

  return (
    <div className="map-list">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MapList;
