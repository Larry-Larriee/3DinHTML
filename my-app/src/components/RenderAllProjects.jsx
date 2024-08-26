import React, { useState, useEffect, useCallback } from "react";
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
  // renderedProjects is the array of projects that the list will render. when the user searches, the value is updated and the component will rerender
  // renderedProjects is also tag aware, meaning that clicking on a section containing isTagSpecific will also update renderedProjects
  const [renderedProjects, setRenderedProjects] = useState(projects);

  useEffect(() => {
    if (isTagSpecific === false) {
      let newRenderedProjects = [];

      for (let i = 0; i < projects.length; i += 1) {
        if (
          projects[i].metaData.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
        ) {
          newRenderedProjects.push(projects[i]);
        }
      }

      setRenderedProjects(newRenderedProjects);
    }

    if (isTagSpecific === true) {
      let newRenderedProjects = [];

      for (let i = 0; i < projects.length; i += 1) {
        if (
          projects[i].metaData.title
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) &&
          projects[i].metaData.tags &&
          projects[i].metaData.tags.includes(tag)
        ) {
          newRenderedProjects.push(projects[i]);
        }
      }

      setRenderedProjects(newRenderedProjects);
    }
  }, [search, projects, isTagSpecific, tag]);

  // calculate the project height to modify itemSize in the List component as needed
  const [projectHeight, setProjectHeight] = useState([]);

  const changeProjectHeight = useCallback((height) => {
    setProjectHeight((prev) => [...prev, height]);
  }, []);

  useEffect(() => {
    console.log(projectHeight);
  }, [projectHeight]);

  const modProjectHeight = () => {
    return 450;
  };

  return (
    <>
      {renderedProjects && (
        <div className="w-full h-full">
          <List
            itemCount={renderedProjects.length}
            height={500}
            width={500}
            itemSize={modProjectHeight}
            className="w-full-important h-144"
          >
            {/* style prop is needed as the list attaches the elements into the DOM */}
            {({ index, style }) => {
              return (
                <div style={style}>
                  <CompleteProject
                    key={renderedProjects[index]._id}
                    aframe={renderedProjects[index].aframe}
                    title={renderedProjects[index].metaData.title}
                    name={renderedProjects[index].metaData.name}
                    description={renderedProjects[index].metaData.description}
                    tags={renderedProjects[index].metaData.tags}
                    changeProjectHeight={changeProjectHeight}
                  />
                </div>
              );
            }}
          </List>
        </div>
      )}
    </>
  );
}
