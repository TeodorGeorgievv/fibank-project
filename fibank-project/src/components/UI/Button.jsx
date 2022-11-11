import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes["button-wrap"]}>
      <button className={classes.button}>{props.title}</button>
    </div>
  );
};

export default Button;
