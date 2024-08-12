import { useState } from "react";
import Demo from "./components/Demo";
import Navigation from "./components/Navigation";

import aFrameLogo from "./assets/aframe-logo.png";
import EditorUI from "./components/helper/EditorUI";

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

      <section className="flex flex-col w-full items-center gap-36 mb-16">
        <div className="flex justify-between w-10/12 items-center">
          <EditorUI
            title={"index.html"}
            descriptionSize={"text-xl"}
            description={
              "<a-scene embedded class='w-full h-full'>\n\t<a-torus color='#4CC3D9' />\n\n\t<a-sky color='#0000FF' />\n</a-scene>"
            }
          />

          <article className="flex flex-col gap-5 w-144">
            <h1 className="font-semibold text-prim-1 text-5xxl">
              Want Fullscreen?
            </h1>
            <p className="font-semibold text-prim-1 text-3xxl leading-sm">
              Remove embeded from your code. As simple as that.
            </p>
          </article>
        </div>

        <div className="flex justify-between w-10/12 items-center">
          <article className="flex flex-col gap-5 w-192">
            <h1 className="font-semibold text-prim-1 text-5xxl">
              What about modifying the 3D?
            </h1>
            <p className="font-semibold text-prim-1 text-3xxl leading-sm w-10/12">
              Our projects are mostly made with A-Frame. Learn more{" "}
              <span
                onClick={() => openAFrame()}
                className="text-sky-500 hover:cursor-pointer "
              >
                here.
              </span>{" "}
              You should also try hitting Crtl + Alt + I
            </p>
          </article>

          <img src={aFrameLogo} alt="A-Frame Logo" className="w-96" />
        </div>

        <div className="flex justify-between w-10/12 items-center">
          <EditorUI
            title={"Sharing Project"}
            description={
              "You'd paste here. Your work will be given credit as well! No strings attached. Ever."
            }
          />

          <article className="flex flex-col gap-5 w-144">
            <h1 className="font-semibold text-prim-1 text-5xxl">
              I want to share my work!
            </h1>
            <p className="font-semibold text-prim-1 text-3xxl leading-sm w-11/12">
              It&apos;s nothing more than pasting your code, starting at{" "}
              <span className="text-green-500">&lt;a-scene&gt;</span>
            </p>
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-5 mb-10">
        <p className="text-prim-1 text-4xxl font-semibold">
          that&apos;s enough reading lol.
        </p>

        <article className="flex justify-between">
          <p className="text-2xxl font-semibold text-prim-1 rounded-xl py-3 px-10 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600">
            Explore
          </p>
          <p className="text-2xxl font-semibold text-prim-1 rounded-xl py-3 px-10 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600">
            Contribute
          </p>
        </article>
      </section>

      <footer className="relative w-full">
        <p className="text-white text-base font-league absolute left-5 bottom-2">
          ©2024 Larry Le MIT License
        </p>
      </footer>
    </div>
  );
}

export default App;
