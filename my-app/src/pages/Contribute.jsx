import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";

import Step from "../components/helper/Step";

import UploadCode from "../components/aframe/UploadCode";
import UploadImage from "../components/aframe/UploadImages";
import ProjectDescription from "../components/aframe/ProjectDescription";
import Credits from "../components/aframe/Credits";
import Tags from "../components/aframe/Tags";
import UseTheme from "../components/hooks/UseTheme";
import Preview from "../components/aframe/Preview";

export default function Contribute() {
  let [userAframe, setUserAframe] = useState("");
  const textAreaAframeRef = useRef();

  const changeUserAframe = () => {
    setUserAframe(textAreaAframeRef.current.value);
  };

  let [imageUpload, setImageUpload] = useState([]);

  const changeImageUpload = (acceptedFile) => {
    // dropzone returns an array of files, so append the new files to the imageUpload array
    setImageUpload([...imageUpload, ...acceptedFile]);
  };

  const removeImageUpload = (image) => {
    if (imageUpload.includes(image)) {
      // the filter method checks if the image is not the same as the param image, and if it's not, adds it to the return array
      setImageUpload(imageUpload.filter((img) => img !== image));
    }
  };

  useEffect(() => {
    console.log(imageUpload);
  }, [imageUpload]);

  let [title, setTitle] = useState("");
  const changeTitle = () => {
    setTitle(changeTitleInputRef.current.value);
  };
  const changeTitleInputRef = useRef();

  let [description, setDescription] = useState("");
  const changeDescription = () => {
    setDescription(changeDescriptionInputRef.current.value);
  };
  const changeDescriptionInputRef = useRef();

  let [tags, setTags] = useState([]);
  const changeTags = (ref) => {
    if (tags.includes(ref.current.innerText)) {
      // if the tag is not equal to the target tag, keep it in the new array. in other words, remove the target tag from the array when the user clicks it again
      setTags(tags.filter((tag) => tag !== ref.current.innerText));
      if (localStorage.getItem("theme") === "dark") {
        ref.current.style.backgroundColor = "#2b2f36";
        ref.current.style.color = "#ffffff";
      }
      if (localStorage.getItem("theme") === "light") {
        ref.current.style.backgroundColor = "#d9d9d9";
        ref.current.style.color = "#2b2f36";
      }

      return;
    }

    setTags([...tags, ref.current.innerText]);

    // we don't need these lines because the selected style is already applied in the Tags.jsx useEffect (which runs on mount). this saves the user's options when they go back and forth between cycles
    // ref.current.style.backgroundColor = "#15803d";
    // ref.current.style.color = "#ffffff";
  };
  const tagOneRef = useRef();
  const tagTwoRef = useRef();
  const tagThreeRef = useRef();
  const tagFourRef = useRef();

  let [name, setName] = useState("");
  const changeName = () => {
    setName(changeNameInputRef.current.value);
  };
  const changeNameInputRef = useRef();

  let [cycle, setCycle] = useState(1);
  const changeCycleAdd = () => {
    setCycle((prev) => prev + 1);
  };
  const changeCycleRemove = () => {
    setCycle((prev) => prev - 1);
  };
  const changeCycleSubmit = () => {
    // submit the form with a fetch. because the useEffect waits for the submitted state to change, and for it to be true, the user data will only be sent once (good thing)
    changeSubmitted(true);
  };

  // submmitted will trigger a preview, and confirmed will trigger a fetch POST request
  let [submitted, setSubmitted] = useState(false);
  let [confirmed, setConfirmed] = useState(false);

  const changeSubmitted = () => {
    setSubmitted(true);
  };

  const removeSubmitted = () => {
    setSubmitted(false);
  };

  const changeConfirmed = () => {
    setConfirmed(true);
  };

  const serverURL = import.meta.env.VITE_SERVER;

  useEffect(() => {
    if (confirmed) {
      console.log(imageUpload, userAframe, title, description, name, tags);

      // the object that is provided by imageUpload is a file object, not a JS object
      // we use FormData to convert the file object into a JS object
      const formData = new FormData();

      if (imageUpload.length !== 0) {
        // using FormData, we can actually append the file object with the same key name
        for (let i = 0; i < imageUpload.length; i++) {
          formData.append("images", imageUpload[i]);
        }
      }
      // we must use a new header (multipart/form-data) to send the imageFormData and as a result must also make FormData for the aframe code
      formData.append(
        "contribution",
        JSON.stringify({
          aframe: userAframe,
          title: title,
          description: description,
          name: name,
          tags: tags,
        }),
      );

      fetch(serverURL + "/api/contribute", {
        method: "POST",
        credentials: "include",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          window.alert(data.result);

          // allow the user to make a new submission after their first one
          setConfirmed(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [
    confirmed,
    userAframe,
    imageUpload,
    title,
    description,
    name,
    tags,
    serverURL,
  ]);

  useEffect(() => {
    if (changeNameInputRef.current) {
      fetch(serverURL + "/api/account/checkCookie", {
        method: "GET",
        credentials: "include",
      }).then((response) =>
        response.json().then((data) => {
          if (data.result === "exists") {
            setName(data.username);
            changeNameInputRef.current.value = data.username;
          }
        }),
      );
    }
    // no dependency array so useEffect runs on every rerender
    // new content is loaded into the DOM when the user changes cycles, causing the useEffect to run
  });

  let { theme, toggleTheme } = UseTheme();

  return (
    <>
      <div className="flex w-full flex-col gap-12">
        <Navigation />

        {/* preview will only open if submitted is true. by changing confirmed, the fetch will hapen */}
        <Preview
          userAframe={userAframe}
          title={title}
          description={description}
          name={name}
          tags={tags}
          changeConfirmed={changeConfirmed}
          submitted={submitted}
          changeSubmitted={removeSubmitted}
        />
        <div className="flex w-full flex-col items-center justify-center gap-16 px-12 xl:flex-row">
          <article className="xl:bg-sec-1 dark:xl:bg-prim-2 relative hidden h-auto w-full flex-none gap-6 rounded-xl py-10 pl-8 shadow-md lg:flex lg:flex-col xl:h-full xl:w-96 xl:gap-12 xl:pt-10 dark:shadow-none">
            <Step number={1} title={"Uploading Code"} cycle={cycle} />
            <Step number={2} title={"Uploading Images"} cycle={cycle} />
            <Step number={3} title={"Description"} cycle={cycle} />
            <Step number={4} title={"Tags"} cycle={cycle} />
            <Step number={5} title={"Project Attribution"} cycle={cycle} />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="text-prim-2 dark:text-prim-1 absolute -right-12 -top-12 -z-10 h-40 w-40"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </article>

          {cycle === 1 && (
            <UploadCode
              userAframe={userAframe}
              changeUserAframe={changeUserAframe}
              textAreaAframeRef={textAreaAframeRef}
              changeCycleAdd={changeCycleAdd}
            />
          )}

          {cycle === 2 && (
            <UploadImage
              imageUpload={imageUpload}
              changeImageUpload={changeImageUpload}
              removeImageUpload={removeImageUpload}
              changeCycleAdd={changeCycleAdd}
              changeCycleRemove={changeCycleRemove}
            />
          )}

          {cycle === 3 && (
            <ProjectDescription
              title={title}
              changeTitle={changeTitle}
              changeTitleInputRef={changeTitleInputRef}
              description={description}
              changeDescription={changeDescription}
              changeDescriptionInputRef={changeDescriptionInputRef}
              changeCycleAdd={changeCycleAdd}
              changeCycleRemove={changeCycleRemove}
            />
          )}

          {cycle === 4 && (
            <Tags
              tags={tags}
              changeTags={changeTags}
              tagOneRef={tagOneRef}
              tagTwoRef={tagTwoRef}
              tagThreeRef={tagThreeRef}
              tagFourRef={tagFourRef}
              changeCycleAdd={changeCycleAdd}
              changeCycleRemove={changeCycleRemove}
            />
          )}

          {cycle === 5 && (
            <Credits
              name={name}
              changeName={changeName}
              changeNameInputRef={changeNameInputRef}
              changeCycleRemove={changeCycleRemove}
              changeCycleSubmit={changeCycleSubmit}
            />
          )}
        </div>
      </div>
    </>
  );
}
