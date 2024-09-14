import React, { useEffect, useRef, useState } from "react";
import "./ListMap.style.css";

const MapList = ({ shelters }) => {
  const mapContainer = useRef(null); // Ref for the map container
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!shelters.length) return;

    // Ensure Kakao API is available
    if (window.kakao && window.kakao.maps) {
      const options = {
        center: new window.kakao.maps.LatLng(
          shelters[0]?.lat || 0,
          shelters[0]?.lng || 0
        ), // Default to first shelter's location
        level: 10,
      };

      // Create the map only once
      const kakaoMap = new window.kakao.maps.Map(mapContainer.current, options);
      setMap(kakaoMap);

      const markers = shelters.map((shelter) => {
        const markerPosition = new window.kakao.maps.LatLng(shelter.lat, shelter.lng);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(kakaoMap); // Display marker on the map
        return marker;
      });

      // Cleanup markers when component unmounts or shelters change
      return () => {
        markers.forEach((marker) => marker.setMap(null));
      };
    }
  }, [shelters]);

  return (
    <div className="map-list">
      <div
        ref={mapContainer}
        id="map"
        style={{ width: "100%", height: "400px" }} // Adjust width for full responsiveness
      ></div>
    </div>
  );
};

export default MapList;
