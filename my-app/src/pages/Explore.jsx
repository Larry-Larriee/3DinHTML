import React, { useState, useEffect, useRef } from "react";

import Selection from "../components/helper/Selection";
import Navigation from "../components/Navigation";
import UseTheme from "../components/hooks/UseTheme";

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

  const [selectionFocus, setSelectionFocus] = useState("Featured");

  const changeSelectionFocus = (title) => {
    setSelectionFocus(title);
  };

  const [search, setSearch] = useState("");
  const searchRef = useRef();

  const changeSearch = () => {
    setSearch(searchRef.current.value);
  };

  let { theme, toggleTheme } = UseTheme();

  return (
    <>
      <div className="flex h-auto w-full flex-col gap-20">
        <Navigation />

        {/* the w-10/12 is not in the center because this file does not justify-center/items-center the main divs */}
        <div className="flex w-full flex-col gap-24 pl-12 pr-12 xl:flex-row xl:gap-36 xl:pr-16">
          <aside className="max-h-144 top-20 flex w-full flex-none flex-col gap-10 xl:sticky xl:w-80">
            <section className="bg-sec-1 dark:bg-prim-4 flex items-center gap-3 rounded-xl py-2 pl-2 shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="dark:text-prim-1 text-prim-2 h-8 w-8 flex-none"
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
                className="placeholder-prim-2 text-prim-2 dark:text-prim-1 bg-sec-1 dark:bg-prim-4 w-full text-lg font-medium focus:outline-none dark:placeholder-gray-500"
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

          <div className="flex w-full flex-col gap-10">
            <p className="text-prim-2 dark:text-prim-1 font-league text-4xl font-semibold">
              {selectionFocus} Projects
            </p>

            <div className="flex w-full flex-col justify-between gap-20 xl:gap-36">
              {projects && selectionFocus === "Featured" && (
                <RenderAllProjects
                  projects={projects}
                  search={search}
                  isTagSpecific={false}
                />
              )}

              {projects && selectionFocus === "Recent" && (
                <RenderAllProjects
                  projects={projects}
                  search={search}
                  isTagSpecific={false}
                />
              )}

              {projects && selectionFocus === "Gaming & Fun" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Gaming & Fun"}
                  search={search}
                />
              )}
              {projects && selectionFocus === "Educative" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Educative"}
                  search={search}
                />
              )}
              {projects && selectionFocus === "Lightweight" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Lightweight"}
                  search={search}
                />
              )}
              {projects && selectionFocus === "Needs Strong PC" && (
                <RenderAllProjects
                  projects={projects}
                  tag={"Needs Strong PC"}
                  search={search}
                />
              )}
            </div>
          </div>
        </div>

        {/* if the footer is in a dynamically rendered page it will not change its position dynamically as well. */}
        {/* because vite has both a root and body with flex properties, conventional methods to keep it staying on the bottom may not work */}
        <footer className="text-prim-2 absolute bottom-0 left-5 hidden flex-none font-league text-base xl:flex dark:text-white">
          ©2024 Larry Le MIT License
        </footer>
      </div>
    </>
  );
}
