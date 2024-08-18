import React, { useState, useEffect } from "react";

import Selection from "../components/helper/Selection";
import CompleteProject from "../components/aframe/CompleteProject";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";

export default function Explore() {
  const [projects, setProjects] = useState([]);

  const changeProjects = (data) => {
    setProjects(data);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/explore").then((response) => {
      response.json().then((data) => {
        changeProjects(data.projects);
      });
    });
  }, []);

  return (
    <>
      <div className="flex w-full flex-col gap-20">
        <Navigation />

        {/* the w-10/12 is not in the center because this file does not justify-center/items-center the main divs */}
        <div className="w-full flex gap-36 pl-12 pr-16">
          <aside className="flex flex-col gap-10 w-80 flex-none sticky top-20 max-h-144">
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
              />
            </section>

            <section className="flex flex-col gap-6">
              <Selection title="Featured" svg="featured" />
              <Selection title="Recent" svg="recent" />
              <Selection title="Gaming & Fun" svg="games" />
              <Selection title="Educative" svg="educative" />
              <Selection title="Lightweight" svg="lightWeight" />
              <Selection title="Needs Strong PC" svg="heavy" />
            </section>
          </aside>

          <div className="flex flex-col gap-12 w-full">
            <p className="text-4xl font-semibold font-league text-prim-1">
              Here&apos;s what we got..
            </p>

            <div className="flex flex-col w-full justify-between gap-36">
              {projects &&
                projects.map((project) => {
                  return (
                    <CompleteProject
                      key={project._id}
                      aframe={project.aframe}
                      title={project.metaData.title}
                      name={project.metaData.name}
                      description={project.metaData.description}
                    />
                  );
                })}
            </div>

            <Loading />
          </div>
        </div>

        <footer className="relative w-full">
          <p className="text-white text-base font-league absolute left-5 bottom-2">
            ©2024 Larry Le MIT License
          </p>
        </footer>
      </div>
    </>
  );
}
