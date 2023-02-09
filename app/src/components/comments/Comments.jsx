import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment, editComment } from "../../redux/action/comments";
import Comment from "./Comment";

const Comments = () => {
  const [text, setText] = React.useState("");
  const [selectEditComment, setSelectEditComment] = React.useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector((state) => state.comments.comments);

  const changeComment = (e) => {
    setText(e.target.value);
  };

  const onSubmitComment = () => {
    dispatch(createComment({ text: text, postId: id }));
    setText("");
  };

  const doEditComment = () => {
    dispatch(editComment(selectEditComment, text, id))
    setText('');
    setSelectEditComment(null)
  }

  return (
    <div className="comments">
      <div className="comment">
        <div className="comment__inner">
          <div className="comment__inner-title">Комментарии ({comments.length})</div>
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              text={comment.text}
              idComment={comment._id}
              fullName={comment.user.fullName}
              createdAt={comment.createdAt}
              setSelectEditComment={setSelectEditComment}
              selectEditComment={selectEditComment}
              setText={setText}
            />
          ))}
          <div className="comment__inner-form">
            <div className="comment__inner-form__title">
              Добавить комментарий
            </div>
            <label className="comment__inner-form__label">
              <textarea value={text} onChange={changeComment} type="text" />
              <button
                className="comment__inner-form__btn"
                onClick={selectEditComment ? doEditComment : onSubmitComment}
              >
                Отправить
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
