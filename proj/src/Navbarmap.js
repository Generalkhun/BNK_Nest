import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
function Navbarmap({ page, setPage, setVisible, setVisibleP2 }) {
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
        ตรวจสอบ วิจารณ์ งบกทม 63'
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
            setVisible(false);
            if (page != null) {
              setTimeout(function () {
                setVisible(true);
              }, 250);
            }
          }}
        >
          กระทู้สนทนา
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navbarmap;
