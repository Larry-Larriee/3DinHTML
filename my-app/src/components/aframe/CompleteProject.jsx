import React, { useState, useEffect } from "react";
import Project from "./Project";
import PropTypes from "prop-types";

CompleteProject.propTypes = {
  aframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

// used specifically for the explore page
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
      `<!-- ${title} was created by ${name} --> \n ${aframe}`
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
    <section className="flex gap-8 xl:gap-12 w-full flex-col xl:flex-row">
      <Project aframe={aframe} size={"big"} />

      <div className="flex flex-none max-w-80 xl:w-80 flex-col gap-6">
        <section className="flex flex-col">
          <h1 className="text-prim-2 dark:text-prim-1 font-semibold font-league text-3xl">
            {title}
          </h1>
          <p className="text-prim-2 dark:text-prim-1 font-medium font-league text-lg">
            {name}
          </p>
        </section>

        <div className="flex order-2 xl:order-1">
          <p className="font-league text-prim-2 dark:text-prim-1 text-xl">
            {description}
          </p>
        </div>

        {tags && (
          <div className="flex gap-3 order-1 xl:order-2">
            {tags.length !== 0 &&
              tags.map((tag) => {
                return (
                  <div className="flex" key={tag}>
                    <p className="bg-prim-4 rounded-3xl px-5 py-2 text-white dark:text-prim-1 font-league text-lg hover:scale-105 ease-in-out duration-200 transition">
                      {tag}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
        {/* when the other element has a flex-none, the w-full or h-full is second to the other element's definite width or height */}
        <section className="flex h-full justify-end flex-col order-3">
          {copied ? (
            <p
              className="text-white dark:text-prim-1 bg-prim-6 w-40 text-center py-3 rounded-2xl font-semibold text-xl hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out"
              onClick={() => clipboardAframe()}
            >
              Copied
            </p>
          ) : (
            <p
              className="text-white dark:text-prim-1 bg-prim-5 w-40 text-center py-3 rounded-2xl font-semibold text-xl hover:cursor-pointer hover:scale-105 duration-200 transition ease-in-out"
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
