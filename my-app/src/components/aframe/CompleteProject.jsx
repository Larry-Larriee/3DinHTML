import React, { useState, useEffect, useRef } from "react";
import Project from "./Project";
import PropTypes from "prop-types";

CompleteProject.propTypes = {
  aframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

// CompleteProject is the main project UI in the explore page
// aframe (string): the aframe project that the user has created
// title (string): the title of the project
// description (string): the description of the project
// name (string): the name of the user. autofills via cookie if the user is logged in
// tags (array): the array of tags that the user has selected
export default function CompleteProject({
  aframe,
  title,
  description,
  name,
  tags,
}) {
  const [copied, setCopied] = useState(false);

  // strings that are JSON.parsed are automatically converted into js strings, meaning we can we \n to create a new line
  const clipboardAframe = () => {
    navigator.clipboard.writeText(
      `<!-- ${title} was created by ${name} --> \n ${aframe}`,
    );
    setCopied(true);
  };

  // the nature of useEffect is to run when the function dependency changes value.
  // if the user tries to spam the copy button, the useEffect will not spam the function because the copied state is still true
  // this means there will always be one setTimout running at a time
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);

      // cleanup function by clearing the timeout
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <section className="flex w-full flex-col gap-8 xl:flex-row xl:gap-12">
      <Project aframe={aframe} size={"big"} />

      <div className="flex max-w-80 flex-none flex-col gap-6 xl:w-80">
        <section className="flex flex-col">
          <h1 className="text-prim-2 dark:text-prim-1 font-league text-3xl font-semibold">
            {title}
          </h1>
          <p className="text-prim-2 dark:text-prim-1 font-league text-lg font-medium">
            {name}
          </p>
        </section>

        <div className="order-2 flex xl:order-1">
          <p className="text-prim-2 dark:text-prim-1 font-league text-xl">
            {description}
          </p>
        </div>

        {tags && (
          <div className="order-1 flex flex-wrap gap-3 xl:order-2">
            {tags.length !== 0 &&
              tags.map((tag) => {
                return (
                  <div className="flex" key={tag}>
                    <p className="bg-prim-4 dark:text-prim-1 rounded-3xl px-5 py-2 font-league text-lg text-white transition duration-200 ease-in-out hover:scale-105">
                      {tag}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
        {/* when the other element has a flex-none, the w-full or h-full is second to the other element's definite width or height */}
        <section className="order-3 flex h-full flex-col justify-end">
          {copied ? (
            <p
              className="dark:text-prim-1 bg-prim-6 w-40 rounded-2xl py-3 text-center text-xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
              onClick={() => clipboardAframe()}
            >
              Copied
            </p>
          ) : (
            <p
              className="dark:text-prim-1 bg-prim-5 w-40 rounded-2xl py-3 text-center text-xl font-semibold text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
              onClick={() => clipboardAframe()}
            >
              Copy Project
            </p>
          )}
        </section>
      </div>
    </section>
  );
}
