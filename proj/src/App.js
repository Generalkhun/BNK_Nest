import React, { useState } from "react";
import Navbarmap from "./Navbarmap.js";
import MapDistrict from "./MapDistrict.js";
import clsx from "clsx";
import "./App.css";
import "./index.css";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import {
  stringJsonToJsonObj,
  dataToJSONObject,
  stringToInterger,
  range,
} from "./util";
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
  const [visibleP2, setVisibleP2] = React.useState(false);
  const [visibleForum,setVisibleForum] = React.useState(false);
  const [visibleLeaderBoard,setVisibleLeaderBoard] = React.useState(false)

  return (
    <div style={{ fontFamily: "Anakotmai" }}>

      <Navbarmap
        page={page}
        setPage={setPage}
        visible={visible}
        setVisible={setVisible}
        setVisibleP2={setVisibleP2}
        setVisibleForum = {setVisibleForum}
        setVisibleLeaderBoard = {setVisibleLeaderBoard}
      />
      <FirstSidebar
        page={page}
        setPage={setPage}
        visible={visible}
        visibleP2={visibleP2}
        setVisible={setVisible}
        setVisibleP2={setVisibleP2}
        districtSelected={districtSelected}
        setDistrictSelected={setDistrictSelected}
        visibleForum = {visibleForum}
        setVisibleForum = {setVisibleForum}
        setVisibleLeaderBoard = {setVisibleLeaderBoard}
        visibleLeaderBoard = {visibleLeaderBoard}
      />
    </div>
  );
}

export default App;
