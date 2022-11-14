import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import { Link } from "react-router-dom";
import classes from "./NewUserForm.module.css";
import Dropdown from "../UI/Dropdown";
import zxcvbn from "zxcvbn";

let phoneno = /^\d{10}$/;
const isPhone = (value) => value.match(phoneno);

const isNotEmpty = (value) => value.trim() !== "";
const NewUserForm = () => {
  //Validating first and last name input using custom hook
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

  //Validating phone number, must be 10 digits
  const {
    value: phoneNumValue,
    isValid: phoneNumIsValid,
    hasError: phoneNumHasError,
    valueChangeHandler: phoneNumChangeHandler,
    inputBlurHandler: phoneNumBlurHandler,
    reset: resetPhoneNum,
  } = useInput(isPhone);

  const [selected, setSelected] = useState("Град");
  const [score, setScore] = useState(0);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && phoneNumIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, phoneNumValue);
    resetFirstName();
    resetLastName();
    resetPhoneNum();
  };

  //Password progress bar logic

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
              <i className="fa-solid fa-chevron-left"></i> Назад
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
        </div>
        <div className={classes.control}>
          <Dropdown selected={selected} setSelected={setSelected} />
          <input type="text" placeholder="ЕГН" />
        </div>
        <div className={classes.control}>
          <input type="address" placeholder="Адрес" />
        </div>
        <div className={phoneNumHasError ? "control invalid" : "control"}>
          <input type="email" placeholder="Email адрес" />
          <input
            onChange={phoneNumChangeHandler}
            onBlur={phoneNumBlurHandler}
            type="tel"
            className="input"
            placeholder="Телефон"
          />
          {phoneNumHasError && (
            <div className={classes.phoneErrorContainer}>
              <p className={classes["error-text"]}>Моля, попълнете.</p>
            </div>
          )}
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
            <p>
              <i className="fa-solid fa-check"></i>Малки букви
            </p>
            <p>
              <i className="fa-solid fa-check"></i>Големи букви
            </p>
            <p>
              <i className="fa-solid fa-check"></i>Цифри
            </p>
            <p>
              <i className="fa-solid fa-check"></i>Специален символ
            </p>
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
