import React from "react";
import PropTypes from "prop-types";
import Cycle from "./helper/Cycle";

ProjectDescription.propTypes = {
  changeDescription: PropTypes.string.isRequired,
  changeDescriptionInputRef: PropTypes.object.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
};

// ProjectDescription component is used specifically for the contribute page
export default function ProjectDescription({
  changeDescription,
  changeDescriptionInputRef,
  changeCycleAdd,
  changeCycleRemove,
}) {
  return (
    <>
      <section className="bg-prim-2 flex w-full min-h-250 px-16 py-10 flex-col gap-8 rounded-xl relative">
        <h1 className="font-bold text-4xxl text-prim-1 font-league">
          Project Description
        </h1>
        <p className="font-league text-prim-1 text-2xl">Almost there!</p>
        <p className="font-league text-prim-1 text-xl">
          Let&apos;s give your project a description. Something simple. And
          don&apos;t worry, leaving your description blank is fine too.
        </p>

        <input
          type="text"
          className="h-12 bg-prim-4 rounded-xl p-5 text-prim-1"
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
