import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";
import { Description } from "@headlessui/react";

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

  // once the user reaches the maximum amount of characters AND attempts to add more, an animation will play indiciating they've reached the limit
  useEffect(() => {
    if (!changeTitleInputRef && !changeTitleInputRef.current) return;

    // manage the changeTitleInputRef.current of this specific render cycle
    const titleInputRef = changeTitleInputRef.current;

    titleInputRef.addEventListener("keydown", (event) => {
      if (
        titleInputRef.value.length === 50 &&
        titleReachedMax &&
        titleDebounce === false &&
        !event.repeat
      ) {
        setTitleDebounce(true);
        console.log("debounce");
        titleInputRef.classList.add("yelling-red");

        setTimeout(() => {
          titleInputRef.classList.remove("yelling-red");
          setTitleDebounce(false);
        }, 1000);
      }

      if (titleInputRef.value.length === 50) setTitleReachedMax(true);
      else setTitleReachedMax(false);
    });

    return () => {
      titleInputRef.removeEventListener("keypress", () => {
        if (titleInputRef.value.length === 50 && titleReachedMax) {
          titleInputRef.classList.add("yelling-red");

          setTimeout(() => {
            titleInputRef.classList.remove("yelling-red");
          }, 1000);
        }

        if (titleInputRef.value.length === 50) setTitleReachedMax(true);
        else setTitleReachedMax(false);
      });
    };
  }, [titleReachedMax, changeTitleInputRef, titleDebounce]);

  const [descriptionReachedMax, setdescriptionReachedMax] = useState(false);
  const [descriptionDebounce, setdescriptionDebounce] = useState(false);

  // once the user reaches the maximum amount of characters AND attempts to add more, an animation will play indiciating they've reached the limit
  useEffect(() => {
    if (!changeDescriptionInputRef && !changeDescriptionInputRef.current)
      return;

    // manage the changedescriptionInputRef.current of this specific render cycle
    const descriptionInputRef = changeDescriptionInputRef.current;

    descriptionInputRef.addEventListener("keydown", (event) => {
      if (
        descriptionInputRef.value.length === 80 &&
        descriptionReachedMax &&
        descriptionDebounce === false &&
        !event.repeat
      ) {
        setdescriptionDebounce(true);
        console.log("debounce");
        descriptionInputRef.classList.add("yelling-red");

        setTimeout(() => {
          descriptionInputRef.classList.remove("yelling-red");
          setdescriptionDebounce(false);
        }, 1000);
      }

      if (descriptionInputRef.value.length === 80)
        setdescriptionReachedMax(true);
      else setdescriptionReachedMax(false);
    });

    return () => {
      descriptionInputRef.removeEventListener("keydown", () => {
        if (descriptionInputRef.value.length === 80 && descriptionReachedMax) {
          descriptionInputRef.classList.add("yelling-red");

          setTimeout(() => {
            descriptionInputRef.classList.remove("yelling-red");
          }, 1000);
        }

        if (descriptionInputRef.value.length === 80)
          setdescriptionReachedMax(true);
        else setdescriptionReachedMax(false);
      });
    };
  }, [descriptionReachedMax, changeDescriptionInputRef, descriptionDebounce]);

  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 flex w-full min-h-250 xl:px-16 xl:py-10 flex-col gap-8 rounded-xl relative xl:shadow-md dark:shadow-none">
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
          value={title}
          maxLength={50}
          onChange={() => changeTitle()}
          ref={changeTitleInputRef}
        />

        <input
          type="text"
          className="h-12 bg-sec-2 dark:bg-prim-4 rounded-xl p-5 text-prim-2 dark:text-prim-1 placeholder-prim-2 dark:placeholder-gray-500 focus:outline-none"
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
