import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

RenderAllProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  tag: PropTypes.string,
  search: PropTypes.string.isRequired,
  isTagSpecific: PropTypes.bool,
};

import CompleteProject from "./aframe/CompleteProject";

// RenderAllProjects component is used to render all projects with respect to their tag category (by default). if the search state rerenders, the entire component will rerender as well
// projects (array): an array of all the projects in the database
// tag (string): the tag that the user has selected, such as "Gaming & Fun"
export default function RenderAllProjects({
  projects,
  tag,
  search,
  isTagSpecific = true,
}) {
  // code that will use scroll position of the user to determine when to render more aframe projects
  // to do this, instead of the projects array being mapped, a separate array, which will be updated with more and more projects as the user scrolls, will be mapped

  return (
    <>
      {isTagSpecific === true &&
        projects.map((project) => {
          if (
            project.metaData.tags &&
            project.metaData.title
              .toLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            for (let i = 0; i < project.metaData.tags.length; i++) {
              if (project.metaData.tags[i] === tag) {
                return (
                  <CompleteProject
                    key={project._id}
                    aframe={project.aframe}
                    title={project.metaData.title}
                    name={project.metaData.name}
                    description={project.metaData.description}
                    tags={project.metaData.tags}
                  />
                );
              }
            }
          }
        })}

      {isTagSpecific === false &&
        projects.map((project) => {
          if (
            project.metaData.title
              .toLowerCase()
              .includes(search.toLocaleLowerCase())
          ) {
            return (
              <CompleteProject
                key={project._id}
                aframe={project.aframe}
                title={project.metaData.title}
                name={project.metaData.name}
                description={project.metaData.description}
                tags={project.metaData.tags}
              />
            );
          }
        })}
    </>
  );
}
