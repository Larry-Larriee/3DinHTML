import React, { useState, useEffect, useRef } from "react";

import Selection from "../components/helper/Selection";
import CompleteProject from "../components/aframe/CompleteProject";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";

import RenderAllProjects from "../components/RenderAllProjects";

export default function Explore() {
  const [projects, setProjects] = useState([]);

  const changeProjects = (data) => {
    setProjects(data);
  };

  const serverURL = import.meta.env.VITE_SERVER;

  useEffect(() => {
    fetch(serverURL + "/api/explore").then((response) => {
      response.json().then((data) => {
        changeProjects(data.projects);
      });
    });
  }, [serverURL]);

  // maxProjects is the total number of projects that have the potential to be rendered at once. if the nuber of projects is less than the max number, there is no problem
  // at the start, 3 projects can be rendered at a time. clicking on "load more projects" will increase the max number by 3
  // maxProjects is also aware of search rendering. the user can click on "load more projects" to render more projects that match the search query
  const [maxProjects, setMaxProjects] = useState(3);

  const changeMaxProjects = () => setMaxProjects((prev) => prev + 3);

  const [selectionFocus, setSelectionFocus] = useState("Featured");

  const changeSelectionFocus = (title) => {
    setSelectionFocus(title);

    // reset the max projects to 3 when the user clicks on a different selection
    // if the user doom scrolls and clicks on a different selection, the max projects will be reset to 3 so a ton of project won't be rendered at once
    setMaxProjects(3);
  };

  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const changeSearch = () => {
    setSearch(searchRef.current.value);
  };

  return (
    <>
      <div className="flex w-full flex-col gap-20">
        <Navigation />

        {/* the w-10/12 is not in the center because this file does not justify-center/items-center the main divs */}
        <div className="w-full flex gap-24 xl:gap-36 pl-12 pr-12 xl:pr-16 flex-col xl:flex-row">
          <aside className="flex flex-col gap-10 w-full xl:w-80 flex-none xl:sticky top-20 max-h-144">
            <section className="flex gap-3 items-center bg-prim-4 py-2 rounded-xl pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#deded6"
                className="w-8 h-8 flex-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search"
                className="text-prim-1 w-full bg-prim-4 font-medium text-lg focus:outline-none"
                onChange={() => changeSearch()}
                ref={searchRef}
              />
            </section>

            <section className="flex flex-col gap-6">
              <Selection
                changeSelectionFocus={changeSelectionFocus}
                selectionFocus={selectionFocus}
                title="Featured"
                svg="featured"
              />
              <Selection
                changeSelectionFocus={changeSelectionFocus}
                selectionFocus={selectionFocus}
                title="Recent"
                svg="recent"
              />
              <Selection
                changeSelectionFocus={changeSelectionFocus}
                selectionFocus={selectionFocus}
                title="Gaming & Fun"
                svg="games"
              />
              <Selection
                changeSelectionFocus={changeSelectionFocus}
                selectionFocus={selectionFocus}
                title="Educative"
                svg="educative"
              />
              <Selection
                changeSelectionFocus={changeSelectionFocus}
                selectionFocus={selectionFocus}
                title="Lightweight"
                svg="lightWeight"
              />
              <Selection
                changeSelectionFocus={changeSelectionFocus}
                selectionFocus={selectionFocus}
                title="Needs Strong PC"
                svg="heavy"
              />
            </section>
          </aside>

          <div className="flex flex-col gap-10 w-full">
            <p className="text-4xl font-semibold font-league text-prim-1">
              {selectionFocus} Projects
            </p>

            <div className="flex flex-col w-full justify-between gap-20 xl:gap-36">
              {projects &&
                selectionFocus === "Featured" &&
                projects.map((project, index) => {
                  if (
                    project.metaData.title
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) &&
                    index < maxProjects
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

              {projects &&
                selectionFocus === "Recent" &&
                projects.map((project, index) => {
                  if (
                    project.metaData.title
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) &&
                    index < maxProjects
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

              {projects && selectionFocus === "Gaming & Fun" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Gaming & Fun"}
                  search={search}
                  maxProjects={maxProjects}
                />
              )}
              {projects && selectionFocus === "Educative" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Educative"}
                  search={search}
                  maxProjects={maxProjects}
                />
              )}
              {projects && selectionFocus === "Lightweight" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Lightweight"}
                  search={search}
                  maxProjects={maxProjects}
                />
              )}
              {projects && selectionFocus === "Needs Strong PC" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Needs Strong PC"}
                  search={search}
                  maxProjects={maxProjects}
                />
              )}
            </div>

            <Loading
              projects={projects}
              selectionFocus={selectionFocus}
              changeMaxProjects={changeMaxProjects}
            />
          </div>
        </div>

        {/* if the footer is in a dynamically rendered page it will not change its position dynamically as well. */}
        {/* because vite has both a root and body with flex properties, conventional methods to keep it staying on the bottom may not work */}
        <footer className="flex flex-none w-full relative">
          <p className="text-white text-base font-league absolute left-5 bottom-2">
            ©2024 Larry Le MIT License
          </p>
        </footer>
      </div>
    </>
  );
}
