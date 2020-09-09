import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { category } from "./util.js";
import AccordianPage2TableData from "./AccordianPage2TableData.js";

function AccordianPage2({ data }) {
  console.log("Data on this accordian: ", data);
  return (
    <Accordion defaultActiveKey={1}>
      {category.map((cat,index) => {
          return(<AccordianPage2TableData cat={cat} data = {data} index = {index}/>)
        
      })}
    </Accordion>
  );
}

export default AccordianPage2;
