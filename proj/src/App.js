import React, { useState } from "react";
import Navbarmap from "./Navbarmap.js";
import MapDistrict from "./MapDistrict.js";
import clsx from "clsx";
import "./App.css";
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

  // const sum10 = range(1).map( c => dataObject.reduce(
  //   (sum, i) => sum + stringToInterger(i[`f{i+1}_sum`]),
  //   0 ))

  return (
    <div>
      {/* <Page2 /> */}
      {/* <Forum /> */}
      <Navbarmap
        page={page}
        setPage={setPage}
        visible={visible}
        setVisible={setVisible}
      />
      <FirstSidebar
        page={page}
        setPage={setPage}
        visible={visible}
        setVisible={setVisible}
        districtSelected={districtSelected}
        setDistrictSelected={setDistrictSelected}
      />
    </div>
  );
}

export default App;
