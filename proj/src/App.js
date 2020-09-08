import React, { useState } from "react";
import Navbarmap from "./Navbarmap.js";
import MapDistrict from "./MapDistrict.js";
import clsx from "clsx";
import "./App.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { stringJsonToJsonObj, dataToJSONObject } from "./util";
import data from "./sample.json";
import Forum from "./Forum";
import Page2 from "./Page2";
import Example from "./example";

function App() {
  let [districtSelected, setDistrictSelected] = useState("");
  const [forum, setForumOn] = useState("false");

  // set page state
  const [page, setPage] = useState("sepDis");

  return (
    <div>
      {/* <Page2 /> */}
      {/* <Forum /> */}
      {/* <button onClick={() => console.log(dataToJSONObject(data))}>
        Log data
      </button> */}
      <Navbarmap page={page} setPage={setPage} />
      <MapDistrict />
    </div>
  );
}

export default App;
