
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/home/Home";
import Accueil from "./pages/Accueil/Accueil";
import Apropos from "./pages/Apropos/Apropos";
import "./index.css";
import Invalid from "./pages/Invalid/Invalid";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
  <Routes>
      <Route path="/" element={<Outlet />}>
      <Route index element={<Home />} />
      <Route path="accueil" element={<Accueil />} />
      <Route path="apropos" element={<Apropos />} />
      <Route path="*" element={<Invalid />} />
      </Route>
      <Route path="*" element={<Invalid />} />  
  </Routes>
</Router>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
