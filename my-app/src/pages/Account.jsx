import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import UseTheme from "../components/hooks/UseTheme";

export default function Contribute() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [cookieExists, setCookieExists] = useState(false);
  const [loggedInAs, setLoggedInAs] = useState("");

  const userNameRef = useRef();
  const passwordRef = useRef();

  const changeUsername = () => {
    setUsername(userNameRef.current.value);
  };

  const changePassword = () => {
    setPassword(passwordRef.current.value);
  };

  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const serverURL = import.meta.env.VITE_SERVER;

  useEffect(() => {
    if (signUp) {
      fetch(serverURL + "/api/account/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSignUp(false);
          if (data.result === "Account Created")
            window.location.href = "/success";
          else window.alert(data.result);
        });
    }
  }, [signUp, serverURL, username, password]);

  useEffect(() => {
    if (signIn) {
      fetch(serverURL + "/api/account/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSignIn(false);
          if (data.result === "Signed In") window.location.href = "/success";
          else window.alert(data.result);
        });
    }
  }, [signIn, serverURL, username, password]);

  useEffect(() => {
    const changeCookieExists = (username) => {
      // you don't need to setCookiesExists to false because when the user moves from the success page (where deleteAccount is called) to the account page
      // the useEffect will mount check if the cookie exists and by default, cookieExists is false
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

  let { theme, toggleTheme } = UseTheme();

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        <Navigation />

        <div className="flex w-full justify-center px-12">
          <div className="xl:bg-sec-1 dark:xl:bg-prim-2 xl:min-h-250 relative flex w-full justify-center rounded-2xl shadow-md dark:shadow-none">
            <section className="bg-sec-3 dark:xl:bg-prim-3 flex w-full flex-col items-center gap-12 rounded-2xl xl:my-10 xl:w-1/3 xl:p-10">
              <p className="text-prim-2 dark:text-prim-1 font-league text-5xl">
                Account
              </p>

              <div className="flex w-full flex-none flex-col gap-1">
                <p className="text-prim-2 dark:text-prim-1 font-league text-base">
                  Username
                </p>
                <input
                  className="dark:bg-prim-4 text-prim-2 dark:text-prim-1 h-12 rounded-lg bg-white p-4 font-league text-xl focus:outline-none"
                  type="text"
                  ref={userNameRef}
                  onChange={() => changeUsername()}
                />
              </div>

              <div className="flex w-full flex-none flex-col gap-1">
                <p className="text-prim-2 dark:text-prim-1 font-league text-base">
                  Password
                </p>
                <input
                  className="dark:bg-prim-4 text-prim-2 dark:text-prim-1 h-12 rounded-lg bg-white p-4 font-league text-xl focus:outline-none"
                  type="text"
                  ref={passwordRef}
                  onChange={() => changePassword()}
                />
              </div>

              <article className="flex h-full w-full flex-col justify-end">
                <div className="flex w-full gap-8">
                  <p
                    className="bg-prim-5 dark:text-prim-1 leading-button h-12 w-36 rounded-lg text-center text-xl font-semibold text-white shadow-none transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-700 dark:shadow-lg"
                    onClick={() => setSignUp(true)}
                  >
                    Sign Up
                  </p>
                  <p
                    className="bg-prim-5 dark:text-prim-1 leading-button h-12 w-36 rounded-lg text-center text-xl font-semibold text-white shadow-none transition duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-700 dark:shadow-lg"
                    onClick={() => setSignIn(true)}
                  >
                    Sign In
                  </p>
                </div>
              </article>
            </section>

            {cookieExists && (
              <p className="text-prim-2 dark:text-prim-1 absolute -bottom-16 left-0 font-league text-xl xl:bottom-3 xl:left-auto xl:right-5">
                You are signed in as: {loggedInAs}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
