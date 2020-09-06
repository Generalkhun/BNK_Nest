import React, { useState } from "react";
import data from "./sample.json";
import { dataToJSONObject } from "./util";
import Option from "./Option";
function Page2() {
  // Declare a new state variable, which we'll call "count"
  const dataObject = dataToJSONObject(data);

  const [filter, setFilter] = useState(1);

  const index = 0;
  return (
    <div>
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
        <div style={{ backgroundColor: "red", gridArea: "main2" }}>
          <p>งบปีปัจจุบัน</p>
          <p>{dataObject[index][`f${filter}_sum`]} บาท</p>
        </div>
        <div style={{ backgroundColor: "skyblue", gridArea: "main3" }}></div>
        <div style={{ backgroundColor: "black", gridArea: "main4" }}></div>
        <div style={{ backgroundColor: "blue", gridArea: "main5" }}></div>
        <div style={{ backgroundColor: "#2ec1ac", gridArea: "main6" }}></div>
        <div style={{ backgroundColor: "#2ea1ac", gridArea: "main7" }}></div>
      </div>
    </div>
  );
}

export default Page2;
