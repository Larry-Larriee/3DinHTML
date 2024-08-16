import React from "react";
import PropTypes from "prop-types";
import Cycle from "./helper/Cycle";

UploadCode.propTypes = {
  changeUserAframe: PropTypes.func.isRequired,
  textAreaAframeRef: PropTypes.object.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
};

// UploadCode component is used specifically for the contribute page
export default function UploadCode({
  changeUserAframe,
  textAreaAframeRef,
  changeCycleAdd,
}) {
  return (
    <>
      <section className="bg-prim-2 flex w-full px-16 py-10 flex-col gap-8 rounded-xl min-h-250 relative">
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
          className="overflow-y-auto h-64 resize-none bg-prim-4 rounded-xl p-5 text-prim-1 focus:outline-none"
        />

        <Cycle changeCycleAdd={changeCycleAdd} />
      </section>
    </>
  );
}
