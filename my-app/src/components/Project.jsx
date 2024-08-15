import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";

Project.propTypes = {
  aframe: propTypes.string.isRequired,
};

export default function Project({ aframe }) {
  let header =
    "<head><script src='https://aframe.io/releases/1.6.0/aframe.min.js'></script></head>";
  // const [isInteracting, setIsInteracting] = useState(false);
  // const aCamera = useRef();

  // let userIsInteracting = () => {
  //   setIsInteracting(true);
  // };
  // let userIsNotInteracting = () => {
  //   setIsInteracting(false);
  // };

  // useEffect(() => {
  //   isInteracting
  //     ? aCamera.current.setAttribute("wasd-controls", "enabled: true")
  //     : aCamera.current.setAttribute("wasd-controls", "enabled: false");

  //   isInteracting ? aCamera.current.play() : aCamera.current.pause();
  // }, [isInteracting]);

  return (
    <>
      <iframe
        className="w-32 h-24 lg:w-64 lg:h-48 xl:w-72 xl:h-64 bg-white"
        // onMouseOver={userIsInteracting}
        // onMouseOut={userIsNotInteracting}
        srcDoc={header + aframe}
      ></iframe>
    </>
  );
}

//  <a-scene embedded class="w-full">
//   <a-assets>
//     <img
//       id="skyTexture"
//       src="https://cdn.aframe.io/a-painter/images/sky.jpg"
//       crossOrigin="anonymous"
//     />
//   </a-assets>
//   <a-entity
//     geometry="primitive: box"
//     material="color: red"
//     position="-2, 0, -4"
//   />
//   <a-entity
//     geometry="primitive: box"
//     material="color: green"
//     position="0, 0, -4"
//   />
//   <a-entity
//     geometry="primitive: box"
//     material="color: blue"
//     position="2, 0, -4"
//   />
//   <a-sky src="#skyTexture" />
//   <a-camera ref={aCamera}></a-camera>{" "}
// </a-scene>
