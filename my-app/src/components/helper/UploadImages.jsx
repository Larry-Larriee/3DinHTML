import React, { useEffect } from "react";
import PropTypes from "prop-types";

UploadImage.propTypes = {
  imageUpload: PropTypes.string,
  changeImageUpload: PropTypes.func.isRequired,
  clickImageUpload: PropTypes.func.isRequired,
  imageUploadLabelRef: PropTypes.object.isRequired,
  imageUploadRef: PropTypes.object.isRequired,
};

// UploadCode component is used specifically for the contribute page
export default function UploadImage({
  imageUpload,
  changeImageUpload,
  clickImageUpload,
  imageUploadLabelRef,
  imageUploadRef,
}) {
  return (
    <>
      <section className="bg-prim-2 flex w-full min-h-96 px-16 py-10 flex-col gap-8 rounded-xl">
        <h1 className="font-bold text-4xxl text-prim-1 font-league">
          Uploading Images
        </h1>
        <p className="font-league text-prim-1 text-2xl">
          If uploading images doesn&apos;t apply to you, skip to step 3!
        </p>
        <p className="font-league text-prim-1 text-xl">
          If you&apos;re pasting assets which go into your folder (i.e.
          images/background.png), please upload that exact image here.
        </p>

        {/* flex items by default have both a flex-grow and flex-shrink of 1 */}
        {/* this means it will take up all available space if possible or shrink if required */}
        <div className="flex flex-grow-0 gap-5 items-center">
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            ref={imageUploadRef}
            onChange={() => changeImageUpload()}
          />
          <label
            htmlFor="imageUpload"
            className="text-prim-1 text-xl font-league bg-prim-4 rounded-xl py-2 px-10 hover:scale-105 duration-200 ease-in-out transition hover:cursor-pointer"
            onClick={() => clickImageUpload()}
            ref={imageUploadLabelRef}
          >
            Upload
          </label>

          {imageUpload && (
            <p className="text-prim-1 font-league text-xl">{imageUpload}</p>
          )}
        </div>

        <div className="flex justify-end w-11/12">
          <p className="text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center">
            Continue
          </p>
        </div>
      </section>
    </>
  );
}
