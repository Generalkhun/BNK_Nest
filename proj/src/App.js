import React from "react";
import logo from "./logo.svg";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";

function App() {
  return (
    <Map center={[13.7133, 100.5010]} zoom={11}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}

export default App;
