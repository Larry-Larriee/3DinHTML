// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../App.css";

// aframe does not need to be installed because it is imported in index.html
export default function Demo() {
  const [toolTip, setToolTip] = useState(false);

  let changeToolTip = () => {
    setToolTip(!toolTip);
  };

  let test = () => {
    console.log("test");
  };

  return (
    // we need both onMouseOver and onMouseOut to change the state as necessary
    <div
      className="w-1/2 h-96 relative"
      onMouseOver={() => changeToolTip()}
      onMouseOut={() => changeToolTip()}
    >
      {/* the embedded property of a-scene removes the default full-screen canvas render */}
      {/* because a-frame is a web framework and not a react framework, we use class instead of className */}
      <a-scene embedded class="w-full h-full">
        <a-torus position="-1 2 -3" rotation="0 45 0" color="#4CC3D9" />

        <a-sky color="#0000FF" />
      </a-scene>

      {toolTip && (
        <p
          className="absolute z-1 top-3 right-3 text-white text-xl"
          onClick={() => test()}
        >
          Click here to copy the code!
        </p>
      )}
    </div>
  );
}
