// eslint-disable-next-line no-unused-vars
import React from "react";
import "../App.css";

// aframe does not need to be installed because it is imported in index.html
export default function demo() {
  return (
    <>
      {/* the embedded property of a-scene removes the default full-screen canvas render */}
      {/* because a-frame is a web framework and not a react framework, we use class instead of className */}
      <a-scene embedded class="w-96 h-96">
        <a-torus position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />

        <a-sky color={"#290292"} />
        <a-entity environment="preset: forest; dressingAmount: 500"></a-entity>
      </a-scene>
    </>
  );
}
