import { Route, Routes } from "react-router-dom";
import AerodromeComponent from "./components/Aerodrome/AerodromeComponent";
import LoginComponent from "./components/Login/LoginComponent";
import CadastroComponent from "./components/Cadastro/CadastroComponent";
import HomeComponent from "./components/Home/HomeComponent";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import './App.css';

import HeaderComponent from "./components/Header/HeaderComponent";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./components/Auth/Auth";
import MapComponent from "./components/Map/MapComponent";

mapboxgl.accessToken =
  'pk.eyJ1IjoicGVkcm9sdWl6bm9ndWVpcmEiLCJhIjoiY2t2c3ZnM2EyMDBjcDJ1bzZhN29mZWNxMSJ9.NXKHYyTqaV3KF2YXtOFUAA';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <HeaderComponent />
      <div className="map-content">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </>
  );
}

export default App;
