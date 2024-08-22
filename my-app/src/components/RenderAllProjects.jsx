import React, { useEffect } from "react";
import PropTypes from "prop-types";

RenderAllProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  tag: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  maxProjects: PropTypes.number.isRequired,
  changeRenderIndex: PropTypes.func.isRequired,
};

import CompleteProject from "./aframe/CompleteProject";

// RenderAllProjects component is used to render all projects with respect to their tag category. if the search state rerenders, the entire component will rerender as well
// projects (array): an array of all the projects in the database
// tag (string): the tag that the user has selected, such as "Gaming & Fun"
export default function RenderAllProjects({
  projects,
  tag,
  search,
  maxProjects,
}) {
  return (
    <>
      {projects.map((project, index) => {
        if (
          project.metaData.tags &&
          project.metaData.title.toLowerCase().includes(search.toLowerCase()) &&
          index < maxProjects
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
    </>
  );
}
