import React, { useEffect, useState } from "react";

const { kakao } = window;

const MapList = ({ shelters }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!shelters.length) return;

    // Ensure Kakao Maps API is loaded
    if (!kakao || !kakao.maps) {
      console.error("Kakao Maps API is not loaded.");
      return;
    }

    kakao.maps.load(() => {
      const container = document.getElementById("map");
      if (!container) {
        console.error("Map container not found");
        return;
      }

      // Default to the first shelter's location if available
      const defaultLat = shelters[0]?.lat || 0;
      const defaultLng = shelters[0]?.lng || 0;

      const options = {
        center: new kakao.maps.LatLng(defaultLat, defaultLng),
        level: 10,
      };

      const kakaoMap = new kakao.maps.Map(container, options);
      setMap(kakaoMap);

      // Add markers to the map
      shelters.forEach(shelter => {
        const markerPosition = new kakao.maps.LatLng(shelter.lat, shelter.lng);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(kakaoMap);
      });
    });

  }, [shelters]);

  return (
    <div className="map-list">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MapList;
