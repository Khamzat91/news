import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../redux/action/comments";
import './index.scss';

const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric"
}

const Comment = () => {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch()
  const {id} = useParams()
  const changeComment = (e) => {
    setText(e.target.value)
  }

  const onSubmitComment = ({text}) => {
    dispatch(createComment({text: text, postId: id}))
    setText('')
  }

// const date = new Date(comments.createdAt)

  return (
    <div className="comment">
      <div className="comment__inner">
        <div className="comment__inner-title">Комментарии (3)</div>
        <div className="comment__inner-post">
          <div className="comment__inner-post__info">
            <div className="comment__inner-post__name"></div>
            <div className="comment__inner-post__date">
              {/* {date.toLocaleDateString("ru-RU", option)} */}
            </div>
          </div>
          <div className="comment__inner-post__text">
            {text}
          </div>
        </div>
        <div className="comment__inner-form">
          <div className="comment__inner-form__title">
            Добавить комментарий
          </div>
          <label className="comment__inner-form__label">
            <textarea value={text} onChange={changeComment} type="text" />
            <button className="comment__inner-form__btn" onClick={onSubmitComment}>Отправить</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Comment;
