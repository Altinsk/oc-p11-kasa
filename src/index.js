import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as MainRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../src/MainLayout";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import Location from "./page/Location/Location";
import InvalidRoute from "./component/Invalidroute/InvalidRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="About/:id" element={<Location />} />
        <Route path="*" element={<InvalidRoute />} />
      </Route>
    </Routes>
  </MainRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
