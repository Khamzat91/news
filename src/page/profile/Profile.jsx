import React from "react";
import "./index.scss";

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("articles");
  const onClickArticleId = () => {
    setActiveTab("articles");
  };

  const onClickCommentId = () => {
    setActiveTab("comments");
  };

  const addClassNameArticle = () => {
    return (
      "profile__inner-btn__article " +
      (activeTab === "articles" ? "active" : "")
    );
  };

  const addClassNameComment = () => {
    return (
      "profile__inner-btn__comment " +
      (activeTab === "comments" ? "active" : "")
    );
  };

  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__inner-name">Вася Пупкин</div>
        <div className="profile__inner-datereg">
          Дата регистрации: <span>12 августа 2019 в 08:06</span>
        </div>
        <div className="profile__inner-btn">
          <div onClick={onClickArticleId} className={addClassNameArticle()}>
            Статьи
          </div>
          <div onClick={onClickCommentId} className={addClassNameComment()}>
            Комментарии
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
