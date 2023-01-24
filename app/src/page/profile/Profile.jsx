import React from "react";
import HeaderTop from "../../components/header/headerTop/HeaderTop";
import Article from "../../components/article/Article";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/action/user";

const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("articles");
  const articles = useSelector(state => state.user.articles)
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
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

  React.useEffect(() => {
    dispatch(getUserData())
  }, []);

  const date = new Date(user.createdAt);

  return (
    <div className="profile">
      <HeaderTop />
      <div className="profile__inner">
        <div className="profile__inner-name">{user.fullName}</div>
        <div className="profile__inner-datereg">
          Дата регистрации:
          <span>{date.toLocaleDateString("ru-Ru", option)}</span>
        </div>
        <div className="profile__inner-btn">
          <div onClick={onClickArticleId} className={addClassNameArticle()}>
            Статьи
          </div>
          <div onClick={onClickCommentId} className={addClassNameComment()}>
            Комментарии
          </div>
        </div>
        {<Article />}
      </div>
    </div>
  );
};

export default Profile;
