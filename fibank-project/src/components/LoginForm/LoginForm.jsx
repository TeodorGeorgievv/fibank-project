import React from "react";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={classes.form}>
      <h1>Сайт за контрагенти</h1>
      <form action="">
        <h3>Вход</h3>
        <div className={classes.username}>
          <input type="text" placeholder="username" />
        </div>
        <div className={classes.password}>
          <input type="text" placeholder="password" />
        </div>
        <div>
          <button>Забравена парола</button>
        </div>
        <div className={classes.actions}>
          <input type="checkbox" />
          <button>Влез</button>
        </div>
        <div>
          <span>
            Имате създаден профил? - <button>Регистрирай се</button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
