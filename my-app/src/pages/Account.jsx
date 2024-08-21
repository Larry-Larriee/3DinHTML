import React, { useState, useEffect, useRef } from "react";
import Navigation from "../components/Navigation";

export default function Contribute() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        });
    }
  }, [signIn, serverURL, username, password]);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        <Navigation />

        <div className="w-full px-12 flex justify-center">
          <div className="w-full flex xl:bg-prim-2 xl:min-h-250 justify-center rounded-2xl">
            <section className="w-full xl:w-1/3 xl:bg-prim-3 items-center rounded-2xl flex flex-col xl:my-10 xl:p-10 gap-12">
              <p className="text-5xl font-league text-prim-1">Account</p>

              <div className="flex flex-col gap-1 w-full flex-none">
                <p className="font-league text-prim-1 text-base">Username</p>
                <input
                  className="bg-prim-4 h-12 text-prim-1 font-league text-xl rounded-lg p-4 focus:outline-none"
                  type="text"
                  ref={userNameRef}
                  onChange={() => changeUsername()}
                />
              </div>

              <div className="flex flex-col gap-1 w-full flex-none">
                <p className="font-league text-prim-1 text-base">Password</p>
                <input
                  className="bg-prim-4 h-12 text-prim-1 font-league text-xl rounded-lg p-4 focus:outline-none"
                  type="text"
                  ref={passwordRef}
                  onChange={() => changePassword()}
                />
              </div>

              <article className="flex w-full flex-col h-full justify-end">
                <div className="flex gap-8 w-full">
                  <p
                    className="w-36 h-12 shadow-lg hover:cursor-pointer duration-200 ease-in-out transition hover:scale-105 hover:bg-green-700 rounded-lg bg-prim-5 text-prim-1 font-semibold text-xl leading-button text-center"
                    onClick={() => setSignUp(true)}
                  >
                    Sign Up
                  </p>
                  <p
                    className="w-36 h-12 shadow-lg hover:cursor-pointer duration-200 ease-in-out transition hover:scale-105 hover:bg-green-700 rounded-lg bg-prim-5 text-prim-1 font-semibold text-xl leading-button text-center"
                    onClick={() => setSignIn(true)}
                  >
                    Sign In
                  </p>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
