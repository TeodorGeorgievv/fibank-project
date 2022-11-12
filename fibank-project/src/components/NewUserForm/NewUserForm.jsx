import React from "react";
import { Link } from "react-router-dom";
import classes from "./NewUserForm.module.css";
import Select from "react-select";

const options = [
  { value: "burgas", label: "Бургас" },
  { value: "varna", label: "Варна" },
  { value: "plovdiv", label: "Пловдив" },
  { value: "staraZagora", label: "Стара Загора" },
  { value: "sofia", label: "София" },
];

const NewUserForm = () => {
  return (
    <section className={classes.form}>
      <div className={classes.heading}>
        <Link to="/login">
          <h5>НАЗАД</h5>
        </Link>
        <h3 className={classes.title}>Създаване на профил</h3>
      </div>
      <div className={classes.subtitle}>
        <h5>Лични данни</h5>
      </div>
      <form>
        <section className={classes.personalInfoSection}>
          <div className={classes.control}>
            <input type="text" placeholder="Име" />
            <input type="text" placeholder="Фамилия" />
          </div>
          <div className={classes.control}>
            <Select
              className={classes["react-select-container"]}
              options={options}
            />
            <input type="text" placeholder="ЕГН" />
          </div>
          <div className={classes.control}>
            <input type="text" placeholder="Адрес" />
          </div>
          <div className={classes.control}>
            <input type="text" placeholder="Email адрес" />
            <input type="text" placeholder="Телефон" />
          </div>
        </section>
        <section className={classes.profileSection}>
          <div className={classes.subtitle}>
            <h5>Профил</h5>
          </div>
          <div className={classes.control}>
            <div className={classes.userData}>
              <input type="text" placeholder="Потребителско име" />
              <input type="text" placeholder="Парола" />
              <div className={classes.indicator}>
                <span className={classes.none}>1</span>
                <span className={classes.weak}>2</span>
                <span className={classes.medium}>3</span>
                <span className={classes.average}>4</span>
                <span className={classes.good}>5</span>
                <span className={classes.strong}>6</span>
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
        </section>
      </form>
    </section>
  );
};

export default NewUserForm;
