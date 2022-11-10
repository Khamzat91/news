import React from "react";
import { ReactComponent as Exit } from "../../images/content/exit.svg";
import "./index.scss";

const OpenMenu = () => {
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
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Мой профиль</a>
          </li>
          <li>
            <a href="#">Создать запись</a>
          </li>
          <li>
            <a href="#">Выйти</a>
          </li>
        </ul>
        <div className="open-menu__inner-exit">
          <div className="open-menu__inner-exit__title">МЕНЮ</div>
          <Exit className="open-menu__inner-exit__btn"/>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
