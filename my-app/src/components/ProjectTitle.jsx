import React from "react";
import PropTypes from "prop-types";
import Cycle from "./helper/Cycle";

ProjectTitle.propTypes = {
  changeTitle: PropTypes.func.isRequired,
  changeTitleInputRef: PropTypes.object.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
};

// ProjectTitle component is used specifically for the contribute page
export default function ProjectTitle({
  changeTitle,
  changeTitleInputRef,
  changeCycleAdd,
  changeCycleRemove,
}) {
  return (
    <>
      <section className="bg-prim-2 flex w-full min-h-250 px-16 py-10 flex-col gap-8 rounded-xl relative">
        <h1 className="font-bold text-4xxl text-prim-1 font-league">
          Project Title
        </h1>
        <p className="font-league text-prim-1 text-2xl">
          You&apos;re doing great!
        </p>
        <p className="font-league text-prim-1 text-xl">
          Let&apos;s give your project a name. This will be the first thing
          people see, so make it memorable (and clean please).
        </p>

        <input
          type="text"
          className="h-12 bg-prim-4 rounded-xl p-5 text-prim-1 focus:outline-none"
          onChange={() => changeTitle()}
          ref={changeTitleInputRef}
        />

        <Cycle
          changeCycleRemove={changeCycleRemove}
          changeCycleAdd={changeCycleAdd}
        />
      </section>
    </>
  );
}
