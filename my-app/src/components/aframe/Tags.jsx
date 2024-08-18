import React from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

ProjectDescription.propTypes = {
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
  changeTags: PropTypes.func.isRequired,
  tagOneRef: PropTypes.object.isRequired,
  tagTwoRef: PropTypes.object.isRequired,
  tagThreeRef: PropTypes.object.isRequired,
  tagFourRef: PropTypes.object.isRequired,
};

// ProjectDescription component is used specifically for the contribute page
export default function ProjectDescription({
  changeTags,
  tagOneRef,
  tagTwoRef,
  tagThreeRef,
  tagFourRef,
  changeCycleAdd,
  changeCycleRemove,
}) {
  return (
    <>
      <section className="bg-prim-2 flex w-full min-h-250 px-16 py-10 flex-col gap-8 rounded-xl relative">
        <h1 className="font-bold text-4xxl text-prim-1 font-league">Tags</h1>
        <p className="font-league text-prim-1 text-2xl">Nice Work!</p>
        <p className="font-league text-prim-1 text-xl">
          Now we&apos;re going to add tags for your project. Tags are how you
          can categorize your work. This will help others find your creations
          easier.
        </p>

        <div className="flex w-full gap-5 items-center">
          <article
            ref={tagOneRef}
            onClick={() => changeTags(tagOneRef)}
            className="rounded-3xl bg-prim-4 px-5 py-2 text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Gaming & Fun
          </article>

          <article
            ref={tagTwoRef}
            onClick={() => changeTags(tagTwoRef)}
            className="rounded-3xl bg-prim-4 px-5 py-2 text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Educative
          </article>

          <article
            ref={tagThreeRef}
            onClick={() => changeTags(tagThreeRef)}
            className="rounded-3xl bg-prim-4 px-5 py-2 text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Lightweight
          </article>

          <article
            ref={tagFourRef}
            onClick={() => changeTags(tagFourRef)}
            className="rounded-3xl bg-prim-4 px-5 py-2 text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Needs Strong PC
          </article>
        </div>

        <Cycle
          changeCycleRemove={changeCycleRemove}
          changeCycleAdd={changeCycleAdd}
        />
      </section>
    </>
  );
}
