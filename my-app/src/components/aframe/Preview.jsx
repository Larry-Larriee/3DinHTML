import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogPanel } from "@headlessui/react";

Preview.propTypes = {
  userAframe: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  changeConfirmed: PropTypes.func.isRequired,
  submitted: PropTypes.bool.isRequired,
  changeSubmitted: PropTypes.func.isRequired,
};

// preview component will allow the user to see a preview of their a-frame project and how it will look like in the explore page
export default function Preview({
  userAframe,
  title,
  description,
  name,
  tags,
  changeConfirmed,
  submitted,
  changeSubmitted,
}) {
  return (
    <>
      {
        <Dialog
          open={submitted}
          onClose={() => changeSubmitted()}
          className="fixed inset-0 w-screen h-screen flex justify-center items-center"
        >
          {/* z-index may affect inset-0 for the child here */}
          <DialogPanel className="relative z-30 w-96 h-96 bg-sec-2 rounded-xl"></DialogPanel>

          <div className="inset-0 flex w-screen h-screen absolute bg-prim-half-2 z-10" />
        </Dialog>
      }
    </>
  );
}
