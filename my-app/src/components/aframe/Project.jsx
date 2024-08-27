import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";

Project.propTypes = {
  aframe: propTypes.string.isRequired,
  size: propTypes.string,
};

// Project component is used to render the aframe project in an iframe.
// aframe (string): the aframe project that the user has created
// size (string): the size of the iframe, either "small" or "big"
export default function Project({ aframe, size = "small" }) {
  let header =
    "<head><script src='https://aframe.io/releases/1.6.0/aframe.min.js'></script></head>";

  return (
    <>
      {size === "small" && (
        <iframe
          className="h-24 w-32 rounded-lg bg-white lg:h-48 lg:w-64 xl:h-64 xl:w-72"
          srcDoc={header + aframe}
        ></iframe>
      )}

      {size === "big" && (
        <iframe
          className="h-56 w-full bg-white lg:h-80 2xl:h-96"
          srcDoc={header + aframe}
        ></iframe>
      )}
    </>
  );
}
