import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";

export default function Success() {
  const [cookieExists, setCookieExists] = useState(false);
  const [loggedInAs, setLoggedInAs] = useState("");

  const goToExplore = () => {
    window.location.href = "/explore";
  };

  const goToContribute = () => {
    window.location.href = "/contribute";
  };

  const serverURL = import.meta.env.VITE_SERVER;

  useEffect(() => {
    const changeCookieExists = (username) => {
      setCookieExists(true);

      setLoggedInAs(username);
    };

    fetch(serverURL + "/api/account/checkCookie", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === "exists") {
          changeCookieExists(data.username);
        }
      });
  }, [serverURL, cookieExists]);

  function deleteAccount() {
    fetch(serverURL + "/api/account/deleteAccount", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      response.json().then((data) => {
        window.alert(data.result);

        // the logged in as will no longer be dislayed once the cookie is void after account deletion.
        setCookieExists(false);
      });
    });
  }

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        <Navigation />

        <div className="w-full px-12 flex justify-center mb-5 2xl:mb-0">
          <div className="w-full flex xl:bg-sec-3 dark:xl:bg-prim-2 min-h-250 rounded-2xl xl:p-12 flex-col gap-10 xl:gap-12 relative">
            <section className="flex flex-col gap-5 xl:gap-10 xl:w-10/12">
              <div className="flex gap-5 sm:justify-between lg:justify-start items-center">
                <h1 className="text-5xl font-league text-prim-2 dark:text-prim-1">
                  You&apos;re in!
                </h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.75}
                  stroke="currentColor"
                  className="w-16 h-16 text-prim-2 dark:text-prim-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>

              <p className="text-xl xl:text-2xl font-league text-prim-2 dark:text-prim-1">
                With an account, you&apos;re able to autofill you credentials
                when contributing projects.
              </p>
              <p className="text-xl xl:text-2xl font-league text-prim-2 dark:text-prim-1">
                Please keep in mind that you should never reuse the same
                password for all of your accounts. If you would like to delete
                your account, you have the option to do so below. Otherwise, go
                explore or contribute!
              </p>
            </section>

            <section className="flex w-full flex-col gap-5 sm:mb-5 xl:mb-0 xl:gap-8">
              <p
                className="text-xl bg-prim-5 rounded-xl shadow-none dark:shadow-xl font-semibold w-72 text-center py-4 hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200 text-white dark:text-prim-1"
                onClick={() => deleteAccount()}
              >
                Delete My Account
              </p>
              <p
                className="text-xl bg-green-800 rounded-xl shadow-none dark:shadow-xl font-semibold w-72 text-center py-4 hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200 text-white dark:text-prim-1"
                onClick={() => goToExplore()}
              >
                Explore
              </p>
              <p
                className="text-xl bg-green-800 rounded-xl shadow-none dark:shadow-xl font-semibold w-72 text-center py-4 hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200 text-white dark:text-prim-1"
                onClick={() => goToContribute()}
              >
                Contribute
              </p>
            </section>

            {cookieExists && (
              <p className="absolute xl:left-auto -bottom-8 left-0 xl:right-5 xl:bottom-3 text-prim-2 dark:text-prim-1 font-league text-xl">
                You are signed in as: {loggedInAs}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
