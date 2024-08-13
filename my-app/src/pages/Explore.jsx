import React from "react";
import Navigation from "../components/Navigation";

export default function Explore() {
  return (
    <>
      <div className="flex w-full items-center flex-col gap-20">
        <nav className="w-full border-b-2 flex gap-3 py-3 pl-16 items-center bg-prim-2">
          <h1 className="text-prim-1 text-4xl font-lemon">3D</h1>
          <p className="text-prim-1 text-2xl font-league">in HTML</p>
        </nav>

        <div className="w-10/12 flex gap-5">
          <aside className="flex flex-col gap-5 w-96">
            {/* side bar navigation */}
          </aside>

          <div className="flex flex-col gap-10 w-auto">
            <p className="text-3xl font-semibold font-league text-prim-1">
              Here&apos;s what we got..
            </p>

            <div className="flex justify-between">
              {/* aframes */}
              {/* aframes */}
              {/* aframes */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
