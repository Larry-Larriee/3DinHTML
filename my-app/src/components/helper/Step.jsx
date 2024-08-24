import React from "react";
import PropTypes from "prop-types";

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cycle: PropTypes.number.isRequired,
};

// Step component is used specifically for the side navigation for the contribute page. Used to render all steps and will bold text if the user is on that specific step
// note: that this component is different from the cycle component in that this mainly focuses on the aside step navigation, whereas cycle component are buttons
// number (number): the number of the step, such as step 1, Uploading Code
// title (string): the title of the step
// cycle (number): the current step the user is on. this is the useState value that will be compared to the number
export default function Step({ number, title, cycle }) {
  return (
    <>
      <section className="flex items-center gap-6 hover:scale-105 duration-200 ease-in-out transition hover:cursor-default">
        {cycle === number ? (
          <>
            <p className="text-prim-2 dark:text-prim-1 text-xl xl:text-2xl font-bold font-league min-w-5">
              {number}
            </p>
            <p className="text-prim-2 dark:text-prim-1 text-xl xl:text-2xl font-bold font-league">
              {title}
            </p>
          </>
        ) : (
          <>
            <p className="text-prim-2 dark:text-prim-1 text-xl xl:text-2xl font-league min-w-5">
              {number}
            </p>
            <p className="text-prim-2 dark:text-prim-1 text-xl xl:text-2xl font-league">
              {title}
            </p>
          </>
        )}
      </section>
    </>
  );
}
