import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { VariableSizeList as List } from "react-window";

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
  const projectHeight = () => {
    return 450;
  };

  return (
    <div className="w-full h-full">
      {isTagSpecific === true && (
        <List
          itemCount={projects.length}
          height={500}
          width={500}
          itemSize={projectHeight}
          className="w-full-important h-144"
        >
          {({ index, style }) => {
            if (
              projects[index].metaData.tags &&
              projects[index].metaData.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              for (let i = 0; i < projects[index].metaData.tags.length; i++) {
                if (projects[index].metaData.tags[i] === tag) {
                  return (
                    <div style={style}>
                      <CompleteProject
                        key={projects[index]._id}
                        aframe={projects[index].aframe}
                        title={projects[index].metaData.title}
                        name={projects[index].metaData.name}
                        description={projects[index].metaData.description}
                        tags={projects[index].metaData.tags}
                      />
                    </div>
                  );
                }
              }
            }
          }}
        </List>
      )}
      {isTagSpecific === false && (
        // by default, the width and height of the list will be 500px
        <List
          itemCount={projects.length}
          height={500}
          width={500}
          itemSize={projectHeight}
          className="w-full-important h-136"
        >
          {/* style prop is needed as the list attaches the elements into the DOM */}
          {({ index, style }) => {
            if (
              projects[index].metaData.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return (
                <div style={style} key={projects[index]._id}>
                  <CompleteProject
                    aframe={projects[index].aframe}
                    title={projects[index].metaData.title}
                    name={projects[index].metaData.name}
                    description={projects[index].metaData.description}
                    tags={projects[index].metaData.tags}
                  />
                </div>
              );
            }
          }}
        </List>
      )}
    </div>
  );
}
