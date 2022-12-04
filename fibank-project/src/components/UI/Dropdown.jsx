import React, { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["Бургас", "Варна", "София", "Пловдив", "Стара Загора"];
  return (
    <div className={classes.dropdown}>
      <div
        onClick={() => setIsActive(!isActive)}
        className={classes["dropdown-btn"]}
      >
        {selected}
        <i className="fa fa-chevron-down"></i>
      </div>
      {isActive && (
        <div className={classes["dropdown-content"]}>
          {options.map((option) => (
            <div
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
              className={classes["dropdown-item"]}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
