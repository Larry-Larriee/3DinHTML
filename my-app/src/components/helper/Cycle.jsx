import React from "react";
import PropTypes from "prop-types";

Cycle.propTypes = {
  changeCycleAdd: PropTypes.func,
  changeCycleRemove: PropTypes.func,
  changeCycleSubmit: PropTypes.func,
};

// Cycle component is used specifically for the contribute page. It returns buttons that will allow the user to navigate through the steps
// changeCycleAdd (function): function that will change the cycle state to the next step
// changeCycleRemove (function): function that will change the cycle state to the previous step
// changeCycleSubmit (function): function that will submit the project to the database
export default function Cycle({
  changeCycleAdd = null,
  changeCycleRemove = null,
  changeCycleSubmit = null,
}) {
  return (
    <>
      {/* I wanted to use position absolute because I wanted the contribute page to stay a custom fixed height of h-250 */}
      <div className="flex gap-5 xl:absolute xl:bottom-10 xl:right-16 xl:justify-end">
        {changeCycleRemove && (
          <p
            className="bg-prim-5 w-36 select-none rounded-xl py-2 text-center font-league text-2xl text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
            onClick={() => changeCycleRemove()}
          >
            Back
          </p>
        )}

        {changeCycleAdd && (
          <p
            className="bg-prim-5 w-36 select-none rounded-xl py-2 text-center font-league text-2xl text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
            onClick={() => changeCycleAdd()}
          >
            Continue
          </p>
        )}

        {changeCycleSubmit && (
          <p
            className="w-36 select-none rounded-xl bg-green-700 py-2 text-center font-league text-2xl text-white transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer"
            onClick={() => changeCycleSubmit()}
          >
            Submit
          </p>
        )}
      </div>
    </>
  );
}
