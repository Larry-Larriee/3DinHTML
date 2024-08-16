import React from "react";
import PropTypes from "prop-types";

Cycle.propTypes = {
  changeCycleAdd: PropTypes.func,
  changeCycleRemove: PropTypes.func,
  changeCycleSubmit: PropTypes.func,
};

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
            className="text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center"
            onClick={() => changeCycleRemove()}
          >
            Back
          </p>
        )}

        {changeCycleAdd && (
          <p
            className="text-2xl text-white bg-prim-5 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center"
            onClick={() => changeCycleAdd()}
          >
            Continue
          </p>
        )}

        {changeCycleSubmit && (
          <p
            className="text-2xl text-white bg-green-700 font-league hover:cursor-pointer py-2 w-36 rounded-xl text-center"
            onClick={() => changeCycleSubmit()}
          >
            Continue
          </p>
        )}
      </div>
    </>
  );
}
