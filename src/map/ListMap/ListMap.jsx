import React, { useEffect, useState } from "react";
import "./ListMap.style.css";

const { kakao } = window;

const MapList = ({ shelters, hoveredShelterId }) => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!shelters.length) return;

    const container = document.getElementById("map");
    if (!container) {
      console.error("Map container not found");
      return;
    }

    const options = {
      center: new kakao.maps.LatLng(shelters[0]?.lat || 0, shelters[0]?.lng || 0),
      level: 10,
    };

    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    const createdMarkers = shelters.map(shelter => {
      const markerPosition = new kakao.maps.LatLng(shelter.lat, shelter.lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      const infowindow = new kakao.maps.InfoWindow({
        position: markerPosition,
        content: `
          <div class="info-window">
            <h3 class="info-window-title">${shelter.careNm}</h3>
            <p class="info-window-address">${shelter.careAddr}</p>
          </div>
        `,
      });
      

      kakao.maps.event.addListener(marker, 'mouseover', () => {
        infowindow.open(kakaoMap, marker);
      });

      kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.close();
      });

      marker.setMap(kakaoMap);
      return { marker, infowindow };
    });

    setMarkers(createdMarkers);

    return () => {
      createdMarkers.forEach(({ marker }) => marker.setMap(null));
    };

  }, [shelters]);

  useEffect(() => {
    if (!hoveredShelterId || !markers.length) return;

    const matchingShelter = shelters.find(shelter => shelter.id === hoveredShelterId);
    const matchingMarker = markers[shelters.findIndex(shelter => shelter.id === hoveredShelterId)];

    if (matchingShelter && matchingMarker) {
      matchingMarker.infowindow.open(map, matchingMarker.marker);
    }

    return () => {
      matchingMarker?.infowindow.close();
    };
  }, [hoveredShelterId, markers, map, shelters]);

  return (
    <div className="map-list">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MapList;
