import React from "react";
import { Outlet } from "react-router";
import Header from "../src/component/header/Header";
import Footer from "../src/component/footer/Footer";

const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
