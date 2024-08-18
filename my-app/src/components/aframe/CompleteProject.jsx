import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

CompleteProject.propTypes = {
  aframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// used specifically for the explore page
export default function CompleteProject({ aframe, title, description, name }) {
  return (
    <section className="flex gap-12 w-full">
      <Project aframe={aframe} size={"big"} />

      <div className="flex flex-none w-80 flex-col gap-5">
        <section className="flex flex-col">
          <h1 className="text-prim-1 font-semibold font-league text-3xl">
            {title}
          </h1>
          <p className="text-prim-1 font-medium font-league text-lg">{name}</p>
        </section>

        <p className="font-league text-prim-1 text-xl">{description}</p>
      </div>
    </section>
  );
}
