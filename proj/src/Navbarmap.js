import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderExampleImage from "./HeaderProfile.js";
import { Header, Image } from "semantic-ui-react";

import "./index.css";
const HeaderExampleImageNav = () => (
  <div style={{ paddingLeft: 600 }}>
    <Header color="grey" as="h4">
      <Image
        size="tiny"
        circular
        src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
      />{" "}
      กรุงเทพ ในฝัน
    </Header>
  </div>
);
function Navbarmap({
  page,
  setPage,
  setVisible,
  setVisibleP2,
  setVisibleForum,
  setVisibleLeaderBoard,
  loadDataforum,
}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://uploads-ssl.webflow.com/5f437737793e6a6a50d233b7/5f468192d52b17537601587e_118248969_104887071338214_2379757116765787403_o-p-500.jpeg"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />
        เช็คงานกทม. 63'
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link
          href="#sepDis"
          onClick={() => {
            setVisibleP2(false);
            setPage("sepDis");
            setVisible(false);

            if (page != null) {
              setTimeout(function () {
                setVisible(true);
              }, 300);
            }
          }}
        >
          งบที่แยกตามเขต
        </Nav.Link>
        <Nav.Link
          href="#unSepDis"
          onClick={() => {
            setVisibleP2(false);
            setPage("unSepDis");
            setVisible(false);
            if (page != null) {
              setTimeout(function () {
                setVisible(true);
              }, 250);
            }
          }}
        >
          งบที่ไม่แยกตามเขต
        </Nav.Link>
        <Nav.Link
          href="#forum"
          onClick={() => {
            setPage("forum");
            //setVisible(false);
            loadDataforum();
            setVisibleForum((prev) => !prev);
          }}
        >
          กระทู้สนทนา
        </Nav.Link>
        <Nav.Link
          href="#leaderboard"
          onClick={() => {
            setPage("leaderboard");
            //setVisible(false);
            setVisibleLeaderBoard((prev) => !prev);
          }}
        >
          ตารางคะแนนการมีส่วนร่วม
        </Nav.Link>
        <HeaderExampleImageNav />
      </Nav>
    </Navbar>
  );
}

export default Navbarmap;
