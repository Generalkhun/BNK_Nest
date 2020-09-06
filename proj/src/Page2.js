import React, { useState } from "react";

function Page2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default Page2;
