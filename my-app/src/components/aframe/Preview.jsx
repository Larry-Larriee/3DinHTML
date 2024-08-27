import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogPanel } from "@headlessui/react";

Preview.propTypes = {
  userAframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  changeConfirmed: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  changeSubmitted: PropTypes.func.isRequired,
};

let svgSelection = {
  featured: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#BE7C4D"
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
      className="w-8 h-8"
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
export default function Preview({
  userAframe,
  title,
  description,
  name,
  tags,
  changeConfirmed,
  submitted,
  changeSubmitted,
}) {
  return (
    <>
      {
        <Dialog
          open={submitted}
          onClose={() => changeSubmitted()}
          className="fixed inset-0 w-screen h-screen flex justify-center items-center"
        >
          <DialogPanel className="relative z-30 bg-sec-1 rounded-xl w-2/3 h-5/6 px-20 py-12 flex flex-col gap-8">
            <section className="flex flex-col gap-5">
              <p className="text-prim-2 text-4xl font-league font-bold">
                Project Preview
              </p>
              <p className="text-prim-2 text-xl font-league">
                When you&apos;re satisfied, click on the confirmation button.
                Otherwise, click anywhere outside the preview to make changes to
                your project.
              </p>
            </section>

            <section className="flex justify-between w-full gap-12">
              <article className="flex flex-col gap-8 flex-none w-72">
                <div className="flex gap-3 items-center bg-sec-1 dark:bg-prim-4 py-2 rounded-xl pl-2 shadow-xl hover:scale-105 duration-200 ease-in-out transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-8 h-8 flex-none dark:text-prim-1 text-prim-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>

                  <p className="text-prim-2 font-league text-xl">Search</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="items-center flex gap-3 hover:scale-105 duration-200 ease-in-out transition">
                    {svgSelection["featured"]}
                    <p className="text-xl font-league text-prim-2">Featured</p>
                  </div>
                  <div className="items-center flex gap-3 hover:scale-105 duration-200 ease-in-out transition">
                    {svgSelection["recent"]}
                    <p className="text-xl font-league text-prim-2">Recent</p>
                  </div>
                  <div className="items-center flex gap-3 hover:scale-105 duration-200 ease-in-out transition">
                    {svgSelection["games"]}
                    <p className="text-xl font-league text-prim-2">
                      Gaming & Fun
                    </p>
                  </div>
                  <div className="items-center flex gap-3 hover:scale-105 duration-200 ease-in-out transition">
                    {svgSelection["educative"]}
                    <p className="text-xl font-league text-prim-2">Educative</p>
                  </div>
                  <div className="items-center flex gap-3 hover:scale-105 duration-200 ease-in-out transition">
                    {svgSelection["lightWeight"]}
                    <p className="text-xl font-league text-prim-2">
                      Lightweight
                    </p>
                  </div>
                  <div className="items-center flex gap-3 hover:scale-105 duration-200 ease-in-out transition">
                    {svgSelection["heavy"]}
                    <p className="text-xl font-league text-prim-2">Heavy</p>
                  </div>
                </div>
              </article>

              <article className="flex w-full gap-10">
                <section className="flex-none w-72">
                  <div className="bg-gray-300 w-full h-56"></div>
                </section>

                <div className="flex flex-col">
                  <section className="flex flex-col gap-5 w-full min-h-56 flex-none">
                    <div className="flex flex-col">
                      <p className="font-league text-2xl text-prim-2">
                        {title}
                      </p>
                      <p className="font-league text-sm text-prim-2">{name}</p>
                    </div>

                    <p className="font-league text-base text-prim-2">
                      {description}
                    </p>

                    <article className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <p
                          key={"preview tag" + index}
                          className="bg-prim-2 text-white px-3 py-1 text-sm font-league rounded-xl hover:scale-105 duration-200 ease-in-out transition"
                        >
                          {tag}
                        </p>
                      ))}
                    </article>

                    <div className="flex flex-col justify-end w-28 h-full">
                      <p className="bg-prim-5 py-1 rounded-lg text-white font-league text-base text-center hover:scale-105 duration-200 ease-in-out transition">
                        Copy Project
                      </p>
                    </div>
                  </section>
                </div>
              </article>
            </section>

            <p
              className="absolute bottom-8 right-20 py-2 px-8 bg-green-600 font-league text-2xl rounded-xl text-white hover:scale-105 duration-200 transition ease-in-out hover:cursor-pointer"
              onClick={() => changeConfirmed()}
            >
              Confirm
            </p>
          </DialogPanel>

          <div className="inset-0 flex w-screen h-screen absolute bg-prim-half-2 z-10" />
        </Dialog>
      }
    </>
  );
}
