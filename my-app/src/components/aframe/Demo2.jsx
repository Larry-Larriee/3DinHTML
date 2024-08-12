import React, { useState, useEffect, useRef } from "react";

export default function Demo2() {
  const [isInteracting, setIsInteracting] = useState(false);
  const aCamera = useRef();

  let userIsInteracting = () => {
    setIsInteracting(true);
  };
  let userIsNotInteracting = () => {
    setIsInteracting(false);
  };

  useEffect(() => {
    isInteracting
      ? aCamera.current.setAttribute("wasd-controls", "enabled: true")
      : aCamera.current.setAttribute("wasd-controls", "enabled: false");

    isInteracting ? aCamera.current.play() : aCamera.current.pause();
  }, [isInteracting]);

  return (
    <div
      className=" w-72 h-64 bg-white rounded-xl"
      onMouseOver={userIsInteracting}
      onMouseOut={userIsNotInteracting}
    >
      <a-scene embedded class="w-full">
        <a-assets>
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
            crossOrigin="anonymous"
          />
        </a-assets>
        <a-entity
          geometry="primitive: box"
          material="color: red"
          position="-2, 0, -4"
        />
        <a-entity
          geometry="primitive: box"
          material="color: green"
          position="0, 0, -4"
        />
        <a-entity
          geometry="primitive: box"
          material="color: blue"
          position="2, 0, -4"
        />
        <a-sky src="#skyTexture" />
        <a-camera ref={aCamera}></a-camera>{" "}
      </a-scene>
    </div>
  );
}
