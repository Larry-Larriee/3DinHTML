import React from "react";
import PropTypes from "prop-types";

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

// Step component is used specifically for the side navigation for the contribute page
export default function Step({ number, title }) {
  return (
    <>
      <section className="flex items-center gap-6 hover:scale-105 duration-200 ease-in-out transition hover:cursor-default">
        <p className="text-prim-1 text-2xl font-semibold font-league min-w-5">
          {number}
        </p>
        <p className="text-prim-1 text-2xl font-league">{title}</p>
      </section>
    </>
  );
}
