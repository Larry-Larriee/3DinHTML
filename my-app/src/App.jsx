import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(100);

  let changeCount = () => {
    setCount((prev) => prev + 1);

    console.log("count", count);
  };

  return (
    <>
      <a-scene>
        <a-torus
          position="-1 0.5 -3"
          rotation="0 45 0"
          color="#4CC3D9"
          onClick={() => changeCount}
        >
          <a-text position="0 2 0" value={count} />
        </a-torus>

        <a-sky color="#FFD700" />
      </a-scene>
    </>
  );
}

export default App;
