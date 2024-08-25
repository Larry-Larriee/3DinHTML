import React from "react";
import PropTypes from "prop-types";
import Cycle from "../helper/Cycle";

Credits.propTypes = {
  name: PropTypes.string.isRequired,
  changeName: PropTypes.func.isRequired,
  changeNameInputRef: PropTypes.object.isRequired,
  changeCycleRemove: PropTypes.func.isRequired,
  changeCycleSubmit: PropTypes.func.isRequired,
};

// Credits component is used specifically for the contribute page
export default function Credits({
  name,
  changeName,
  changeNameInputRef,
  changeCycleRemove,
  changeCycleSubmit,
}) {
  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 flex w-full min-h-250 xl:px-16 xl:py-10 flex-col gap-8 rounded-xl relative">
        <h1 className="font-bold text-3xl xl:text-4xxl text-prim-2 dark:text-prim-1 font-league">
          Credits
        </h1>
        <p className="font-league text-prim-2 dark:text-prim-1 text-xl xl:text-2xl">
          Give yourself a name as credit!
        </p>
        <p className="font-league text-prim-2 dark:text-prim-1 text-lg xl:text-xl">
          If you have an account, this name will be autofilled for you.
          Furthermore, you will not have an end tag attached to your name.
          It&apos;s your name. No one else will be able to steal it.
        </p>

        <input
          type="text"
          className="h-12 bg-sec-2 dark:bg-prim-4 rounded-xl p-5 text-prim-2 dark:text-prim-1 focus:outline-none"
          onChange={() => changeName()}
          ref={changeNameInputRef}
          value={name}
        />

        <Cycle
          changeCycleRemove={changeCycleRemove}
          changeCycleSubmit={changeCycleSubmit}
        />
      </section>
    </>
  );
}
