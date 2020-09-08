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
import FirstSidebar from "./FirstSidebar.js";

function App() {
  let [districtSelected, setDistrictSelected] = useState("");
  const [forum, setForumOn] = useState("false");

  // set page state
  const [page, setPage] = useState("sepDis");

  // set visible of sidebar state
  const [visible, setVisible] = React.useState(true);

  return (
    <div>
      {/* <Page2 /> */}
      {/* <Forum /> */}
      {/* <button onClick={() => console.log(dataToJSONObject(data))}>
        Log data
      </button> */}
      <Navbarmap page={page} setPage={setPage} visible = {visible} setVisible = {setVisible} />
      <FirstSidebar page = {page} setPage={setPage} visible = {visible} setVisible = {setVisible}/>
    </div>
  );
}

export default App;
