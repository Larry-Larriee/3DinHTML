import React from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

UploadCode.propTypes = {
  userAframe: PropTypes.string.isRequired,
  changeUserAframe: PropTypes.func.isRequired,
  textAreaAframeRef: PropTypes.object.isRequired,
  changeCycleAdd: PropTypes.func.isRequired,
};

// UploadCode component is used specifically for the contribute page. It is used to store the code for the a-frame environment
// changeUserAframe (function): function that uses useState to store the value of the user's code
// textAreaAframeRef (object): a reference to the text area where the user will paste their code. used along with changeUserAframe
// changeCycleAdd (function): function that will change the cycle state to the next step. this is used for the cycle component
export default function UploadCode({
  userAframe,
  changeUserAframe,
  textAreaAframeRef,
  changeCycleAdd,
}) {
  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 min-h-250 relative flex w-full flex-col gap-8 rounded-xl xl:px-16 xl:py-10 xl:shadow-md dark:shadow-none">
        <h1 className="xl:text-4xxl text-prim-2 dark:text-prim-1 font-league text-3xl font-bold">
          Uploading Code
        </h1>
        <p className="text-prim-2 dark:text-prim-1 font-league text-xl xl:text-2xl">
          We&apos;re so excited to have you here. Please paste your code below:
        </p>
        <p className="text-prim-2 dark:text-prim-1 font-league text-lg xl:text-xl">
          If you&apos;re pasting assets which go into your folder (i.e.
          images/background.png), your a-frame environment will not work right
          away. Don&apos;t worry, this is where step 2 comes in.
        </p>

        <textarea
          ref={textAreaAframeRef}
          onChange={() => changeUserAframe()}
          value={userAframe}
          className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 h-32 resize-none overflow-y-auto rounded-xl p-3 focus:outline-none xl:h-48 xl:p-5 2xl:h-64"
        />

        <Cycle changeCycleAdd={changeCycleAdd} />
      </section>
    </>
  );
}
