import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import Cycle from "../helper/Cycle";

UploadImage.propTypes = {
  imageUpload: PropTypes.array,
  changeImageUpload: PropTypes.func.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
};

// UploadImage component is used specifically for the contribute page. It allows the user to upload images for their project by rendering a dropzone
// changeImageUpload (function): function that will change the imageUpload state to the name of the image file, such as fish.png
// changeCycleAdd (function): function that will change the cycle state to the next step. this is used for the cycle component
// changeCycleRemove (function): function that will change the cycle state to the previous step. this is used for the cycle component
export default function UploadImage({
  imageUpload,
  changeImageUpload,
  changeCycleAdd,
  changeCycleRemove,
}) {
  return (
    <>
      <section className="xl:bg-prim-2 flex w-full min-h-250 xl:px-16 xl:py-10 flex-col gap-8 rounded-xl relative">
        <h1 className="font-bold text-3xl xl:text-4xxl text-prim-1 font-league">
          Uploading Images
        </h1>
        <p className="font-league text-prim-1 text-xl xl:text-2xl">
          If uploading images doesn&apos;t apply to you, skip to step 3!
        </p>
        <p className="font-league text-prim-1 text-lg xl:text-xl">
          If you&apos;re pasting assets which go into your folder (i.e.
          images/background.png), please upload that exact image here.
        </p>

        {/* flex items by default have both a flex-grow and flex-shrink of 1 */}
        {/* this means it will take up all available space if possible or shrink if required */}
        <div className="flex flex-grow-0 gap-5 items-center">
          <Dropzone
            // onDrop={(acceptedFiles) => console.log(acceptedFiles)}
            onDrop={(acceptedFiles) => changeImageUpload(acceptedFiles)}
          >
            {/* getRootProps provides the nessessary props to the div like onDragOver */}
            {/* getInputProps provides the nessessary props to the input like onChange */}
            {({ getRootProps, getInputProps }) => (
              <div
                className="flex justify-center items-center w-full h-56 border-4 border-dashed border-white bg-prim-3 hover:cursor-pointer"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {imageUpload.length === 0 && (
                  <p className="text-prim-1 xl:text-xl w-full px-4 text-center text-lg">
                    Drag and drop your assets here, or click to select files
                  </p>
                )}

                {imageUpload.length > 0 &&
                  imageUpload.map((image, index) => {
                    // the generated imageURL is temporary and will be removed when the page is closed or refreshed
                    const imageURL = URL.createObjectURL(image);

                    return (
                      <img
                        alt={image.name + index}
                        key={image.name + index}
                        src={imageURL}
                        className="max-w-36 max-h-w6 object-cover"
                      />
                    );
                  })}
              </div>
            )}
          </Dropzone>
        </div>

        <Cycle
          changeCycleRemove={changeCycleRemove}
          changeCycleAdd={changeCycleAdd}
        />
      </section>
    </>
  );
}
