import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Exit } from "../../images/content/exit.svg";
import "./index.scss";

const OpenMenu = ({handleExitToggle}) => {



  return (
    <div className="open-menu">
      <div className="open-menu__inner">
        <div className="open-menu__inner-info">
          <div className="open-menu__inner-info__name">Вася Пупкин</div>
          <div className="open-menu__inner-info__date">
            Дата регистрации: 12 августа 2019 в 08:06
          </div>
        </div>
        <ul className="open-menu__inner-option">
          <li onClick={handleExitToggle}>
            <Link to="/">Главная</Link>
          </li>
          <li onClick={handleExitToggle}>
          <Link to="/profile">Мой профиль</Link>
          </li>
          <li onClick={handleExitToggle}>
            <a href="#">Создать запись</a>
          </li>
          <li onClick={handleExitToggle}>
            <a href="#">Выйти</a>
          </li>
        </ul>
        <div className="open-menu__inner-exit">
          <Exit onClick={handleExitToggle} className="open-menu__inner-exit__btn"/>
          <div className="open-menu__inner-exit__title">МЕНЮ</div>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
