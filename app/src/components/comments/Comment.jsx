import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./index.scss";
import { deleteComment } from "../../redux/action/comments";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Comment = ({
  idComment,
  text,
  createdAt,
  fullName,
  setSelectEditComment,
  setText,
}) => {
  const date = new Date(createdAt);
  const dispatch = useDispatch();
  const { id } = useParams();
  const doEditTextComment = () => {
    setText(text);
    setSelectEditComment(idComment);
  };

  const doDeleteComment = () => {
    dispatch(deleteComment(idComment, id));
  };

  return (
    <div className="comment__inner-post">
      <div className="comment__inner-post__box">
        <div className="comment__inner-post__name">{fullName}</div>
        <div className="comment__inner-post__text">{text}</div>
      </div>
      <div className="comment__inner-post__info">
        <div className="comment__inner-post__date">
          {date?.toLocaleDateString("ru-RU", option)}
        </div>
        <div className="comment__inner-post__info-icon">
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              onClick={doDeleteComment}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              onClick={doEditTextComment}
              aria-label="delete"
              size="small"
            >
              <EditIcon fontSize="inherit" />
            </IconButton>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Comment;
