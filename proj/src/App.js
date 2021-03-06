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
  groupBy,
} from "./util";
import data from "./sample.json";
import Forum from "./Forum";
import Page2 from "./Page2";
import FirstSidebar from "./FirstSidebar.js";

// import firebase from "./Firebase.js";

import firebase from "firebase";

function App() {
  let [districtSelected, setDistrictSelected] = useState("");
  const [forum, setForumOn] = useState("false");

  // set page state
  const [page, setPage] = useState("sepDis");

  // set visible of sidebar state
  const [visible, setVisible] = React.useState(true);
  const [visibleP2, setVisibleP2] = React.useState(false);
  const [visibleForum, setVisibleForum] = React.useState(false);
  const [visibleLeaderBoard, setVisibleLeaderBoard] = React.useState(false);
  const [dataForum, setDataForum] = React.useState([]);
  const [dataComment, setDataComment] = React.useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyBfaSh4d__ZLy3RErl6Lkg8xk9Fh6G_Kno",
    authDomain: "bkknest-checkbkkworksdemo.firebaseapp.com",
    databaseURL: "https://bkknest-checkbkkworksdemo.firebaseio.com",
    projectId: "bkknest-checkbkkworksdemo",
    storageBucket: "bkknest-checkbkkworksdemo.appspot.com",
    messagingSenderId: "532480093014",
    appId: "1:532480093014:web:a59dc36ace75c81e4ec4f7",
    measurementId: "G-3BE57PYMP8",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const loadDataforum = () => {
    var dbCon = firebase.database().ref("/post");
    var dbCon2 = firebase.database().ref("/comment");
    dbCon.on("value", (c) => {
      // console.log(Object.values(c.val()).map((c) => c.message));
      setDataForum(
        Object.values(c.val()).map((c) => stringJsonToJsonObj(c.message))
      );
    });

    dbCon2.on("value", (c) => {
      // console.log(Object.values(c.val()).map((c) => c.message));
      setDataComment(
        Object.values(c.val()).map((c) => stringJsonToJsonObj(c.message))
      );
    });
  };
  return (
    <div style={{ fontFamily: "Anakotmai" }}>
      <Navbarmap
        page={page}
        setPage={setPage}
        visible={visible}
        setVisible={setVisible}
        setVisibleP2={setVisibleP2}
        setVisibleForum={setVisibleForum}
        setVisibleLeaderBoard={setVisibleLeaderBoard}
        loadDataforum={loadDataforum}
      />
      <FirstSidebar
        loadDataforum={loadDataforum}
        dataForum={dataForum}
        page={page}
        setPage={setPage}
        visible={visible}
        visibleP2={visibleP2}
        setVisible={setVisible}
        setVisibleP2={setVisibleP2}
        districtSelected={districtSelected}
        setDistrictSelected={setDistrictSelected}
        visibleForum={visibleForum}
        setVisibleForum={setVisibleForum}
        setVisibleLeaderBoard={setVisibleLeaderBoard}
        visibleLeaderBoard={visibleLeaderBoard}
        firebase={firebase}
        dataComment={dataComment}
      />
    </div>
  );
}

export default App;
