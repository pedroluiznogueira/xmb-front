import React from "react";
import { Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AerodromeComponent from "./components/Aerodrome/AerodromeComponent";
import LoginComponent from "./components/Login/LoginComponent";
import CadastroComponent from "./components/Cadastro/CadastroComponent";
import HomeComponent from "./components/Home/HomeComponent";
import { Navigate, Outlet } from "react-router-dom";
import { isAuth } from "./components/Auth/Auth";
import MapComponent from "./components/Map/MapComponent";
import HeaderComponent from "./components/Header/HeaderComponent";

ReactDOM.render(
  <> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/aerodromes" element={<AerodromeComponent />} />
          <Route path="/map" element={<App />} />
          <Route path="/mapview" element={<MapComponent />} />
        </Route>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/cadastro" element={<CadastroComponent />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

export function PrivateOutlet() {
  const auth = isAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
