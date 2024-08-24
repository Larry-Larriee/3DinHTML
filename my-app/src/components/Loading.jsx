import React from "react";
import PropTypes from "prop-types";

Loading.propTypes = {
  projects: PropTypes.array.isRequired,
  changeMaxProjects: PropTypes.func.isRequired,
};

// the Loading component applies lazy loading to render in more 3D projects when the user clicks on the button
export default function Loading({ projects, changeMaxProjects }) {
  return (
    <>
      {/* flexbox is child to parent. the <p> specifies the width and height of the parent in this case. */}
      {/* this prevents the <p> from automatically taking the max width of the grandparent */}
      {projects.length > 3 && (
        <div className="flex">
          <p
            onClick={() => changeMaxProjects()}
            className="px-5 py-3 bg-prim-5 text-xl rounded-xl text-white dark:text-prim-1 font-semibold hover:cursor-pointer duration-200 ease-in-out transition hover:scale-105"
          >
            Load More Projects
          </p>
        </div>
      )}
    </>
  );
}
