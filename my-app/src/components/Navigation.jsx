import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full border-b-2 flex gap-3 py-3 justify-between px-12 items-center bg-prim-2">
      <div className="flex gap-3 items-center">
        <h1 className="text-prim-1 text-4xl font-lemon">3D</h1>
        <p className="text-prim-1 text-2xl font-league">in HTML</p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#deded6"
        className="h-12 w-12 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out"
        onClick={() => changeMenuOpen()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {
        // menuOpen && (
        // Headless UI modal for the menu, which automatically renders at the top level of the DOM
        // )
      }
    </nav>
  );
}
