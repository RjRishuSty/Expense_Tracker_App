import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import NotFound from "./Page/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
