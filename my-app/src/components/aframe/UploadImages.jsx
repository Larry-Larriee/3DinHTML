import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import Cycle from "../helper/Cycle";

UploadImage.propTypes = {
  imageUpload: PropTypes.array,
  changeImageUpload: PropTypes.func.isRequired,
  removeImageUpload: PropTypes.func.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
};

// UploadImage component is used specifically for the contribute page. It allows the user to upload images for their project by rendering a dropzone
// changeImageUpload (function): function that will change the imageUpload state to the name of the image file, such as fish.png
// removeImageUpload (function): function that will remove the image from the imageUpload state
// changeCycleAdd (function): function that will change the cycle state to the next step. this is used for the cycle component
// changeCycleRemove (function): function that will change the cycle state to the previous step. this is used for the cycle component
export default function UploadImage({
  imageUpload,
  changeImageUpload,
  removeImageUpload,
  changeCycleAdd,
  changeCycleRemove,
}) {
  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 min-h-250 relative flex w-full flex-col gap-8 rounded-xl xl:px-16 xl:py-10 xl:shadow-md dark:shadow-none">
        <h1 className="xl:text-4xxl text-prim-2 dark:text-prim-1 font-league text-3xl font-bold">
          Uploading Images
        </h1>
        <p className="text-prim-2 dark:text-prim-1 font-league text-xl xl:text-2xl">
          If uploading images doesn&apos;t apply to you, skip to step 3!
        </p>
        <p className="text-prim-2 dark:text-prim-1 font-league text-lg xl:text-xl">
          If you&apos;re pasting assets which go into your folder (i.e.
          images/background.png), upload that exact image here. Please also
          upload in the order it&apos;s imported by &lt;a-assets&gt; (so
          id&apos;s aren&apos;t mixed up).
        </p>

        {/* flex items by default have both a flex-grow and flex-shrink of 1 */}
        {/* this means it will take up all available space if possible or shrink if required */}
        <div className="relative flex flex-grow-0 items-center gap-5">
          <Dropzone
            onDrop={(acceptedFiles) => changeImageUpload(acceptedFiles)}
          >
            {/* getRootProps provides the nessessary props to the div like onDragOver */}
            {/* getInputProps provides the nessessary props to the input like onChange */}
            {({ getRootProps, getInputProps }) => (
              <div
                className="border-prim-2 dark:bg-prim-3 relative z-20 flex min-h-56 w-full flex-wrap gap-3 border-4 border-dashed bg-none p-3 hover:cursor-pointer dark:border-white"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {imageUpload.length === 0 && (
                  <p className="leading-56 text-prim-2 dark:text-prim-1 w-full px-4 text-center text-lg xl:text-xl">
                    Drag and drop your assets here, or click to select files
                  </p>
                )}
              </div>
            )}
          </Dropzone>

          {imageUpload.length > 0 && (
            <div className="dark:bg-prim-3 absolute inset-0 flex min-h-56 w-full flex-wrap gap-3 bg-none p-3 hover:cursor-pointer">
              {imageUpload.map((image, index) => {
                // the generated imageURL is temporary and will be removed when the page is closed or refreshed
                const imageURL = URL.createObjectURL(image);

                return (
                  <div
                    className="relative z-50 h-auto w-auto"
                    key={image.name + index}
                  >
                    <img
                      alt={image.name + index}
                      src={imageURL}
                      className="max-h-16 max-w-32 object-cover"
                    />

                    <article
                      className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 transition duration-200 ease-in-out hover:bg-red-500 hover:text-white"
                      onClick={() => removeImageUpload(image)} // access imageupload and get the image file
                    >
                      <p className="text-sm">X</p>
                    </article>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <Cycle
          changeCycleRemove={changeCycleRemove}
          changeCycleAdd={changeCycleAdd}
        />
      </section>
    </>
  );
}
