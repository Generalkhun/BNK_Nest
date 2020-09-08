import React, { useState } from "react";
import logo from "./logo.svg";
import { Map, TileLayer, Polygon } from "react-leaflet";
import "./App.css";

import Choropleth from "react-leaflet-choropleth";

//Choropleth displayer side bar
import ChoroplethDisplayer from "./ChoroplethDisplayer.js";

//import district shape data
import * as districtShape from "./data/district/districtNew.json";
import * as districtShapeGEOJSON from "./data/district/districtNew.geojson";

//import district expense data to display fill Visualization
import * as districtExpenseData from "./sample.json";

import {
  dataToJSONObject,
  range,
  stringToInterger,
  category,
  fieldValue,
  addValutToDistrictShape,
} from "./util";
const colors = [
  "#000000",
  "#33b2df",
  "#546E7A",
  "#d4526e",
  "#13d8aa",
  "#A5978B",
  "#2b908f",
  "#f9a3a4",
  "#90ee7e",
  "#f48024",
  "#69d2e7",
];
const districhShapeWithValue = addValutToDistrictShape(districtShape);
function MapDistrict({ filter }) {
  console.log(console.log(districhShapeWithValue));
  let [districtSelected, setDistrictSelected] = useState("");
  let [mouseOnDistrict, setmouseOnDistrict] = useState("");

  // style of choropleth
  const style = {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.6,
  };

  return (
    <div>
      <Map
        center={[13.7133, 100.501]}
        zoom={11}
        style={{ width: "100%", height: "90vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Choropleth
          data={{
            type: "FeatureCollection",
            features: districhShapeWithValue.default.features,
          }}
          identity={(feature) => feature.properties.OBJECTID}
          valueProperty={(feature) => feature.properties[`f${filter}_sum_int`]}
          visible={(feature) => true}
          scale={[colors[filter], "#FFFFFF"]}
          steps={10}
          mode="e"
          style={style}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(feature.properties.dname);
            layer.on("mouseover", function (e) {
              this.openPopup();
            });
            layer.on("mouseout", function (e) {
              this.closePopup();
            });
            layer.on("click", (e) =>
              console.log(setmouseOnDistrict(e.target.feature.properties.dname))
            );
          }}
          //ref={(el) => (this.Choropleth = el.leafletElement)}
        />
      </Map>
    </div>
  );
}

export default MapDistrict;
