import React from "react";
import Navigation from "../components/Navigation";

export default function Error() {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-12">
      <Navigation />

      <section className="flex h-full w-10/12 flex-col items-center justify-center gap-3">
        <p className="text-prim-1 font-league text-3xl font-semibold">
          Looks like you found a not-so-secret page.
        </p>

        <p className="text-prim-1 font-league text-xl font-medium">
          Maybe open up the menu?
        </p>
      </section>
    </div>
  );
}
