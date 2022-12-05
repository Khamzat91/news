import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Exit } from "../../images/content/exit.svg";
import { setIsAuth } from "../../redux/action/user";
import "./index.scss";

const OpenMenu = ({ handleExitToggle }) => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeUserAuth = () => {
    localStorage.removeItem('user')
    dispatch(setIsAuth(!isAuth))
    navigate('/')
  }

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
          {isAuth &&
            <>
              <li onClick={handleExitToggle}>
                <Link to="/profile">Мой профиль</Link>
              </li>
              <li onClick={handleExitToggle}>
                <Link to="/createarticle">Создать запись</Link>
              </li>
              <li onClick={handleExitToggle}>
                <a onClick={removeUserAuth} href="#">Выйти</a>
              </li>
            </>
          }
        </ul>
        <div className="open-menu__inner-exit">
          <Exit
            onClick={handleExitToggle}
            className="open-menu__inner-exit__btn"
          />
          <div className="open-menu__inner-exit__title">МЕНЮ</div>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
