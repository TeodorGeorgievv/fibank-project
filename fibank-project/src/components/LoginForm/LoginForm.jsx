import React, { Fragment, useState } from "react";
import classes from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

const LoginForm = () => {
  return (
    <Fragment>
      <h1 className={classes.heading}>Сайт за контрагенти</h1>
      <section className={classes.form}>
        <h3 className={classes.title}>Вход</h3>
        <form>
          <div className={classes.control}>
            <input type="text" placeholder="Потребителско име" />
          </div>
          <div className={classes.control}>
            <input type="password" placeholder="Парола" />
          </div>
          <div className={classes.passBtn}>
            <Link to="/register">Забравена парола</Link>
          </div>
          <div className={classes.actions}>
            <div className={classes.checkbox}>
              <input id="rememberMe" type="checkbox" />
              <label htmlFor="rememberMe">Запомни ме</label>
            </div>
            <div>
              <Button title="Влез" />
            </div>
          </div>
          <div className={classes["register-button"]}>
            <span>
              Нямате създаден профил? -
              <Link to="/register">Регистрирай се</Link>
            </span>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default LoginForm;
