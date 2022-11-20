import React from "react";
import { ReactComponent as Fullview } from "../../images/content/fullview.svg";
import fullImg from "../../images/fullImg.png";
import Comments from "../comments/Comments";
import "./index.scss";

const FullArticle = () => {
  return (
    <div className="full-article">
      <div className="full-article__wrapper">
          <img className="full-article__image" src={fullImg} alt="" />
        <div className="full-article__left">
        <div className="full-article__box">
          <div className="full-article__inner">
            <div className="full-article__box-date">
              <div className="full-article__box-date__published">
                12 августа 2019 в 08:06
              </div>
              <div className="full-article__box-date__viewing">
                <Fullview />
                <span>55</span>
              </div>
            </div>
            <div className="full-article__box-title">
              Какой-то очень интересный заголовок
            </div>
            <div className="full-article__box-text">
              Я часто замечаю, что начинающие фронтенд-разработчики по несколько
              раз то начинают, то забрасывают изучение технологий.
            </div>
          </div>
        
        <div className="full-article__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
          fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis{" "}
          <span>scelerisque leo</span> curabitur faucibus. Nec, sed porta ac
          enim. Mattis quam accumsan ipsum commodo sed purus mi. Platea sit
          lectus neque, nulla sapien vitae nulla. Nisl viverra viverra quis
          mattis tincidunt laoreet amet, laoreet proin. Duis mi, aliquam
          tincidunt amet phasellus malesuada non nisi.
        </div>
        </div>
      <Comments/>
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
