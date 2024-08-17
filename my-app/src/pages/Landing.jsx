import Demo1 from "../components/aframe/Demo1";
import Project from "../components/aframe/Project";

import Navigation from "../components/Navigation";

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

  return (
    <div className="flex w-full items-center flex-col gap-20">
      <nav className="w-10/12 flex gap-3 pt-10 items-center">
        <h1 className="text-prim-1 text-6xl font-lemon">3D</h1>
        <p className="text-prim-1 text-3xl font-league">in HTML</p>
      </nav>

      <section className="w-10/12 flex justify-between mb-24">
        <div className="flex flex-col gap-10 w-144">
          <h1 className="text-prim-1 font-bold xl:font-semibold text-4xl xl:text-5xxl">
            Enjoy Community-made 3D Components.
          </h1>
          <p className="font-bold xl:font-semibold text-prim-1 text-3xl xl:text-4xxl">
            Built with HTML. Free for everyone.
          </p>

          <article className="flex gap-8">
            <p
              onClick={openExplore}
              className="text-2xl font-semibold text-prim-1 rounded-xl py-2 px-5 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
            >
              Explore
            </p>
            <p
              onClick={openContribute}
              className="text-2xl font-semibold text-prim-1 rounded-xl py-2 px-5 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
            >
              Contribute
            </p>
          </article>
        </div>

        <Demo1 />
      </section>

      <section className="flex w-full justify-center xl:mb-12 flex-col gap-16 xl:gap-28 items-center py-16 bg-prim-2">
        <article className="flex flex-col w-10/12 gap-5">
          <h1 className="text-prim-1 text-center font-semibold text-5xl xl:text-5xxl">
            Hundreds of projects
          </h1>
          <p className="text-center font-semibold text-prim-1 text-2xl xl:text-3xxl">
            Copy to clipboard. Paste in your website.
          </p>
        </article>

        <article className="grid grid-cols-2 xl:flex place-items-center gap-5 xl:justify-center lg:gap-10 w-10/12">
          <Project aframe={"<a-scene><a-box color='#4CC3D9' /></a-scene>"} />
          <Project
            aframe={
              "<a-scene><a-assets><img id='skyTexture' src='https://cdn.aframe.io/a-painter/images/sky.jpg' crossOrigin='anonymous'></a-assets><a-entity geometry='primitive: box' material='color: red' position='-2, 0, -4'></a-entity><a-entity geometry='primitive: box' material='color: green' position='0, 0, -4'></a-entity><a-entity geometry='primitive: box' material='color: blue' position='2, 0, -4'></a-entity> <a-sky src='#skyTexture'></a-sky> <a-camera></a-camera></a-scene>"
            }
          />
          <Project
            aframe={
              "<a-scene><a-assets><img id='city' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/img/city.jpg'><img id='city-thumb' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-city.jpg'><img id='cubes-thumb' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-cubes.jpg'><img id='sechelt-thumb' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/img/thumb-sechelt.jpg'><audio id='click-sound' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg'></audio><img id='cubes' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/img/cubes.jpg'><img id='sechelt' crossorigin='anonymous' src='https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg'<!-- Image link template to be reused. --><script id='link' type='text/html'><a-entity class='link'geometry='primitive: plane; height: 1; width: 1'material='shader: flat; src: ${thumb}'event-set__1='_event: mousedown; scale: 1 1 1'event-set__2='_event: mouseup; scale: 1.2 1.2 1'event-set__3='_event: mouseenter; scale: 1.2 1.2 1'event-set__4='_event: mouseleave; scale: 1 1 1'set-image='on: click; target: #image-360; src: ${src}'sound='on: click; src: #click-sound'></a-entity></script></a-assets><a-sky id='image-360' radius='10' src='#city'></a-sky<!-- Image links. --><a-entity id='links' layout='type: line; margin: 1.5' position='0 -1 -4'><a-entity template='src: #link' data-src='#cubes' data-thumb='#cubes-thumb'></a-entity><a-entity template='src: #link' data-src='#city' data-thumb='#city-thumb'></a-entity>  <a-entity template='src: #link' data-src='#sechelt' data-thumb='#sechelt-thumb'></a-entity></a-entity><a-camera><a-cursor id='cursor'></a-cursor></a-camera></a-scene>"
            }
          />
          <Project
            aframe={
              "<a-scene><a-assets><img id='skyTexture' src='https://cdn.aframe.io/a-painter/images/sky.jpg' crossOrigin='anonymous'></a-assets><a-entity geometry='primitive: box' material='color: red' position='-2, 0, -4'></a-entity><a-entity geometry='primitive: box' material='color: green' position='0, 0, -4'></a-entity><a-entity geometry='primitive: box' material='color: blue' position='2, 0, -4'></a-entity> <a-sky src='#skyTexture'></a-sky> <a-camera></a-camera></a-scene>"
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
              "<a-scene embedded class='w-full h-full'>\n\t<a-torus color='#4CC3D9' />\n\n\t<a-sky color='#0000FF' />\n</a-scene>"
            }
          />

          <article className="flex flex-col gap-5 w-full lg:144 xl:w-144 order-1 lg:order-2">
            <h1 className="font-semibold text-prim-1 text-5xl lg:text-4xl xl:text-5xxl">
              Want Fullscreen?
            </h1>
            <p className="font-semibold text-prim-1 text-2xl xl:text-3xxl leading-sm">
              Remove embeded from your code. As simple as that.
            </p>
          </article>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-10 xl:gap-10 w-10/12 items-center">
          <article className="flex flex-col gap-5 w-full  lg:w-144 xl:w-192">
            <h1 className="font-semibold text-prim-1 text-5xl lg:text-4xl xl:text-5xxl">
              What about modifying the 3D?
            </h1>
            <p className="font-semibold text-prim-1 text-2xl xl:text-3xxl leading-sm w-10/12">
              Our projects are mostly made with A-Frame. Learn more{" "}
              <span
                onClick={() => openAFrame()}
                className="text-sky-500 hover:cursor-pointer"
              >
                here.
              </span>{" "}
              You should also try hitting Crtl + Alt + I
            </p>
          </article>

          <img
            src={aFrameLogo}
            alt="A-Frame Logo"
            className="w-full lg:w-full xl:w-144"
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
            <h1 className="font-semibold text-prim-1 text-5xl lg:text-4xl xl:text-5xxl">
              I want to share my work!
            </h1>
            <p className="font-semibold text-prim-1 text-2xl xl:text-3xxl leading-sm w-11/12">
              It&apos;s nothing more than pasting your code, starting at{" "}
              <span className="text-green-500">&lt;a-scene&gt;</span>
            </p>
          </article>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 mb-10">
        <p className="text-prim-1 text-2xl xl:text-4xxl font-semibold">
          that&apos;s enough reading lol.
        </p>

        <article className="flex w-full justify-between">
          <p
            onClick={openExplore}
            className="xl:text-2xxl font-semibold text-prim-1 rounded-xl py-2 px-4 text-xl xl:py-3 xl:px-10 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
          >
            Explore
          </p>
          <p
            onClick={openContribute}
            className="xl:text-2xxl font-semibold text-prim-1 rounded-xl py-2 px-4 text-xl xl:py-3 xl:px-10 hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out bg-orange-600"
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
