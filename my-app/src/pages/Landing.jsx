import React, { useState, useEffect, useRef } from "react";

import Demo1 from "../components/aframe/Demo1";
import Project from "../components/aframe/Project";

import aFrameLogo from "../assets/aframe-logo.png";
import EditorUI from "../components/helper/EditorUI";
import UseTheme from "../components/hooks/UseTheme";

function App() {
  let openAFrame = () => {
    window.open("https://aframe.io/", "_blank");
  };
  let openExplore = () => {
    window.location.href = "/explore";
  };
  let openContribute = () => {
    window.location.href = "/contribute";
  };

  let { theme, toggleTheme } = UseTheme();

  return (
    <div className="flex w-full flex-col items-center gap-20">
      <nav className="flex w-10/12 items-center justify-between pt-10">
        <div className="flex items-center gap-3">
          <h1 className="text-prim-2 dark:text-prim-1 font-lemon text-6xl">
            3D
          </h1>
          <p className="text-prim-2 dark:text-prim-1 font-league text-3xl">
            in HTML
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="text-prim-2 h-12 w-12 transition duration-1000 ease-in-out hover:rotate-180 hover:cursor-pointer hover:text-yellow-400 active:text-orange-500 dark:text-white"
          onClick={() => toggleTheme()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </nav>

      <section className="mb-24 flex w-10/12 justify-between">
        <div className="w-144 flex flex-col gap-10">
          <h1 className="text-prim-2 dark:text-prim-1 xl:text-5xxl text-4xl font-bold xl:font-semibold">
            Enjoy Community-made 3D Components.
          </h1>
          <p className="text-prim-2 dark:text-prim-1 xl:text-4xxl text-3xl font-bold xl:font-semibold">
            Built with HTML. Free for everyone.
          </p>

          <article className="flex gap-8">
            <p
              onClick={openExplore}
              className="dark:text-prim-1 rounded-xl bg-orange-600 px-5 py-2 text-2xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              Explore
            </p>
            <p
              onClick={openContribute}
              className="dark:text-prim-1 rounded-xl bg-orange-600 px-5 py-2 text-2xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
            >
              Contribute
            </p>
          </article>
        </div>

        <Demo1 theme={theme} />
      </section>

      <section className="bg-sec-3 dark:bg-prim-2 flex w-full flex-col items-center justify-center gap-16 py-16 xl:mb-12 xl:gap-28">
        <article className="flex w-10/12 flex-col gap-5">
          <h1 className="text-prim-2 dark:text-prim-1 xl:text-5xxl text-center text-5xl font-semibold">
            Hundreds of projects
          </h1>
          <p className="text-prim-2 dark:text-prim-1 xl:text-3xxl text-center text-2xl font-semibold">
            Copy to clipboard. Paste in your website.
          </p>
        </article>

        <article className="grid w-10/12 grid-cols-2 place-items-center gap-5 lg:gap-10 xl:flex xl:justify-center">
          <Project
            aframe={
              '<a-scene renderer="antialias: true;"><a-sky color="#001337"></a-sky><a-plane width="100" height="100" position=" 0.00 0.00 0.00" rotation="-90 0 0" color="#666666" shadow="cast: false; receive: true"></a-plane><a-torus-knot p="2" q="3" radius="0.5" radius-tubular="0.1" position="-2.5 1.5 -4" color="#CC3333" shadow="cast: true; receive: true"></a-torus-knot><a-box width="2" height="1" depth="1" position="-1 0.5 -3" rotation="0 45 0" color="#FF8800" shadow="cast: true; receive: true"></a-box><a-sphere radius="1.25" position="0 1.25 -5" color="#DDBB00" shadow="cast: true; receive: true"></a-sphere><a-cylinder radius="0.5" height="1.5" position=" 1 0.75 -3" color="#008800" shadow="cast: true; receive: true"></a-cylinder><a-cone radius-bottom="1" radius-top="0" height="2" position="3 1 -4" color="#4444CC" shadow="cast: true; receive: true"></a-cone><a-torus radius="0.5" radius-tubular="0.1" position="2 3 -4" rotation="30 -20 0" color="#8800FF" shadow="cast: true; receive: true"></a-torus></a-scene>'
            }
          />
          <Project
            aframe={
              '<a-scene><a-assets><img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"><img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"></a-assets><a-entity id="lightSphere" geometry="primitive: sphere; radius: 0.2" material="shader: flat" light="type: point; color: #FFF" position="-4 3 -4" animation="property: position; to: 4 2.8 -4; dir: alternate; loop: true"></a-entity><a-entity geometry="primitive: box" material="color: red" position="0 0.5 -10"></a-entity><a-entity geometry="primitive: box" material="color: orange" position="-2 0.5 -8"></a-entity><a-entity geometry="primitive: box" material="color: yellow" position="2 0.5 -8"></a-entity><a-entity geometry="primitive: box" material="color: green" position="-4 0.5 -6"></a-entity><a-entity geometry="primitive: box" material="color: blue" position="4 0.5 -6"></a-entity><a-entity id="sky" geometry="primitive: sphere; thetaLength: 90; radius: 30" material="side: back; height: 2048; width: 2048; src: #skyTexture; shader: flat"></a-entity><a-entity light="type: ambient; color: #222"></a-entity><a-entity light="type: directional; color: #111" position="-1 1 0"></a-entity><a-entity id="ground" geometry="primitive: plane; height: 100; width: 100" material="src: #groundTexture" rotation="-90 0 0"></a-entity><a-entity id="text" text="value: Show us the light!; color: #BBB" position="2.5 2 -8" scale="8 8 8"></a-entity></a-scene>'
            }
          />
          <Project
            aframe={
              '<a-scene renderer="antialias: true;"><a-sky color="#001337"></a-sky><a-plane width="100" height="100" position=" 0.00 0.00 0.00" rotation="-90 0 0" color="#666666" shadow="cast: false; receive: true"></a-plane><a-torus-knot p="2" q="3" radius="0.5" radius-tubular="0.1" position="-2.5 1.5 -4" color="#CC3333" shadow="cast: true; receive: true"></a-torus-knot><a-box width="2" height="1" depth="1" position="-1 0.5 -3" rotation="0 45 0" color="#FF8800" shadow="cast: true; receive: true"></a-box><a-sphere radius="1.25" position="0 1.25 -5" color="#DDBB00" shadow="cast: true; receive: true"></a-sphere><a-cylinder radius="0.5" height="1.5" position=" 1 0.75 -3" color="#008800" shadow="cast: true; receive: true"></a-cylinder><a-cone radius-bottom="1" radius-top="0" height="2" position="3 1 -4" color="#4444CC" shadow="cast: true; receive: true"></a-cone><a-torus radius="0.5" radius-tubular="0.1" position="2 3 -4" rotation="30 -20 0" color="#8800FF" shadow="cast: true; receive: true"></a-torus></a-scene>'
            }
          />
          <Project
            aframe={
              '<a-scene><a-assets><img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"><img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"></a-assets><a-entity id="lightSphere" geometry="primitive: sphere; radius: 0.2" material="shader: flat" light="type: point; color: #FFF" position="-4 3 -4" animation="property: position; to: 4 2.8 -4; dir: alternate; loop: true"></a-entity><a-entity geometry="primitive: box" material="color: red" position="0 0.5 -10"></a-entity><a-entity geometry="primitive: box" material="color: orange" position="-2 0.5 -8"></a-entity><a-entity geometry="primitive: box" material="color: yellow" position="2 0.5 -8"></a-entity><a-entity geometry="primitive: box" material="color: green" position="-4 0.5 -6"></a-entity><a-entity geometry="primitive: box" material="color: blue" position="4 0.5 -6"></a-entity><a-entity id="sky" geometry="primitive: sphere; thetaLength: 90; radius: 30" material="side: back; height: 2048; width: 2048; src: #skyTexture; shader: flat"></a-entity><a-entity light="type: ambient; color: #222"></a-entity><a-entity light="type: directional; color: #111" position="-1 1 0"></a-entity><a-entity id="ground" geometry="primitive: plane; height: 100; width: 100" material="src: #groundTexture" rotation="-90 0 0"></a-entity><a-entity id="text" text="value: Show us the light!; color: #BBB" position="2.5 2 -8" scale="8 8 8"></a-entity></a-scene>'
            }
          />
        </article>
      </section>

      <section className="flex w-full flex-col items-center gap-24 xl:mb-16 xl:gap-36">
        <div className="flex w-10/12 flex-col items-center justify-between gap-10 lg:flex-row xl:gap-0">
          <EditorUI
            title={"index.html"}
            descriptionSize={"text-xl"}
            description={
              "<a-scene embedded class='w-full h-full'> \n\t <a-torus color='#4CC3D9' /> \n\n\t <a-sky color='#0000FF' /> \n </a-scene>"
            }
            highlight={"embedded"}
          />

          <article className="lg:144 xl:w-144 order-1 flex w-full flex-col gap-5 lg:order-2">
            <h1 className="text-prim-2 dark:text-prim-1 xl:text-5xxl text-5xl font-semibold lg:text-4xl">
              Want Fullscreen?
            </h1>
            <p className="text-prim-2 dark:text-prim-1 xl:text-3xxl leading-sm text-2xl font-semibold">
              Remove embeded from your code. As simple as that.
            </p>
          </article>
        </div>

        <div className="flex w-10/12 flex-col items-center justify-between gap-10 lg:flex-row xl:gap-10">
          <article className="lg:w-144 xl:w-192 flex w-full flex-col gap-5">
            <h1 className="text-prim-2 dark:text-prim-1 xl:text-5xxl text-5xl font-semibold lg:text-4xl">
              What about modifying the 3D?
            </h1>
            <p className="text-prim-2 dark:text-prim-1 xl:text-3xxl leading-sm w-10/12 text-2xl font-semibold">
              Our projects are mostly made with A-Frame. Learn more{" "}
              <span
                onClick={() => openAFrame()}
                className="text-sky-500 hover:cursor-pointer"
              >
                here.
              </span>{" "}
              Try hitting Crtl + Alt + I on one of them!
            </p>
          </article>

          <img
            src={aFrameLogo}
            alt="A-Frame Logo"
            className="xl:w-144 w-full rounded-xl lg:w-full"
            draggable="false"
          />
        </div>

        <div className="flex w-10/12 flex-col items-center justify-between gap-10 lg:flex-row xl:gap-0">
          <EditorUI
            title={"Sharing Project"}
            description={
              "You'd paste here. Your work will be given credit as well! No strings attached. Ever."
            }
          />

          <article className="lg:w-144 xl:w-144 order-1 flex w-full flex-col gap-5 lg:order-2">
            <h1 className="text-prim-2 dark:text-prim-1 xl:text-5xxl text-5xl font-semibold lg:text-4xl">
              I want to share my work!
            </h1>
            <p className="text-prim-2 dark:text-prim-1 xl:text-3xxl leading-sm w-11/12 text-2xl font-semibold">
              It&apos;s nothing more than pasting your code, starting at{" "}
              <span className="text-green-500">&lt;a-scene&gt;</span>
            </p>
          </article>
        </div>
      </section>

      <section className="mb-16 mt-8 flex flex-col items-center gap-5">
        <p className="text-prim-2 dark:text-prim-1 xl:text-4xxl text-2xl font-semibold">
          that&apos;s enough reading lol.
        </p>

        <article className="flex w-full justify-between">
          <p
            onClick={openExplore}
            className="xl:text-2xxl dark:text-prim-1 rounded-xl bg-orange-600 px-4 py-2 text-xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer xl:px-10 xl:py-3"
          >
            Explore
          </p>
          <p
            onClick={openContribute}
            className="xl:text-2xxl dark:text-prim-1 rounded-xl bg-orange-600 px-4 py-2 text-xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer xl:px-10 xl:py-3"
          >
            Contribute
          </p>
        </article>
      </section>

      <footer className="relative w-full">
        <p className="text-prim-2 absolute bottom-2 left-5 font-league text-base dark:text-white">
          ©2024 Larry Le MIT License
        </p>
      </footer>
    </div>
  );
}

export default App;
