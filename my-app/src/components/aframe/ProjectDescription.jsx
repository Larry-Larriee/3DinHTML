import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  changeTitle: PropTypes.func.isRequired,
  changeTitleInputRef: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  changeDescription: PropTypes.func.isRequired,
  changeDescriptionInputRef: PropTypes.object.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
};

// ProjectDescription component is used specifically for the contribute page
export default function ProjectDescription({
  title,
  changeTitle,
  changeTitleInputRef,
  description,
  changeDescription,
  changeDescriptionInputRef,
  changeCycleAdd,
  changeCycleRemove,
}) {
  const [titleReachedMax, setTitleReachedMax] = useState(false);
  const [titleDebounce, setTitleDebounce] = useState(false);

  // we need to pass e as an argument so useCallback can rerender the animation whenever the key is pressed and conditions are met
  const maxCharactersAnimation = useCallback(
    (inputRef, char, e) => {
      console.log(e.key);

      if (
        inputRef.value.length === char &&
        titleReachedMax &&
        titleDebounce === false
      ) {
        setTitleDebounce(true);
        inputRef.classList.add("yelling-red");

        setTimeout(() => {
          inputRef.classList.remove("yelling-red");
          setTitleDebounce(false);
        }, 1000);
      }

      if (inputRef.value.length === char) setTitleReachedMax(true);
      else setTitleReachedMax(false);
    },
    [titleReachedMax, titleDebounce],
  );

  // once the user reaches the maximum amount of characters AND attempts to add more, an animation will play indiciating they've reached the limit
  useEffect(() => {
    if (!changeTitleInputRef && !changeTitleInputRef.current) return;

    // manage the changeTitleInputRef.current of this specific render cycle
    const titleInputRef = changeTitleInputRef.current;

    titleInputRef.addEventListener("keydown", (e) =>
      maxCharactersAnimation(titleInputRef, 50, e),
    );

    return () => {
      titleInputRef.removeEventListener("keydown", (e) =>
        maxCharactersAnimation(titleInputRef, 50, e),
      );
    };
  }, [
    titleReachedMax,
    changeTitleInputRef,
    titleDebounce,
    maxCharactersAnimation,
  ]);

  const [descriptionReachedMax, setDescriptionReachedMax] = useState(false);
  const [descriptionDebounce, setDescriptionDebounce] = useState(false);

  // once the user reaches the maximum amount of characters AND attempts to add more, an animation will play indiciating they've reached the limit
  useEffect(() => {
    if (!changeDescriptionInputRef && !changeDescriptionInputRef.current)
      return;

    // manage the changedescriptionInputRef.current of this specific render cycle
    const descriptionInputRef = changeDescriptionInputRef.current;

    const maxCharactersAnimation = (char, event) => {
      if (
        descriptionInputRef.value.length === char &&
        descriptionReachedMax &&
        descriptionDebounce === false &&
        !event.repeat
      ) {
        setDescriptionDebounce(true);
        descriptionInputRef.classList.add("yelling-red");

        setTimeout(() => {
          descriptionInputRef.classList.remove("yelling-red");
          setDescriptionDebounce(false);
        }, 1000);
      }

      if (descriptionInputRef.value.length === char)
        setDescriptionReachedMax(true);
      else setDescriptionReachedMax(false);
    };

    descriptionInputRef.addEventListener("keydown", (event) =>
      maxCharactersAnimation(80, event),
    );

    return () =>
      descriptionInputRef.removeEventListener("keydown", (event) =>
        maxCharactersAnimation(80, event),
      );
  }, [descriptionReachedMax, changeDescriptionInputRef, descriptionDebounce]);

  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 min-h-250 relative flex w-full flex-col gap-8 rounded-xl xl:px-16 xl:py-10 xl:shadow-md dark:shadow-none">
        <h1 className="xl:text-4xxl text-prim-2 dark:text-prim-1 font-league text-3xl font-bold">
          Project Description
        </h1>
        <p className="text-prim-2 dark:text-prim-1 font-league text-xl xl:text-2xl">
          Almost there!
        </p>
        <p className="text-prim-2 dark:text-prim-1 font-league text-lg xl:text-xl">
          Let&apos;s give your project a Title and Description. Something
          simple. And don&apos;t worry, you can leave your description blank if
          you can&apos;t think of anything.
        </p>

        <input
          type="text"
          className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 placeholder-prim-2 h-12 rounded-xl p-5 focus:outline-none dark:placeholder-gray-500"
          placeholder="Title"
          value={title}
          maxLength={50}
          onChange={() => changeTitle()}
          ref={changeTitleInputRef}
        />

        <input
          type="text"
          className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 placeholder-prim-2 h-12 rounded-xl p-5 focus:outline-none dark:placeholder-gray-500"
          placeholder="Description"
          value={description}
          maxLength={80}
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
