import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

UploadImage.propTypes = {
  imageUpload: PropTypes.string,
  changeImageUpload: PropTypes.func.isRequired,
};

// UploadCode component is used specifically for the contribute page
export default function UploadImage({ imageUpload, changeImageUpload }) {
  useEffect(() => {
    if (imageUpload) {
      console.log(imageUpload);
    }
  }, [imageUpload]);

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
          <Dropzone
            onDrop={(acceptedFiles) => changeImageUpload(acceptedFiles)}
          >
            {/* getRootProps provides the nessessary props to the div like onDragOver */}
            {/* getInputProps provides the nessessary props to the input like onChange */}
            {({ getRootProps, getInputProps }) => (
              <section className="w-full">
                <div
                  className="flex justify-center items-center w-full h-56 border-4 border-dashed border-white bg-prim-3 hover:cursor-pointer"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <p className="text-prim-1 text-xl">
                    Drag and drop your assets here, or click to select files
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div className="flex justify-end">
          <p className="text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center">
            Continue
          </p>
        </div>
      </section>
    </>
  );
}
