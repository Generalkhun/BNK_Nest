import React, { useState } from "react";
import logo from "./logo.svg";
import { Map, Marker, Popup, TileLayer, Polygon } from "react-leaflet";
import "./App.css";
//import district shape data
import * as districtShape from "./data/district/districtNew.json";
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
      <Map center={[13.7133, 100.501]} zoom={11}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {districtShape.features.map((district) => {
          let thisPositionArray = district.geometry.coordinates[0];

          //Adjust latitude and longtitude position inside the array
          thisPositionArray.map((thisPositionPoint) => {
            if (thisPositionPoint[1] < thisPositionPoint[0]) {
              const sp = thisPositionPoint[1];
              thisPositionPoint[1] = thisPositionPoint[0];
              thisPositionPoint[0] = sp;
            }
          });
          return (
            <Polygon
              key={district.properties.OBJECTID}
              positions={thisPositionArray}
              onClick={() => {
                console.log(district.properties.dname);
                setDistrictSelected(district.properties.dname);
              }}
            />
          );
        })}
      </Map>
    </div>
  );
}

export default App;
