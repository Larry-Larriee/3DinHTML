import { useState } from "react";
import Demo from "./components/Demo";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="w-10/12 flex flex-col gap-20">
      <Navigation />

      <section className="flex w-full justify-between">
        <div className="flex flex-col gap-10 w-144">
          <h1 className="text-prim-1 font-semibold text-5xxl">
            Enjoy Community-made 3D Components.
          </h1>
          <p className="font-semibold text-prim-1 text-4xxl">
            Built with HTML. Free for everyone.
          </p>

          <article className="flex gap-8">
            <p className="text-2xl font-semibold text-prim-1 rounded-xl py-2 px-5 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600">
              Explore
            </p>
            <p className="text-2xl font-semibold text-prim-1 rounded-xl py-2 px-5 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600">
              Contribute
            </p>
          </article>
        </div>

        <Demo />
      </section>
    </div>
  );
}

export default App;
