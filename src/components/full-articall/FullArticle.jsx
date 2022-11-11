import React from "react";
import { ReactComponent as Fullview } from "../../images/content/fullview.svg";
import fullImg from "../../images/fullImg.png";
import Article from "../article/Article";
import "./index.scss";

const FullArticle = () => {
  return (
    <div className="full-article">
         <div className="full-article__wrapper">
      <div className="full-article__image">
        <img src={fullImg} alt="" />
      </div>
      <div className="full-article__inner">
        <div className="full-article__inner__date">
          <div className="full-article__inner__date-published">
            12 августа 2019 в 08:06
          </div>
          <div className="full-article__inner__date-viewing">
            <Fullview />
            <span>55</span>
          </div>
        </div>
        <div className="full-article__inner__title">
          Какой-то очень интересный заголовок
        </div>
        <div className="full-article__inner__text">
          Я часто замечаю, что начинающие фронтенд-разработчики по несколько раз
          то начинают, то забрасывают изучение технологий.
        </div>
      
      <div className="full-article__inner-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
        fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
        scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis quam
        accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla
        sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet
        amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada
        non nisi.
      </div>
      </div>
      </div>
      <Article/>
    </div>
  );
};

export default FullArticle;
