import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Dialog, DialogPanel } from "@headlessui/react";

Preview.propTypes = {
  userAframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  imageUpload: PropTypes.array.isRequired,
  changeConfirmed: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  changeSubmitted: PropTypes.func.isRequired,
};

let header =
  "<head><script src='https://aframe.io/releases/1.6.0/aframe.min.js'></script></head>";

let svgSelection = {
  featured: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#BE7C4D"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
      />
    </svg>
  ),
  recent: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#DE5456"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  games: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#648767"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
      />
    </svg>
  ),
  educative: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#9CAFB7"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-8.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  ),
  lightWeight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#EAD2AC"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  ),
  heavy: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#605B56"
      className="h-8 w-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
      />
    </svg>
  ),
};

// preview component will allow the user to see a preview of their a-frame project and how it will look like in the explore page
// userAframe (string): the aframe code that the user has written
// title (string): the title of the project
// description (string): the description of the project
// name (string): the name of the user
// tags (array): the tags that the user has selected
// imageUpload (array): the images that the user has uploaded
// changeConfirmed (function): function that will change the confirmed state to true and send user project to server
// submitted (boolean): the state that will determine if the preview should be open
// changeSubmitted (function): function that will change the submitted state to false and close the preview
export default function Preview({
  userAframe,
  title,
  description,
  name,
  tags,
  imageUpload,
  changeConfirmed,
  submitted,
  changeSubmitted,
}) {
  // generate local image URLs in the preview to use in the aframe.
  // useMemo removes the rerender complexies of useEffect and useState in that a useState would be a dependency and would rerun the function multiple times because it changes.
  // useMemo also removes the need to add temp states that I modify. I no longer need a modifiedAframe useState, and don't need to wait and assign the userAframe object to it.
  const modifiedAframe = useMemo(() => {
    let imageURLs = [];

    if (submitted) {
      for (let i = 0; i < imageUpload.length; i++) {
        let imageURL = URL.createObjectURL(imageUpload[i]);
        imageURLs.push(imageURL);
      }

      let modifiedAframeReplace = userAframe.replace(
        /src="([^"]+)"/g,
        "src='url'",
      );
      let modifiedAframeSplit = modifiedAframeReplace.split("url");
      for (let i = 0; i < imageURLs.length; i++) {
        modifiedAframeSplit.splice(i * 2 + 1, 0, `${imageURLs[i]}`);
      }

      // return the modified aframe with the image URLs
      let newAframe = modifiedAframeSplit.join("");
      return newAframe;
    }
  }, [imageUpload, userAframe, submitted]);

  return (
    <>
      {
        <Dialog
          open={submitted}
          onClose={() => changeSubmitted()}
          className="min-w-screen fixed inset-0 flex min-h-screen items-center justify-center"
        >
          <DialogPanel className="bg-sec-1 dark:bg-prim-3 relative z-30 flex h-5/6 w-11/12 flex-col gap-8 overflow-y-auto rounded-xl px-10 py-5 xl:w-10/12 xl:px-20 xl:py-12 2xl:w-3/4 3xl:w-2/3">
            <section className="flex flex-col gap-5">
              <p className="text-prim-2 dark:text-prim-1 font-league text-4xl font-bold">
                Project Preview
              </p>
              <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                When you&apos;re satisfied, click on the confirmation button.
                Otherwise, click anywhere outside the preview to make changes to
                your project.
              </p>
            </section>

            <section className="flex w-full flex-col justify-between gap-12 xl:flex-row">
              <article className="flex max-w-72 flex-none flex-col gap-8 xl:w-72">
                <div className="bg-sec-1 dark:bg-prim-4 flex items-center gap-3 rounded-xl py-2 pl-2 shadow-xl transition duration-200 ease-in-out hover:scale-105 dark:shadow-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="dark:text-prim-1 text-prim-2 dark:text-prim-1 h-8 w-8 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>

                  <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                    Search
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 transition duration-200 ease-in-out hover:scale-105">
                    {svgSelection["featured"]}
                    <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                      Featured
                    </p>
                  </div>
                  <div className="flex items-center gap-3 transition duration-200 ease-in-out hover:scale-105">
                    {svgSelection["recent"]}
                    <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                      Recent
                    </p>
                  </div>
                  <div className="flex items-center gap-3 transition duration-200 ease-in-out hover:scale-105">
                    {svgSelection["games"]}
                    <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                      Gaming & Fun
                    </p>
                  </div>
                  <div className="flex items-center gap-3 transition duration-200 ease-in-out hover:scale-105">
                    {svgSelection["educative"]}
                    <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                      Educative
                    </p>
                  </div>
                  <div className="flex items-center gap-3 transition duration-200 ease-in-out hover:scale-105">
                    {svgSelection["lightWeight"]}
                    <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                      Lightweight
                    </p>
                  </div>
                  <div className="flex items-center gap-3 transition duration-200 ease-in-out hover:scale-105">
                    {svgSelection["heavy"]}
                    <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
                      Heavy
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex w-full flex-col gap-10 xl:flex-row">
                <section className="flex max-w-72 lg:w-full lg:max-w-none xl:w-72 xl:flex-none">
                  {modifiedAframe && (
                    <iframe
                      className="h-56 w-full"
                      srcDoc={`${header} + ${modifiedAframe}`}
                    />
                  )}
                </section>

                <div className="flex flex-col lg:w-1/2 xl:w-auto">
                  <section className="flex min-h-56 w-full flex-none flex-col gap-5">
                    <div className="flex flex-col">
                      <p className="text-prim-2 dark:text-prim-1 font-league text-3xl font-semibold xl:text-2xl">
                        {title}
                      </p>
                      <p className="text-prim-2 dark:text-prim-1 font-league text-lg xl:text-sm">
                        {name}
                      </p>
                    </div>

                    <p className="text-prim-2 dark:text-prim-1 order-2 font-league text-xl xl:order-1 xl:text-base">
                      {description}
                    </p>

                    <article className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <p
                          key={"preview tag" + index}
                          className="bg-prim-2 dark:bg-prim-4 order-1 rounded-3xl px-4 py-2 font-league text-lg text-white transition duration-200 ease-in-out hover:scale-105 xl:order-2 xl:rounded-xl xl:px-3 xl:py-1 xl:text-sm"
                        >
                          {tag}
                        </p>
                      ))}
                    </article>

                    <div className="order-3 flex h-full flex-col justify-end xl:w-28">
                      <p className="dark:text-prim-1 bg-prim-5 w-40 rounded-2xl py-3 text-center text-xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer">
                        Copy Project
                      </p>
                    </div>
                  </section>
                </div>
              </article>
            </section>

            <p
              className="mt-5 rounded-xl bg-green-600 px-8 py-2 font-league text-2xl text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer xl:absolute xl:bottom-8 xl:right-20 xl:mt-0"
              onClick={() => changeConfirmed()}
            >
              Confirm
            </p>
          </DialogPanel>

          <div className="bg-prim-half-2 absolute inset-0 z-10 flex h-screen w-screen" />
        </Dialog>
      }
    </>
  );
}
