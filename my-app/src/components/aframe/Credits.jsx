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

// Credits component allows the user to insert their name, where the name state will be autofilled if the user is signed in
// name (string): the name of the user
// changeName (function): useState to store the value of the user's name
// changeNameInputRef (object): useRef for the name input
// changeCycleRemove (function): move to the previous cycle
// changeCycleSubmit (function): submit and open the preview which waits for cycleSubmit to be true
export default function Credits({
  name,
  changeName,
  changeNameInputRef,
  changeCycleRemove,
  changeCycleSubmit,
}) {
  return (
    <>
      <section className="xl:bg-sec-1 dark:xl:bg-prim-2 min-h-250 relative flex w-full flex-col gap-8 rounded-xl xl:px-16 xl:py-10 xl:shadow-md dark:shadow-none">
        <h1 className="xl:text-4xxl text-prim-2 dark:text-prim-1 font-league text-3xl font-bold">
          Credits
        </h1>
        <p className="text-prim-2 dark:text-prim-1 font-league text-xl xl:text-2xl">
          Give yourself a name as credit!
        </p>
        <p className="text-prim-2 dark:text-prim-1 font-league text-lg xl:text-xl">
          If you have an account, this name will be autofilled for you.
          Furthermore, you will not have an end tag attached to your name.
          It&apos;s your name. No one else will be able to steal it.
        </p>

        <input
          type="text"
          className="bg-sec-2 dark:bg-prim-4 text-prim-2 dark:text-prim-1 h-12 rounded-xl p-5 focus:outline-none"
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
