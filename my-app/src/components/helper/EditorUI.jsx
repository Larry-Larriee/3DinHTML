import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "aframe";

// this is a check making sure the props passed for title and description are strings
EditorUI.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionSize: PropTypes.string,
  highlight: PropTypes.string,
};

// EditorUI is a component that returns an example of a code editor. this code editor example is not a real code editor and is primarily used on the landing page
// title (string): the title of the code editor, such as index.html
// description (string): the description of the code editor aka the code part, but it can be text as well
// descriptionSize (string): the size of the description text. this can be text-xl or text-2xl
export default function EditorUI({
  title,
  description,
  descriptionSize = "text-2xl",
  highlight,
}) {
  let descriptionArr = description.split(highlight);

  return (
    <>
      {/* it's worth noting that w-full will take precidence over fixed widths like w-96 in a flexbox */}
      {/* w-96 will flex-shrink until flexbox decides it has enough space to undo the shrink */}
      <article className="xl:w-144 2xl:w-192 bg-sec-3 dark:bg-prim-2 order-2 flex min-h-72 w-full flex-col gap-5 rounded-xl lg:order-1">
        <section className="bg-sec-4 dark:bg-prim-3 flex min-h-9 items-center gap-3 rounded-tl-xl rounded-tr-xl">
          <p className="text-prim-2 dark:text-prim-1 pl-5 text-base font-semibold xl:text-lg">
            {title}
          </p>
          <p className="text-base font-semibold text-orange-600 xl:text-lg">
            &lt;/&gt;
          </p>
        </section>

        {/* the pre element allows react to interpret the \n as a JS string line break */}
        {/* javascript inside of a component return statement is converted into HTML (with the expection being js inside a pre element) */}
        {descriptionSize === "text-2xl" ? (
          <pre>
            <p className="text-prim-2 dark:text-prim-1 w-11/12 pl-5 text-xl font-medium leading-relaxed xl:w-10/12 xl:text-2xl">
              {highlight ? (
                <>
                  {descriptionArr[0]}
                  <span className="text-prim-5">{highlight}</span>
                  {descriptionArr[1]}
                </>
              ) : (
                description
              )}
            </p>
          </pre>
        ) : (
          // if the descriptionSize is not text-2xl, then it will automatically set to text-xl
          <pre>
            <p className="text-prim-2 dark:text-prim-1 w-11/12 pl-5 text-lg font-semibold leading-relaxed xl:w-10/12 xl:text-xl">
              {highlight ? (
                <>
                  {descriptionArr[0]}
                  <span className="text-prim-5">{highlight}</span>
                  {descriptionArr[1]}
                </>
              ) : (
                description
              )}
            </p>
          </pre>
        )}
      </article>
    </>
  );
}
