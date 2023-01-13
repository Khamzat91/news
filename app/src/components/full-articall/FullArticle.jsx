import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Fullview } from "../../images/content/fullview.svg";
import fullImg from "../../images/fullImg.png";
import Comments from "../comments/Comments";

import "./index.scss";
import { Link, useParams } from "react-router-dom";
import { showArticle } from "../../redux/action/articles";
const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const FullArticle = () => {
  const article = useSelector((state) => state.articles.article);
  const userId = JSON.parse(localStorage.getItem('user'))?._id
  const dispatch = useDispatch();
  const { id } = useParams();
  const date = new Date(article?.createdAt);

  React.useEffect(() => {
    dispatch(showArticle(id));
  }, [id]);
console.log(id);
  return (
    <div className="full-article">
      <div className="full-article__wrapper">
        <img className="full-article__image" src={fullImg} alt="" />
        <div className="full-article__left">
          <div className="full-article__box">
            <div className="full-article__inner">
              <div className="full-article__box-date">
                <div className="full-article__box-date__published">
                  {date?.toLocaleDateString("ru-RU", option)}
                </div>
                <div className="full-article__box-date__viewing">
                  <Fullview />
                  <span>{article?.views}</span>
                </div>
              </div>
              <div className="full-article__box-title">{article?.title}</div>
              <div className="full-article__box-text">
                {article?.description}
              </div>
            </div>

            <div className="full-article__description">
              {article?.description}
            </div>
          </div>
        <div className="full-article__btn">
          {article?.user?._id === userId && <Link to="/editarticle" className="full-article__btn-edit">Редактировать</Link>}
          {/* <div className="full-article__btn-close">Удалить</div> */}
        </div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
