import React from "react";

import Selection from "../components/helper/Selection";
import Project from "../components/Project";
import Navigation from "../components/Navigation";

export default function Explore() {
  return (
    <>
      <div className="flex w-full flex-col gap-20">
        <Navigation />

        {/* the w-10/12 is not in the center because this file does not justify-center/items-center the main divs */}
        <div className="w-10/12 flex gap-36 ml-12">
          <aside className="flex flex-col gap-10 w-80 flex-none">
            <section className="flex gap-3 items-center bg-prim-4 py-2 rounded-xl pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#deded6"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <p className="text-prim-1 font-medium text-lg">Search</p>
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

          <div className="flex flex-col gap-12 w-auto">
            <p className="text-3xl font-semibold font-league text-prim-1">
              Here&apos;s what we got..
            </p>

            <div className="flex flex-wrap justify-between gap-10">
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
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
