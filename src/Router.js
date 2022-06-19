import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./main/Main";
import Login from "./login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
