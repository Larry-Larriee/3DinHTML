import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

CompleteProject.propTypes = {
  aframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

// used specifically for the explore page
export default function CompleteProject({
  aframe,
  title,
  description,
  name,
  tags,
}) {
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

        <div className="flex gap-3">
          {tags &&
            tags.length !== 0 &&
            tags.map((tag) => {
              return (
                <div className="flex" key={tag}>
                  <p className="bg-prim-4 rounded-3xl px-5 py-2 text-prim-1 font-league text-lg hover:scale-105 ease-in-out duration-200 transition">
                    {tag}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
