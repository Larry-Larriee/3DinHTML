import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";

Project.propTypes = {
  aframe: propTypes.string.isRequired,
  size: propTypes.string,
};

export default function Project({ aframe, size = "small" }) {
  let header =
    "<head><script src='https://aframe.io/releases/1.6.0/aframe.min.js'></script></head>";

  return (
    <>
      {size === "small" && (
        <iframe
          className="w-32 h-24 lg:w-64 lg:h-48 xl:w-72 xl:h-64 bg-white"
          srcDoc={header + aframe}
        ></iframe>
      )}

      {size === "big" && (
        <iframe
          className="w-full h-56 lg:h-80 2xl:h-96 bg-white"
          srcDoc={header + aframe}
        ></iframe>
      )}
    </>
  );
}
