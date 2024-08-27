import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
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
  tags,
  changeTags,
  tagOneRef,
  tagTwoRef,
  tagThreeRef,
  tagFourRef,
  changeCycleAdd,
  changeCycleRemove,
}) {
  useEffect(() => {
    if (tags.includes(tagOneRef.current.innerText)) {
      tagOneRef.current.style.backgroundColor = "#15803d";
      tagOneRef.current.style.color = "#ffffff";
    }
    if (tags.includes(tagTwoRef.current.innerText)) {
      tagTwoRef.current.style.backgroundColor = "#15803d";
      tagTwoRef.current.style.color = "#ffffff";
    }
    if (tags.includes(tagThreeRef.current.innerText)) {
      tagThreeRef.current.style.backgroundColor = "#15803d";
      tagThreeRef.current.style.color = "#ffffff";
    }
    if (tags.includes(tagFourRef.current.innerText)) {
      tagFourRef.current.style.backgroundColor = "#15803d";
      tagFourRef.current.style.color = "#ffffff";
    }

    console.log("tags");
  }, [tags, tagOneRef, tagTwoRef, tagThreeRef, tagFourRef]);

  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 min-h-250 relative flex w-full flex-col gap-8 rounded-xl xl:px-16 xl:py-10 xl:shadow-md dark:shadow-none">
        <h1 className="xl:text-4xxl text-prim-2 dark:text-prim-1 font-league text-3xl font-bold">
          Tags
        </h1>
        <p className="text-prim-2 dark:text-prim-1 font-league text-xl xl:text-2xl">
          Nice Work!
        </p>
        <p className="text-prim-2 dark:text-prim-1 font-league text-lg xl:text-xl">
          Now we&apos;re going to add tags for your project. Tags are how you
          can categorize your work. This will help others find your creations
          easier.
        </p>

        <div className="flex w-full flex-wrap gap-5">
          <article
            ref={tagOneRef}
            onClick={() => changeTags(tagOneRef)}
            className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 rounded-3xl px-5 py-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          >
            Gaming & Fun
          </article>

          <article
            ref={tagTwoRef}
            onClick={() => changeTags(tagTwoRef)}
            className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 rounded-3xl px-5 py-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          >
            Educative
          </article>

          <article
            ref={tagThreeRef}
            onClick={() => changeTags(tagThreeRef)}
            className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 rounded-3xl px-5 py-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
          >
            Lightweight
          </article>

          <article
            ref={tagFourRef}
            onClick={() => changeTags(tagFourRef)}
            className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 rounded-3xl px-5 py-2 font-league text-lg transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
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
