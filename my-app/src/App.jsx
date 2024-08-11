import { useState } from "react";
import Demo from "./components/Demo";
import Navigation from "./components/Navigation";

function App() {
  function openAFrame() {
    window.open("https://aframe.io/", "_blank");
  }

  return (
    <div className="flex w-full items-center flex-col gap-20">
      <Navigation />

      <section className="w-10/12 flex justify-between mb-24">
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

      <section className="flex w-full justify-center mb-12 flex-col gap-28 items-center py-16 bg-prim-2">
        <article className="flex flex-col gap-5">
          <h1 className="text-prim-1 text-center font-semibold text-5xxl">
            Hundreds of projects
          </h1>
          <p className="text-center font-semibold text-prim-1 text-3xxl">
            Copy to clipboard. Paste in your website.
          </p>
        </article>

        <article className="flex justify-between w-10/12">
          <div className="rounded-xl w-72 h-64 bg-white" />
          <div className="rounded-xl w-72 h-64 bg-white" />
          <div className="rounded-xl w-72 h-64 bg-white" />
          <div className="rounded-xl w-72 h-64 bg-white" />
        </article>
      </section>

      <section className="flex flex-col w-full items-center gap-32">
        <div className="flex justify-between w-10/12 items-center">
          <article className="w-192 bg-prim-2 rounded-xl flex flex-col gap-10 min-h-72">
            <section className=" flex gap-3 bg-prim-3 min-h-9 items-center rounded-tr-xl rounded-tl-xl">
              <p className="pl-5 text-lg text-prim-1 font-semibold">
                index.html
              </p>
              <p className="text-lg font-semibold text-orange-600">&lt;/&gt;</p>
            </section>

            <p className="text-prim-1 text-xl font-semibold pl-5">
              &lt;a-scene embedded class=&quot;w-full h-full&quot;&gt;
              <br />
              &lt;a-torus color=&quot;#4CC3D9&quot; /&gt;
              <br />
              <br />
              &lt;a-sky color=&quot;#0000FF&quot; /&gt;
              <br />
              &lt;/a-scene&gt;
            </p>
          </article>

          <article className="flex flex-col gap-5 w-144">
            <h1 className="font-semibold text-prim-1 text-6xl">
              Want Fullscreen?
            </h1>
            <p className="font-semibold text-prim-1 text-3xxl">
              Remove embeded from your code. As simple as that.
            </p>
          </article>
        </div>

        <div className="flex justify-between w-10/12 items-center">
          <article className="flex flex-col gap-5 w-192">
            <h1 className="font-semibold text-prim-1 text-6xl">
              What about modifying the 3D?
            </h1>
            <p className="font-semibold text-prim-1 text-3xxl">
              Our projects are mostly made with A-Frame, the library that makes
              it all possible. Learn more{" "}
              <span onClick={() => openAFrame()} className="text-sky-500">
                here
              </span>
            </p>
          </article>

          {/* <a-scene embedded className="w-1/2 h-96">
            <a-box></a-box>
          </a-scene> */}
        </div>
      </section>
    </div>
  );
}

export default App;
