import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation logo="https://iili.io/yTysl1.png" />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
