import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <nav>
      <figure className={classes.nav}>
        <NavLink to="/">
          <img className={classes.logo} src={props.logo} alt="Fibank Logo" />
        </NavLink>
      </figure>
    </nav>
  );
};

export default MainNavigation;
