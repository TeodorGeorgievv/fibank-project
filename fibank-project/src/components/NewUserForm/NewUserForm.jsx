import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewUserForm.module.css";
import Dropdown from "../UI/Dropdown";
import zxcvbn from "zxcvbn";

const NewUserForm = () => {
  const [selected, setSelected] = useState("Град");
  const [score, setScore] = useState(0);

  const testStrengthPassword = (e) => {
    if (e.target.value !== "") {
      let pass = zxcvbn(e.target.value);
      setScore(pass.score);
    } else {
      setScore(0);
    }
  };

  return (
    <section className={classes.form}>
      <div className={classes.heading}>
        <div className={classes.btnContainer}>
          <Link to="/login">
            <h5>
              <i class="fa fa-chevron-left"></i> Назад
            </h5>
          </Link>
        </div>
        <h3 className={classes.title}>Създаване на профил</h3>
      </div>
      <div className={classes.dataTitle}>
        <h5>Лични данни</h5>
      </div>
      <form>
        <div className={classes.control}>
          <input type="text" placeholder="Име" name="fname" />
          <input type="text" placeholder="Фамилия" name="lname" />
        </div>
        <div className={classes.control}>
          <Dropdown selected={selected} setSelected={setSelected} />
          <input type="text" placeholder="ЕГН" />
        </div>
        <div className={classes.control}>
          <input type="address" placeholder="Адрес" />
        </div>
        <div className={classes.control}>
          <input type="email" placeholder="Email адрес" />
          <input type="tel" placeholder="Телефон" />
        </div>
        <div className={classes.profileTitle}>
          <h5>Профил</h5>
        </div>
        <div className={classes.control}>
          <div className={classes.userData}>
            <input type="text" placeholder="Потребителско име" />
            <input
              onChange={testStrengthPassword}
              type="password"
              placeholder="Парола"
            />
            <div className={classes.indicator}>
              <span data-score={score} className={classes.none} />
              <span data-score={score} className={classes.weak} />
              <span data-score={score} className={classes.medium} />
              <span data-score={score} className={classes.average} />
              <span data-score={score} className={classes.good} />
              <span data-score={score} className={classes.strong} />
            </div>
            <input type="text" placeholder="Повтори парола" />
          </div>
          <div className={classes["pass-requirments"]}>
            <h4>Паролата трябва да съдържа:</h4>
            <p>Малки букви</p>
            <p>Големи букви</p>
            <p>Цифри</p>
            <p>Специален символ</p>
          </div>
        </div>
        <div>
          <div className={classes["radio-type"]}>
            <p>Тип посредничество:</p>
            <div>
              <input type="radio" id="broker" name="type" />
              <label htmlFor="broker">Посредник</label>
            </div>
            <div>
              <input type="radio" id="companyAssociate" name="type" />
              <label htmlFor="companyAssociate">Посредник</label>
            </div>
            <div>
              <input type="radio" id="privateAssociate" name="type" />
              <label htmlFor="privateAssociate">Посредник</label>
            </div>
          </div>
          <div className={classes["radio-contract"]}>
            <p>Имате ли сключен договор с Банката?</p>
            <div>
              <input type="radio" id="trueBool" name="contract" />
              <label htmlFor="trueBool">Имам</label>
            </div>
            <div>
              <input type="radio" id="falseBool" name="contract" />
              <label htmlFor="falseBool">Нямам</label>
            </div>
          </div>
        </div>
        <div className={classes["button-container"]}>
          <button className={classes.registerBtn}>Регистрация</button>
        </div>
      </form>
    </section>
  );
};

export default NewUserForm;
