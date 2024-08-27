import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// Navigation component is used to render the navigation bar at the top of the page. It is used in all pages aside from the landing page
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

  const openLanding = () => {
    window.location.href = "/";
  };

  return (
    <nav className="bg-sec-1 dark:bg-prim-2 flex w-full flex-none items-center justify-between gap-3 px-12 py-3">
      <div
        className="flex items-center gap-3 hover:cursor-pointer"
        onClick={() => openLanding()}
      >
        <h1 className="text-prim-2 dark:text-prim-1 font-lemon text-4xl">3D</h1>
        <p className="text-prim-2 dark:text-prim-1 font-league text-2xl">
          in HTML
        </p>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="dark:text-prim-1 text-prim-2 h-12 w-12 transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
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
          className="fixed inset-0 h-screen w-screen"
        >
          <DialogPanel
            className="bg-light-mode dark:bg-prim-3 absolute left-0 z-30 flex h-screen w-80 flex-col gap-8 opacity-0"
            ref={menu}
          >
            <DialogTitle className="text-prim-2 dark:text-prim-1 pl-10 pt-9 font-lemon text-4xl">
              Menu
            </DialogTitle>

            <ul className="flex w-full list-none flex-col gap-5 pl-10">
              <li>
                <a
                  href="/"
                  className="text-prim-2 dark:text-prim-1 font-league text-xl transition duration-200 ease-in-out hover:scale-105"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/account"
                  className="text-prim-2 dark:text-prim-1 font-league text-xl transition duration-200 ease-in-out hover:scale-105"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="/explore"
                  className="text-prim-2 dark:text-prim-1 font-league text-xl transition duration-200 ease-in-out hover:scale-105"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/contribute"
                  className="text-prim-2 dark:text-prim-1 font-league text-xl transition duration-200 ease-in-out hover:scale-105"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </DialogPanel>

          <div className="bg-prim-half-2 absolute inset-0 z-10 flex h-screen w-screen" />
        </Dialog>
      )}
    </nav>
  );
}
