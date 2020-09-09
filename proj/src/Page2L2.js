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
import "./index.css";
import AccordianPage2 from "./AccordianPage2.js";
import DounutChartP2 from "./DounutChartP2.js";
import data2 from "./sample2.json";

const data2Object = dataToJSONObject(data2);

var _ = require("lodash");
const index = 0;
const dataObject = dataToJSONObject(data);

const districtNametoDistrict = (name) => {
  console.log(data2Object, "!!!!!!!!");
  return dataObject.filter((i) =>
    i.name.replace(/[่ฏฎ]/, "").includes(name.replace(/[่ฏฎ]/, ""))
  );
};

const dataToPieObject = (data) =>
  range(10).map((i) => {
    return {
      label: category[i],
      value: stringToInterger(data[`f${i + 1}_sum`]),
    };
  });

const dataPieObject = range(10).map((i) => {
  return {
    label: category[i],
    value: stringToInterger(dataObject[index][`f${i + 1}_sum`]),
  };
});

function log() {
  const districhShapeWithValue = addValutToDistrictShape(districtShape);
  console.log(districhShapeWithValue);
  //console.log(districtShape.default.features.map((c) => c));
  console.log(dataObject);
}
function Page2L2({ districtSelected, filter2 }) {
  const [filter, setFilter] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ fontFamily: `'Kanit', sans-serif`, color: "white" }}>
        <div>
          <h1>{data2Object[filter2].name}</h1>
        </div>
        <div>
          <div style={{ gridArea: "main1" }}>
            <p>รวมงบประมาณที่ได้รับปี 63</p>
            <h2>
              {data2Object[filter2].sum}
              บาท
            </h2>
          </div>

          {/* <div>
            <AccordianPage2
              data={districtNametoDistrict(districtSelected)[0]}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Page2L2;
