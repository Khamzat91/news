import React from "react";
import { useNavigate } from "react-router-dom";
import articlePost from "../../images/articlePost.png";
import { ReactComponent as Viewing } from "../../images/content/viewing.svg";
import "./index.scss";

const Article = ({ id,
  title,
  text,
  description,
  views,
  createdAt}) => {
  const navigate = useNavigate();

  const onClickNavFullarticle = () => {
    navigate("/fullarticle");
  };

  return (
    <div onClick={onClickNavFullarticle} className="article active">
      <div className="article__inner">
        <div className="article__info">
          <div className="article__info-title">{title}</div>
          <div className="article__info-text">{text}</div>
          <div className="article__info-date">
            <div className="article__info-date__published">
              {createdAt}
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
