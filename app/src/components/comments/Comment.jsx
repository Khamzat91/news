import React from "react";
import './index.scss';

const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__inner">
        <div className="comment__inner-title">Комментарии (3)</div>
        <div className="comment__inner-post">
          <div className="comment__inner-post__info">
            <div className="comment__inner-post__name">Vasya Pupkin</div>
            <div className="comment__inner-post__date">
              12 августа 2019 в 08:06
            </div>
          </div>
          <div className="comment__inner-post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            adipiscing leo id sed neque, diam nibh.
          </div>
        </div>
        <div className="comment__inner-form">
          <div className="comment__inner-form__title">
            Добавить комментарий
          </div>
          <label className="comment__inner-form__label">
            <textarea type="text" />
            <button className="comment__inner-form__btn">Отправить</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Comment;
