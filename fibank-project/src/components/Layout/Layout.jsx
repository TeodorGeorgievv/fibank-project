import React from "react";
import MainNavigation from "./MainNavigation";
import Background from "./Background";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <Background backgroundImage={"https://iili.io/y7huhx.jpg"} />
      <div className={classes.container}>
        <MainNavigation logo="https://iili.io/yTysl1.png" />
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
