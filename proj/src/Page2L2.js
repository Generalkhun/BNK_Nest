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

const dataToPieObject = (data) => {
  return data
    .split("&")
    .map((c) => c.split("_")[0].split(" "))
    .map((s) => {
      return {
        value: s[0] != "" ? stringToInterger(s[1]) : 0,
        label: s[0] != "" ? s[0] : "",
      };
    });
};

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
          </div>{" "}
          <DounutChartP2
            data={dataToPieObject(data2Object[filter2].desc)}
            L2={true}
          />
          <div>
            <button
              onClick={() =>
                console.log(
                  data2Object[filter2].desc
                    .split("&")
                    .map((c) => c.split("_")[0].split(" "))
                    .map((s) => {
                      return {
                        value: s[0] != "" ? stringToInterger(s[1]) : 0,
                        label: s[0] != "" ? s[0] : "",
                      };
                    })
                )
              }
            >
              aaaaaaaa
            </button>
            {data2Object[filter2].desc.split("&").map((c) => {
              return <p>{c}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2L2;
