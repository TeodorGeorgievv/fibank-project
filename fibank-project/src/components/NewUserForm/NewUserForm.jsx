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
      <form>
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

        <div className={classes.control}>
          <div>
            <input type="text" placeholder="Потребителско име" />
            <input type="text" placeholder="Парола" />
            <input type="text" placeholder="Повтори парола" />
          </div>
          <div className={classes["pass-requirments"]}>
            <h5>Паролата трябва да съдържа:</h5>
            <p>Малки букви</p>
            <p>Големи букви</p>
            <p>Цифри</p>
            <p>Специален символ</p>
          </div>
        </div>
        <div>
          <div className={classes["radio-type"]}>
            <input type="radio" id="broker" name="type" />
            <label htmlFor="broker">Посредник</label>
            <input type="radio" id="companyAssociate" name="type" />
            <label htmlFor="companyAssociate">Посредник</label>
            <input type="radio" id="privateAssociate" name="type" />
            <label htmlFor="privateAssociate">Посредник</label>
          </div>
          <div classes={classes["radio-contract"]}>
            <input type="radio" id="trueBool" name="contract" />
            <label htmlFor="trueBool">Имам</label>
            <input type="radio" id="falseBool" name="contract" />
            <label htmlFor="falseBool">Нямам</label>
          </div>
        </div>
        <div>
          <button>Регистрация</button>
        </div>
      </form>
    </section>
  );
};

export default NewUserForm;
