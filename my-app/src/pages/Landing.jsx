import React from "react";

import Demo1 from "../components/aframe/Demo1";
import Project from "../components/aframe/Project";

import aFrameLogo from "../assets/aframe-logo.png";
import EditorUI from "../components/helper/EditorUI";

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

  // the theme should have already been set to dark by default through index.html, so we can toggle here
  let toggleTheme = () => {
    if (localStorage.getItem("theme") === "dark")
      localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", "dark");
  };

  return (
    <div className="flex w-full items-center gap-20 flex-col">
      <nav className="w-10/12 flex pt-10 justify-between items-center">
        <div className="flex gap-3 items-center">
          <h1 className="text-prim-2 dark:text-prim-1 text-6xl font-lemon">
            3D
          </h1>
          <p className="text-prim-2 dark:text-prim-1 text-3xl font-league">
            in HTML
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-12 h-12 hover:cursor-pointer hover:rotate-180 text-prim-2 duration-1000 transition ease-in-out dark:text-white hover:text-yellow-400"
          onClick={() => toggleTheme()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </nav>

      <section className="w-10/12 flex justify-between mb-24">
        <div className="flex flex-col gap-10 w-144">
          <h1 className="text-prim-2 dark:text-prim-1 font-bold xl:font-semibold text-4xl xl:text-5xxl">
            Enjoy Community-made 3D Components.
          </h1>
          <p className="font-bold xl:font-semibold text-prim-2 dark:text-prim-1 text-3xl xl:text-4xxl">
            Built with HTML. Free for everyone.
          </p>

          <article className="flex gap-8">
            <p
              onClick={openExplore}
              className="text-2xl font-semibold text-white dark:text-prim-1 rounded-xl py-2 px-5 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
            >
              Explore
            </p>
            <p
              onClick={openContribute}
              className="text-2xl font-semibold text-white dark:text-prim-1 rounded-xl py-2 px-5 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
            >
              Contribute
            </p>
          </article>
        </div>

        <Demo1 />
      </section>

      <section className="flex w-full justify-center xl:mb-12 flex-col gap-16 xl:gap-28 items-center py-16 bg-sec-1 dark:bg-prim-2">
        <article className="flex flex-col w-10/12 gap-5">
          <h1 className="text-prim-2 dark:text-prim-1 text-center font-semibold text-5xl xl:text-5xxl">
            Hundreds of projects
          </h1>
          <p className="text-center font-semibold text-prim-2 dark:text-prim-1 text-2xl xl:text-3xxl">
            Copy to clipboard. Paste in your website.
          </p>
        </article>

        <article className="grid grid-cols-2 xl:flex place-items-center gap-5 xl:justify-center lg:gap-10 w-10/12">
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

      <section className="flex flex-col w-full items-center gap-24 xl:gap-36 xl:mb-16">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-0 justify-between w-10/12 items-center">
          <EditorUI
            title={"index.html"}
            descriptionSize={"text-xl"}
            description={
              "<a-scene embedded class='w-full h-full'> \n\t <a-torus color='#4CC3D9' /> \n\n\t <a-sky color='#0000FF' /> \n </a-scene>"
            }
            highlight={"embedded"}
          />

          <article className="flex flex-col gap-5 w-full lg:144 xl:w-144 order-1 lg:order-2">
            <h1 className="font-semibold text-prim-2 dark:text-prim-1 text-5xl lg:text-4xl xl:text-5xxl">
              Want Fullscreen?
            </h1>
            <p className="font-semibold text-prim-2 dark:text-prim-1 text-2xl xl:text-3xxl leading-sm">
              Remove embeded from your code. As simple as that.
            </p>
          </article>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-10 w-10/12 items-center">
          <article className="flex flex-col gap-5 w-full  lg:w-144 xl:w-192">
            <h1 className="font-semibold text-prim-2 dark:text-prim-1 text-5xl lg:text-4xl xl:text-5xxl">
              What about modifying the 3D?
            </h1>
            <p className="font-semibold text-prim-2 dark:text-prim-1 text-2xl xl:text-3xxl leading-sm w-10/12">
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
            className="w-full lg:w-full xl:w-144 rounded-xl"
            draggable="false"
          />
        </div>

        <div className="flex justify-between w-10/12 flex-col lg:flex-row gap-10 xl:gap-0 items-center">
          <EditorUI
            title={"Sharing Project"}
            description={
              "You'd paste here. Your work will be given credit as well! No strings attached. Ever."
            }
          />

          <article className="flex flex-col gap-5 order-1 lg:order-2 w-full lg:w-144 xl:w-144">
            <h1 className="font-semibold text-prim-2 dark:text-prim-1 text-5xl lg:text-4xl xl:text-5xxl">
              I want to share my work!
            </h1>
            <p className="font-semibold text-prim-2 dark:text-prim-1 text-2xl xl:text-3xxl leading-sm w-11/12">
              It&apos;s nothing more than pasting your code, starting at{" "}
              <span className="text-green-500">&lt;a-scene&gt;</span>
            </p>
          </article>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 mb-16 mt-8">
        <p className="text-prim-2 dark:text-prim-1 text-2xl xl:text-4xxl font-semibold">
          that&apos;s enough reading lol.
        </p>

        <article className="flex w-full justify-between">
          <p
            onClick={openExplore}
            className="xl:text-2xxl font-semibold text-white dark:text-prim-1 rounded-xl py-2 px-4 text-xl xl:py-3 xl:px-10 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
          >
            Explore
          </p>
          <p
            onClick={openContribute}
            className="xl:text-2xxl font-semibold text-white dark:text-prim-1 rounded-xl py-2 px-4 text-xl xl:py-3 xl:px-10 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
          >
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
