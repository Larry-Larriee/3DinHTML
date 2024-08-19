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

  useEffect(() => {
    if (signUp) {
      console.log("Sign Up");
      // fetch user creation
      setSignUp(false);
    }
    if (signIn) {
      console.log("Sign In");
      // fetch user authentication
      setSignIn(false);
    }
  }, [signUp, signIn]);

  return (
    <>
      <div className="flex w-full flex-col items-center gap-12">
        <Navigation />

        <div className="w-full px-12 flex justify-center">
          <div className="w-full flex bg-prim-2 min-h-250 justify-center rounded-2xl">
            <section className="w-1/3 bg-prim-3 items-center rounded-2xl flex flex-col my-10 p-10 gap-12">
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
