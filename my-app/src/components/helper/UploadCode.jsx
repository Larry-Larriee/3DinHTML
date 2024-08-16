import React from "react";
import PropTypes from "prop-types";

UploadCode.propTypes = {
  changeUserAframe: PropTypes.func.isRequired,
  textAreaAframeRef: PropTypes.object.isRequired,
};

// UploadCode component is used specifically for the contribute page
export default function UploadCode({ changeUserAframe, textAreaAframeRef }) {
  return (
    <>
      <section className="bg-prim-2 flex w-full min-h-96 px-16 py-10 flex-col gap-8 rounded-xl">
        <h1 className="font-bold text-4xxl text-prim-1 font-league">
          Uploading Code
        </h1>
        <p className="font-league text-prim-1 text-2xl">
          We&apos;re so excited to have you here. Please paste your code below:
        </p>
        <p className="font-league text-prim-1 text-xl">
          If you&apos;re pasting assets which go into your folder (i.e.
          images/background.png), your a-frame environment will not work right
          away. Don&apos;t worry, this is where step 2 comes in.
        </p>

        <textarea
          ref={textAreaAframeRef}
          onChange={() => changeUserAframe()}
          className="overflow-y-auto w-11/12 h-64 resize-none bg-prim-4 rounded-xl p-5 text-prim-1"
        />

        <div className="flex justify-end w-11/12">
          <p className="text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center">
            Continue
          </p>
        </div>
      </section>
    </>
  );
}
