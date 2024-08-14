import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const menu = useRef();

  useEffect(() => {
    async function animateOpen() {
      await new Promise((resolve) => setTimeout(resolve, 50));

      menu.current.classList.add("opacity-100");
      menu.current.classList.add("slide-in-from-left");
    }

    if (menuOpen) animateOpen();
  }, [menuOpen]);

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

      {menuOpen && (
        <Dialog
          open={menuOpen}
          onClose={() => changeMenuOpen()}
          className="fixed inset-0 w-screen h-screen"
        >
          <DialogPanel
            className="flex flex-col gap-8 absolute bg-prim-3 left-0 w-80 h-screen z-30 opacity-0"
            ref={menu}
          >
            <DialogTitle className="text-prim-1 text-4xl pt-9 pl-10 font-lemon">
              Menu
            </DialogTitle>

            <ul className="list-none flex flex-col w-full gap-5 pl-10">
              <li>
                <a
                  href="/"
                  className="hover:scale-105 duration-200 ease-in-out transition font-league text-xl text-prim-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/account"
                  className="hover:scale-105 duration-200 ease-in-out transition font-league text-xl text-prim-1"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="hover:scale-105 duration-200 ease-in-out transition font-league text-xl text-prim-1"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/contribute"
                  className="hover:scale-105 duration-200 ease-in-out transition font-league text-xl text-prim-1"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </DialogPanel>

          <div className="inset-0 flex w-screen h-screen absolute bg-prim-half-2 z-10" />
        </Dialog>
      )}
    </nav>
  );
}
