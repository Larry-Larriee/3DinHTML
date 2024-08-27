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

// ProjectDescription component renders the input fields for the user to input the title and description of their project. The user can only input a certain amount of characters
// title (string): the value of the user's title (referenced when the user moves back and forth between the cycle component)
// changeTitle (function): useState to store the value of the user's title
// changeTitleInputRef (object): useRef for the title input
// changeDescription (function): useState to store the value of the user's description
// changeDescriptionInputRef (object): useRef for the description input
// changeCycleAdd (function): change to the next cycle
// changeCycleRemove (function): move to the previous cycle
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
  const [reachedMax, setReachedMax] = useState(false);
  const [debounce, setDebounce] = useState(false);

  // we need to pass e as an argument so useCallback can rerender the animation whenever the key is pressed and conditions are met
  const maxCharactersAnimation = useCallback(
    (inputRef, char, e) => {
      if (e.key.length === 1) {
        if (
          inputRef.value.length === char &&
          reachedMax &&
          debounce === false
        ) {
          setDebounce(true);
          inputRef.classList.add("yelling-red");

          setTimeout(() => {
            inputRef.classList.remove("yelling-red");
            setDebounce(false);
          }, 1000);
        }

        // technically once the user reaches the maximum amount of characters, the animation will play due to reachedMax being a dependency. however, the animation won't be displayed until the user runs the event to call the callback
        // although the useEffect also has a dependency for maxCharactersAnimation, it's inside the eventlistener so the animation won't be displayed until the user press down a key. in this case, you can think of it as the animation being played without you knowing
        if (inputRef.value.length === char) setReachedMax(true);
        else setReachedMax(false);
      }
    },

    [reachedMax, debounce],
  );

  // once the user reaches the maximum amount of characters AND attempts to add more, an animation will play indiciating they've reached the limit
  // on mount, the event listener is added to the input field
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
  }, [changeTitleInputRef, maxCharactersAnimation]);

  useEffect(() => {
    if (!changeDescriptionInputRef && !changeDescriptionInputRef.current)
      return;

    // manage the changedescriptionInputRef.current of this specific render cycle
    const descriptionInputRef = changeDescriptionInputRef.current;

    descriptionInputRef.addEventListener("keydown", (event) =>
      maxCharactersAnimation(descriptionInputRef, 80, event),
    );

    return () =>
      descriptionInputRef.removeEventListener("keydown", (event) =>
        maxCharactersAnimation(descriptionInputRef, 80, event),
      );
  }, [changeDescriptionInputRef, maxCharactersAnimation]);

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
