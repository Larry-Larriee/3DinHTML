// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import "../../App.css";

// aframe does not need to be installed because it is imported in index.html
export default function Demo() {
  const [toolTip, setToolTip] = useState(false);

  let changeToolTip = () => {
    if (toolTip === false) setToolTip(true);
    if (toolTip === true) setToolTip(false);
  };

  let header =
    "<head><script src='https://aframe.io/releases/1.6.0/aframe.min.js'></script></head>";

  return (
    <div
      className="hidden xl:block w-1/2 h-96 relative"
      onMouseOver={() => changeToolTip()}
      onMouseOut={() => changeToolTip()}
    >
      {/* the embedded property of a-scene removes the default full-screen canvas render */}

      {localStorage.getItem("theme") === "dark" && (
        <iframe
          className="w-full h-full"
          srcDoc={
            header +
            '<a-scene><a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box><a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere><a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder><a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane><a-sky color="#1B1B1F"></a-sky></a-scene>'
          }
        ></iframe>
      )}

      {localStorage.getItem("theme") === "light" && (
        <iframe
          className="w-full h-full"
          srcDoc={
            header +
            '<a-scene><a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box><a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere><a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder><a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane><a-sky color="#f9f9fa"></a-sky></a-scene>'
          }
        ></iframe>
      )}

      {toolTip && (
        <p className="absolute z-1 -bottom-10 font-league text-prim-1 animate-pulse text-xl">
          by Kevin Ngo and Diego Marcos
        </p>
      )}
    </div>
  );
}
