import React from "react";
import classes from "./Background.module.css";

const Background = (props) => {
  return (
    <div className={classes.background}>
      <img
        className={classes.backgroundImage}
        src={props.backgroundImage}
        alt="background"
      />
    </div>
  );
};

export default Background;
