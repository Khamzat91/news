import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.scss";

const option = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const Comment = ({ text, createdAt }) => {
  const date = new Date(createdAt);

  return (
    <div className="comment__inner-post">
      <div className="comment__inner-post__info">
        <div className="comment__inner-post__name"></div>
        <div className="comment__inner-post__date">
          {date?.toLocaleDateString("ru-RU", option)}
        </div>
        <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      </div>
      <div className="comment__inner-post__text">{text}</div>
     
    </div>
  );
};

export default Comment;
