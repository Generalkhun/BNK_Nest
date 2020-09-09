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

var _ = require("lodash");
const index = 0;
const dataObject = dataToJSONObject(data);

const districtNametoDistrict = (name) => {
  console.log(
    dataObject.filter((i) =>
      i.name.replace(/[่ฏฎ]/, "").includes(name.replace(/[่ฏฎ]/, ""))
    ),
    "&&&&"
  );
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
function Page2({ districtSelected }) {
  const [filter, setFilter] = useState(1);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ fontFamily: `'Kanit', sans-serif`, color: "white" }}>
        <div>
          <h1>
            {districtNametoDistrict(districtSelected).length > 0
              ? districtNametoDistrict(districtSelected)[0].name
              : "null"}
          </h1>
        </div>
        <div
          style={{
            gridTemplateColumns: `2fr 1fr 1fr`,
            gridTemplateRows: `1fr 1fr 1fr`,
            display: "grid",
            gridTemplateAreas: `
                    'main1 main2 main3'
                    'main4 main5 main6'
                    'main7 main7 main7'
                `,
            height: 600,
            width: 460,
          }}
        >
          <div style={{ gridArea: "main1" }}>
            <p>รวมงบประมานที่ได้รับปี 63</p>
            <h2>
              {districtNametoDistrict(districtSelected).length > 0
                ? districtNametoDistrict(districtSelected)[0][`f${filter}_sum`]
                : 0}{" "}
              บาท
            </h2>
          </div>
          <div style={{ gridArea: "main2", margin: "auto" }}></div>
          <div style={{ gridArea: "main3" }}></div>
          <div style={{ gridArea: "main4", margin: "auto" }}></div>
          <div style={{ gridArea: "main5" }}></div>
          <div style={{ gridArea: "main6" }}></div>
          <div style={{ gridArea: "main7", paddingTop: 30 }}>
            {districtNametoDistrict(districtSelected).length > 0 && (
              <div>
                {/* <DonutChart
                  data={dataToPieObject(
                    districtNametoDistrict(districtSelected)[0]
                  )}
                  width={400}
                /> */}
                <DounutChartP2
                  data={dataToPieObject(
                    districtNametoDistrict(districtSelected)[0]
                  )}
                />
              </div>
            )}
            {/* Add Accordian table to Page 2  */}
            <AccordianPage2
              data={districtNametoDistrict(districtSelected)[0]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
