import React, { useState } from "react";
import MapDistrict from "./MapDistrict.js";
import clsx from "clsx";
import "./App.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { stringJsonToJsonObj, dataToJSONObject } from "./util";
import data from "./sample.json";
import Forum from "./Forum";
function App() {
  let [districtSelected, setDistrictSelected] = useState("");
  const [forum, setForumOn] = useState("false");

  return (
    <div>
      <Forum />
      <button onClick={() => console.log(dataToJSONObject(data))}>
        Log data
      </button>
      {/* <MapDistrict /> */}
    </div>
  );
}

export default App;
