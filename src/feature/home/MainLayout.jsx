import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
