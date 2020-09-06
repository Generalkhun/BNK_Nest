import React, { useState } from "react";

function Page2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>เขต1</h1>
      </div>
      <div
        style={{
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridTemplateRows: `1fr 1fr 1fr`,
          display: "grid",
          gridTemplateAreas: `
                    'main1 main2 main2'
                    'main3 main4 main5'
                    'main6 main6 main6'
                `,
          height: 500,
          width: 600,
        }}
      >
        <div style={{ backgroundColor: "pink", gridArea: "main1" }}></div>
        <div style={{ backgroundColor: "red", gridArea: "main2" }}></div>
        <div style={{ backgroundColor: "skyblue", gridArea: "main3" }}></div>
        <div style={{ backgroundColor: "black", gridArea: "main4" }}></div>
        <div style={{ backgroundColor: "blue", gridArea: "main5" }}></div>
        <div style={{ backgroundColor: "#2ec1ac", gridArea: "main6" }}></div>
      </div>
    </div>
  );
}

export default Page2;
