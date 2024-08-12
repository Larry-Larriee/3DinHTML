import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Explore from "./pages/Explore";
import Contribute from "./pages/Contribute";

export default function App() {
  return (
    <>
      {/* BrowserRouter manages browser history and URL, while routes is a container to hold the different route  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
