import React from "react";
import logo from "./logo.svg";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./App.css";
import Page2 from "./Page2";
import data from "./sample.json";

function App() {
  return (
    <div>
      <Page2 />
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        CheckData
      </button>
    </div>
  );
}

export default App;
