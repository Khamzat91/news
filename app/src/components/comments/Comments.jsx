import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const Comments = () => {
    const comments = useSelector(state => state.comments)
    console.log(comments);
    return (
        <div className="comment">
          {comments.map((comment) => <Comment key={comment._id}
          text={comment.text}
          id={comment._id}
          createdAt={comment.createdAt}
          />)}  
        </div>
    );
};

export default Comments;