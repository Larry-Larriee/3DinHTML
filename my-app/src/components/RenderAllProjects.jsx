import React from "react";
import PropTypes from "prop-types";

RenderAllProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  tag: PropTypes.string.isRequired,
};

import CompleteProject from "./aframe/CompleteProject";

// RenderAllProjects component is used to render all projects with respect to their tag category
// projects (array): an array of all the projects in the database
// tag (string): the tag that the user has selected, such as "Gaming & Fun"
export default function RenderAllProjects({ projects, tag }) {
  return (
    <>
      {projects.map((project) => {
        if (project.metaData.tags) {
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
    </>
  );
}
