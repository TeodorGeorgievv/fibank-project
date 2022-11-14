import React, { useState } from "react";

import useInput from "../../hooks/use-input";

import { Link } from "react-router-dom";
import classes from "./NewUserForm.module.css";
import Dropdown from "../UI/Dropdown";
import zxcvbn from "zxcvbn";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const NewUserForm = () => {
  //Validating first name input using custom hook

  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  //Validating email input using custom hook

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const [selected, setSelected] = useState("Град");
  const [score, setScore] = useState(0);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

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
              <i className="fa fa-chevron-left"></i> Назад
            </h5>
          </Link>
        </div>
        <h3 className={classes.title}>Създаване на профил</h3>
      </div>
      <div className={classes.dataTitle}>
        <h5>Лични данни</h5>
      </div>
      <form onSubmit={submitHandler}>
        <div className={firstNameHasError ? "control invalid" : "control"}>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            type="text"
            placeholder="Име"
            name="fname"
            className="input"
          />
          {firstNameHasError && (
            <p className={classes["error-text"]}>Моля, попълнете.</p>
          )}
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            placeholder="Фамилия"
            name="lname"
            className="input"
          />
          {lastNameHasError && (
            <p className={classes["error-text"]}>Моля, попълнете.</p>
          )}
        </div>
        <div className={classes.control}>
          <Dropdown selected={selected} setSelected={setSelected} />
          <input type="text" placeholder="ЕГН" />
        </div>
        <div className={classes.control}>
          <input type="address" placeholder="Адрес" />
        </div>
        <div className={emailHasError ? "control invalid" : "control"}>
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            type="email"
            placeholder="Email адрес"
            className="input"
          />
          {emailHasError && (
            <p className={classes["error-text"]}>Моля, попълнете.</p>
          )}
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

            <input type="radio" id="broker" name="type" />
            <label htmlFor="broker">Посредник</label>

            <input type="radio" id="companyAssociate" name="type" />
            <label htmlFor="companyAssociate">Сътрудник (ЮЛ)</label>

            <input type="radio" id="privateAssociate" name="type" />
            <label htmlFor="privateAssociate">Сътрудник (ФЛ)</label>
          </div>
          <div className={classes["radio-contract"]}>
            <p>Имате ли сключен договор с Банката?</p>

            <input type="radio" id="trueBool" name="contract" />
            <label htmlFor="trueBool">Имам</label>

            <input type="radio" id="falseBool" name="contract" />
            <label htmlFor="falseBool">Нямам</label>
          </div>
        </div>
        <div className={classes["button-container"]}>
          <button disabled={!formIsValid} className={classes.registerBtn}>
            Регистрация
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewUserForm;
