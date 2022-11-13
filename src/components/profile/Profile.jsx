import React from "react";
import "./index.scss";

const Profile = () => {
  const [color, setColor] = React.useState(false);
  const handlerClickColor = () => {
    setColor(!color);
  };

  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__inner-name">Вася Пупкин</div>
        <div className="profile__inner-datereg">
          Дата регистрации: <span>12 августа 2019 в 08:06</span>
        </div>
        <div className="profile__inner-btn">
          <div
          onClick={handlerClickColor}
            className={"profile__inner-btn__article " + (color ? "active" : "")}
          >
            Статьи
          </div>
          <div
          onClick={handlerClickColor}
            className={
              "profile__inner-btn__comments " + (color ? "" : "active")
            }
          >
            Комментарии
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
