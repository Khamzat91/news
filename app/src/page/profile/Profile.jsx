import React from "react";
import HeaderTop from "../../components/header/headerTop/HeaderTop";
import Article from "../../components/article/Article";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/action/user";
import Comment from "../../components/comments/Comment";

const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState("articles");
  const articles = useSelector((state) => state.user.articles);
  const comments = useSelector((state) => state.comments.comments);
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
    dispatch(getUserData());
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
        {activeTab === "articles" &&
          articles?.map((article) => (
            <Article
              key={article._id}
              id={article._id}
              title={article.title}
              text={article.text}
              description={article.description}
              views={article.views}
              createdAt={article.createdAt}
            />
          ))}
        {activeTab === "comments" &&
          comments?.map((comment) => (
            <Comment
              key={comment._id}
              id={comment._id}
              text={comment.text}
              idComment={comment._id}
              fullName={comment.user.fullName}
              createdAt={comment.createdAt}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
