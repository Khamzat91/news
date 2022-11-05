import React from "react";
import articlePost from "../../images/articlePost.png";
import { ReactComponent as Viewing } from "../../images/content/viewing.svg";
import "./index.scss";

const Article = () => {
  return (
    <div className="article">
      <div className="article__info">
        <div className="article__info-title">
          Какой-то очень интересный заголовок
        </div>
        <div className="article__info-text">
          На работе потребовалось запилить задачу для автоматического
          определения города при совершении заказа.
        </div>
        <div className="article__info-date">
          <div className="article__info-date__published">
            12 августа 2019 в 08:06
          </div>
          <div className="article__info-date__viewing">
            <Viewing />
            <span>55</span>
          </div>
        </div>
      </div>
      <div className="article__image">
        <img src={articlePost} alt="" />
      </div>
    </div>
  );
};

export default Article;
