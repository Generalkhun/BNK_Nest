import React, { useState } from "react";
import data from "./sample.json";
import { dataToJSONObject } from "./util";
import Option from "./Option";
import { PieChart } from "react-minimal-pie-chart";
function Page2() {
  // Declare a new state variable, which we'll call "count"

  const dataObject = dataToJSONObject(data);

  const [filter, setFilter] = useState(1);

  const index = 0;
  return (
    <div style={{ fontFamily: `'Kanit', sans-serif` }}>
      <div>
        <h1>{dataObject[index].name}</h1>
        <button
          onClick={() => {
            console.log(dataObject);
          }}
        >
          {"saraku"}
        </button>
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
          height: 500,
          width: 900,
        }}
      >
        <div style={{ backgroundColor: "pink", gridArea: "main1" }}></div>
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
        <div style={{ backgroundColor: "blue", gridArea: "main5" }}></div>
        <div style={{ backgroundColor: "#2ec1ac", gridArea: "main6" }}></div>
        <div style={{ gridArea: "main7" }}>
          <PieChart
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Page2;
