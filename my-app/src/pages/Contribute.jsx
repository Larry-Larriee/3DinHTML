import React from "react";
import Navigation from "../components/Navigation";

import Step from "../components/helper/Step";

export default function Contribute() {
  return (
    <>
      <div className="flex w-full flex-col gap-12">
        <Navigation />

        <div className="w-full flex items-center justify-center gap-16 px-12">
          <article className="w-96 h-full flex-none flex flex-col gap-12 bg-prim-2 rounded-xl pt-10 pl-8 relative">
            <Step number={1} title={"Uploading Code"} />
            <Step number={2} title={"Uploading Images"} />
            <Step number={3} title={"Project Title"} />
            <Step number={4} title={"Project Description"} />
            <Step number={5} title={"Credits"} />

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 35 35"
              strokeWidth={1.5}
              stroke="#deded6"
              className="absolute -top-5 -right-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg> */}
          </article>

          <section className="bg-prim-2 flex w-full min-h-96 px-16 py-10 flex-col gap-8 rounded-xl">
            <h1 className="font-bold text-4xxl text-prim-1 font-league">
              Uploading Code
            </h1>
            <p className="font-league text-prim-1 text-2xl">
              We&apos;re so excited to have you here. Please paste your code
              below:
            </p>
            <p className="font-league text-prim-1 text-xl">
              If you&apos;re pasting assets which go into your folder (i.e.
              images/background.png), your a-frame environment will not work
              right away. Don&apos;t worry, this is where step 2 comes in.
            </p>

            <textarea className="overflow-y-auto w-11/12 h-64 resize-none bg-prim-4 rounded-xl" />

            <div className="flex justify-end w-11/12">
              <p className="text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center">
                Continue
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
