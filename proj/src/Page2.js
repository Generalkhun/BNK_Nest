import React, { useState } from "react";
import data from "./sample.json";
import {
  dataToJSONObject,
  range,
  stringToInterger,
  category,
  fieldValue,
  addValutToDistrictShape,
} from "./util";
import Option from "./Option";
 import DonutChart from "react-donut-chart";
import * as districtShape from "./data/district/districtNew.json";

var _ = require("lodash");
const index = 0;
const dataObject = dataToJSONObject(data);

const dataPieObject = range(10).map((i) => {
  return {
    label: category[i],
    value: stringToInterger(dataObject[index][`f${i + 1}_sum`]),
  };
});

function log() {
  const districhShapeWithValue = addValutToDistrictShape(districtShape);
  console.log(districhShapeWithValue);
  console.log(districtShape.default.features.map((c) => c));
  console.log(dataObject);
}
function Page2() {
  const [filter, setFilter] = useState(1);

  return (
    <div style={{ fontFamily: `'Kanit', sans-serif` ,color:"white"}}>
      <div>
        <h1>{dataObject[index].name}</h1>
        <button onClick={log}>{"saraku"}</button>
        <Option setFilter={setFilter} />
      </div>
      <div
        style={{
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridTemplateRows: `1fr 1fr 1fr`,
          display: "grid",
          gridTemplateAreas: `
                    'main1 main2 main3'
                    'main4 main5 main6'
                    'main7 main7 main7'
                `,
          height: 300,
          width: 800,
        }}
      >
        <div style={{  gridArea: "main1" }}></div>
        <div style={{ gridArea: "main2", margin: "auto" }}>
          <p>งบปีปัจจุบัน</p>
          <p>{dataObject[index][`f${filter}_sum`]} บาท</p>
        </div>
        <div style={{ gridArea: "main3" }}></div>
        <div style={{ gridArea: "main4", margin: "auto" }}>
          {dataObject[index][`f${filter}_data_f`]
            .replace(/_$/g, "")
            .split("_")
            .map((s, i) => (
              <p>
                {i}.{s} บาท
              </p>
            ))}
        </div>
        <div style={{  gridArea: "main5" }}></div>
        <div style={{  gridArea: "main6" }}></div>
        <div style={{ gridArea: "main7" }}>
          <DonutChart data={dataPieObject} width={400} />
        </div>
      </div>
    </div>
  );
}

export default Page2;
