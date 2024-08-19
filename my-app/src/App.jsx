import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import Contribute from "./pages/Contribute";
import Account from "./pages/Account";
import Success from "./pages/Success";
import Error from "./pages/Error";

export default function App() {
  return (
    <>
      {/* BrowserRouter manages browser history and URL, while routes is a container to hold the different route  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/account" element={<Account />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
