import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import articlePost from "../../images/articlePost.png";
import { ReactComponent as Viewing } from "../../images/content/viewing.svg";
import "./index.scss";

const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Article = ({ id, title, text, views, createdAt }) => {
  const navigate = useNavigate();
  const date = new Date(createdAt);
  const param = useParams();
  const onClickNavFullarticle = () => {
    navigate("/fullarticle/"+id);
  };

  return (
    <div onClick={onClickNavFullarticle} className={"article "+ (param.id === id ? 'active' : '')}>
      <div className="article__inner">
        <div className="article__info">
          <div className="article__info-title">{title}</div>
          <div className="article__info-text">{text}</div>
          <div className="article__info-date">
            <div className="article__info-date__published">
              {date.toLocaleDateString("ru-RU", option)}
            </div>
            <div className="article__info-date__viewing">
              <Viewing />
              <span>{views}</span>
            </div>
          </div>
        </div>
        <div className="article__image">
          <img src={articlePost} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Article;
