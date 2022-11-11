import React from "react";
import { Link } from "react-router-dom";
import classes from "./NewUserForm.module.css";

const NewUserForm = () => {
  return (
    <section className={classes.form}>
      <div className={classes.heading}>
        <Link to="/login">
          <h5>НАЗАД</h5>
        </Link>
        <h3 className={classes.title}>Създаване на профил</h3>
      </div>
      <form>
        <div className={classes.control}>
          <input type="text" placeholder="Име" />
          <input type="text" placeholder="Фамилия" />
        </div>
        <div className={classes.control}>
          <input type="text" placeholder="Град" />
          <input type="text" placeholder="ЕГН" />
        </div>
        <div className={classes.control}>
          <input type="text" placeholder="Адрес" />
        </div>
        <div className={classes.control}>
          <input type="text" placeholder="Email адрес" />
          <input type="text" placeholder="Телефон" />
        </div>
      </form>
    </section>
  );
};

export default NewUserForm;
