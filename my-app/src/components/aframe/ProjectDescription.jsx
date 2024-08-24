import React from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

ProjectDescription.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  changeTitleInputRef: PropTypes.object.isRequired,
  changeDescription: PropTypes.func.isRequired,
  changeDescriptionInputRef: PropTypes.object.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
};

// ProjectDescription component is used specifically for the contribute page
export default function ProjectDescription({
  changeTitle,
  changeTitleInputRef,
  changeDescription,
  changeDescriptionInputRef,
  changeCycleAdd,
  changeCycleRemove,
}) {
  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 flex w-full min-h-250 xl:px-16 xl:py-10 flex-col gap-8 rounded-xl relative shadow-md dark:shadow-none">
        <h1 className="font-bold text-3xl xl:text-4xxl text-prim-2 dark:text-prim-1 font-league">
          Project Description
        </h1>
        <p className="font-league text-prim-2 dark:text-prim-1 text-xl xl:text-2xl">
          Almost there!
        </p>
        <p className="font-league text-prim-2 dark:text-prim-1 text-lg xl:text-xl">
          Let&apos;s give your project a Title and Description. Something
          simple. And don&apos;t worry, you can leave your description blank if
          you can&apos;t think of anything.
        </p>

        <input
          type="text"
          className="h-12 bg-sec-2 dark:bg-prim-4 rounded-xl p-5 text-prim-2 dark:text-prim-1 placeholder-prim-2 dark:placeholder-gray-500 focus:outline-none"
          placeholder="Title"
          onChange={() => changeTitle()}
          ref={changeTitleInputRef}
        />

        <input
          type="text"
          className="h-12 bg-sec-2 dark:bg-prim-4 rounded-xl p-5 text-prim-2 dark:text-prim-1 placeholder-prim-2 dark:placeholder-gray-500 focus:outline-none"
          placeholder="Description"
          onChange={() => changeDescription()}
          ref={changeDescriptionInputRef}
        />

        <Cycle
          changeCycleRemove={changeCycleRemove}
          changeCycleAdd={changeCycleAdd}
        />
      </section>
    </>
  );
}
