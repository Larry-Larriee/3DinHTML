import React from "react";
import PropTypes from "prop-types";
import "aframe";

// this is a check making sure the props passed for title and description are strings
EditorUI.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  descriptionSize: PropTypes.string,
};

// EditorUI is a component that returns an example of a code editor
export default function EditorUI({
  title,
  description,
  descriptionSize = "text-2xl",
}) {
  return (
    <>
      <article className="w-192 bg-prim-2 rounded-xl flex flex-col gap-5 min-h-72">
        <section className=" flex gap-3 bg-prim-3 min-h-9 items-center rounded-tr-xl rounded-tl-xl">
          <p className="pl-5 text-lg text-prim-1 font-semibold">{title}</p>
          <p className="text-lg font-semibold text-orange-600">&lt;/&gt;</p>
        </section>

        {/* the pre element allows react to interpret the \n as a JS string line break */}
        {descriptionSize === "text-2xl" ? (
          <pre>
            <p className="text-prim-1 text-2xl leading-relaxed font-semibold pl-5 w-10/12">
              {description}
            </p>
          </pre>
        ) : (
          // if the descriptionSize is not text-2xl, then it will automatically set to text-xl
          <pre>
            <p className="text-prim-1 text-xl leading-relaxed font-semibold pl-5 w-10/12">
              {description}
            </p>
          </pre>
        )}
      </article>
    </>
  );
}
