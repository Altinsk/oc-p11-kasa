
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as MainRouter,
  Route,
  Routes
} from "react-router-dom";
import MainLayout from "../src/MainLayout";
import Home from "./page/home/Home";
import About from "./page/about/About";
import InvalidRoute from "./component/invalidroute/InvalidRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <MainRouter>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<InvalidRoute />} />
          </Route>     
        </Routes>
    </MainRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
