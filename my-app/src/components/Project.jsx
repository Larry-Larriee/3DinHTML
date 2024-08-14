import React from "react";
import PropTypes from "prop-types";

Project.propTypes = {
  aframe: PropTypes.element,
};

// Project returns a 3D project made by the community
export default function Project({ aframe }) {
  return (
    <>
      <div className="bg-prim-1 rounded-2xl w-96 h-80">{aframe}</div>
    </>
  );
}
