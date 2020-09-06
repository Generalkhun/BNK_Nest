import React, { useState } from "react";
import MapDistrict from "./MapDistrict.js";
//import logo from "./logo.svg";
//import { Map, Marker, Popup, TileLayer, Polygon } from "react-leaflet";
import "./App.css";
//import district shape data
//import * as districtShape from "./data/district/districtNew.json";
// import { Polygon } from "leaflet";
import data from "./sample.json";
function App() {
  //console.log(districtShape.features[0].geometry.coordinates[0])
  let [districtSelected, setDistrictSelected] = useState("");

  const stringJsonToJsonObj = (s) => {
    var parse;
    try {
      parse = JSON.parse(s);
    } catch (e) {
      return null;
    }

    return parse;
  };

  return (
    <div>
      <button
        onClick={() =>
          console.log(Object.values(data).map((s) => stringJsonToJsonObj(s)))
        }
      >
        Log data
      </button>
      <MapDistrict />
    </div>
  );
}

export default App;
