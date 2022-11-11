import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import Background from "./Background";

const Layout = (props) => {
  return (
    <div>
      <Background backgroundImage={"https://iili.io/y7huhx.jpg"} />
      <MainNavigation logo="https://iili.io/yTysl1.png" />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
