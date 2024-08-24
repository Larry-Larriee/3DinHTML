import React from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

Tags.propTypes = {
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
  changeTags: PropTypes.func.isRequired,
  tagOneRef: PropTypes.object.isRequired,
  tagTwoRef: PropTypes.object.isRequired,
  tagThreeRef: PropTypes.object.isRequired,
  tagFourRef: PropTypes.object.isRequired,
};

// The tags component renders tags that the user can select for their project. Users can select multiple tags and the useState will
// keep track of the tags that the user has selected in an array. The value of the tags are the same as the category name (innerHTML) such as "Gaming & Fun"
export default function Tags({
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
      <section className="xl:bg-sec-1 dark:shadow-none shadow-md dark:xl:bg-prim-2 flex w-full min-h-250 xl:px-16 xl:py-10 flex-col gap-8 rounded-xl relative">
        <h1 className="font-bold text-3xl xl:text-4xxl text-prim-2 dark:text-prim-1 font-league">
          Tags
        </h1>
        <p className="font-league text-prim-2 dark:text-prim-1 text-xl xl:text-2xl">
          Nice Work!
        </p>
        <p className="font-league text-prim-2 dark:text-prim-1 text-lg xl:text-xl">
          Now we&apos;re going to add tags for your project. Tags are how you
          can categorize your work. This will help others find your creations
          easier.
        </p>

        <div className="flex w-full gap-5 flex-wrap">
          <article
            ref={tagOneRef}
            onClick={() => changeTags(tagOneRef)}
            className="rounded-3xl bg-sec-2 dark:bg-prim-4 px-5 py-2 text-prim-2 dark:text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Gaming & Fun
          </article>

          <article
            ref={tagTwoRef}
            onClick={() => changeTags(tagTwoRef)}
            className="rounded-3xl bg-sec-2 dark:bg-prim-4 px-5 py-2 text-prim-2 dark:text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Educative
          </article>

          <article
            ref={tagThreeRef}
            onClick={() => changeTags(tagThreeRef)}
            className="rounded-3xl bg-sec-2 dark:bg-prim-4 px-5 py-2 text-prim-2 dark:text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
          >
            Lightweight
          </article>

          <article
            ref={tagFourRef}
            onClick={() => changeTags(tagFourRef)}
            className="rounded-3xl bg-sec-2 dark:bg-prim-4 px-5 py-2 text-prim-2 dark:text-prim-1 font-league text-lg hover:cursor-pointer transition duration-200 ease-in-out hover:scale-105"
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
