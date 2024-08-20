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
      <div className="flex justify-end gap-5 absolute bottom-10 right-16">
        {changeCycleRemove && (
          <p
            className="select-none hover:scale-105 duration-200 transition ease-in-out text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center"
            onClick={() => changeCycleRemove()}
          >
            Back
          </p>
        )}

        {changeCycleAdd && (
          <p
            className="select-none hover:scale-105 duration-200 transition ease-in-out text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center"
            onClick={() => changeCycleAdd()}
          >
            Continue
          </p>
        )}

        {changeCycleSubmit && (
          <p
            className="select-none hover:scale-105 duration-200 transition ease-in-out text-2xl text-white bg-green-700 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center"
            onClick={() => changeCycleSubmit()}
          >
            Submit
          </p>
        )}
      </div>
    </>
  );
}
