import React from "react";
import Navigation from "../components/Navigation";

export default function Error() {
  return (
    <div className="flex w-full h-screen flex-col items-center gap-12">
      <Navigation />

      <section className="w-10/12 h-full flex flex-col gap-3 justify-center items-center">
        <p className="text-3xl font-semibold font-league text-prim-1">
          Looks like you found a not-so-secret page.
        </p>

        <p className="text-xl font-medium font-league text-prim-1">
          Maybe open up the menu?
        </p>
      </section>
    </div>
  );
}
