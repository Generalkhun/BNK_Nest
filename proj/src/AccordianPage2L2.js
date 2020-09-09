import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
//import { category } from "./util.js";
import AccordianPage2L2TableData from "./AccordianPage2L2TableData.js";

function AccordianPage2L2({ data }) {
  const category = data.map((c) => c.label);
  console.log("Data on this accordian: ", data[0].split("_")[0]);
  return (
    <Accordion defaultActiveKey={1}>
      {category.map((cat, index) => {
        return (
          <AccordianPage2L2TableData cat={cat} data={data} index={index} />
        );
      })}
    </Accordion>
  );
}

export default AccordianPage2L2;
