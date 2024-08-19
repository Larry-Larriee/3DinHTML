import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";

export default function Success() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        <Navigation />

        <div className="w-full px-12 flex justify-center">
          <div className="w-full flex bg-prim-2 min-h-250 rounded-2xl p-12 flex-col gap-12">
            <section className="flex flex-col gap-10 w-10/12">
              <div className="flex gap-5 items-center">
                <h1 className="text-5xl font-league text-prim-1">
                  You&apos;re in!
                </h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.75}
                  stroke="#deded6"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>

              <p className="text-2xl font-league text-prim-1">
                With an account, you&apos;re able to autofill you credentials
                when contributing projects.
              </p>
              <p className="text-2xl font-league text-prim-1">
                Please keep in mind that you should never reuse the same
                password for all of your accounts. If you would like to delete
                your account, you have the option to do so below. Otherwise, go
                explore or contribute!
              </p>
            </section>

            <section className="flex w-full flex-col gap-8">
              <p className="text-xl bg-prim-5 rounded-xl shadow-xl font-semibold w-72 text-center py-4 hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200 text-prim-1">
                Delete My Account
              </p>
              <p className="text-xl bg-green-800 rounded-xl shadow-xl font-semibold w-72 text-center py-4 hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200 text-prim-1">
                Explore
              </p>
              <p className="text-xl bg-green-800 rounded-xl shadow-xl font-semibold w-72 text-center py-4 hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200 text-prim-1">
                Contribute
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
