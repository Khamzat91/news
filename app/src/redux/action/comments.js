import axios from "axios";
import { SET_COMMENTS } from "../types";

export const setComments = (comment) => ({
  type: SET_COMMENTS,
  payload: comment,
});

const getComments = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:5656/comments/post/${id}`);
  dispatch(setComments(response.data))
//   console.log(response.data);
};

export const createComment = (data) => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  try {
    await axios.post(`http://localhost:5656/comments`, data, {
      headers: { Authorization: token },
    });
    dispatch(getComments(data.postId));
  } catch (error) {
    console.error(error);
  }
};

export const editComment = (id, text, article) => async (dispatch) => {
const token = JSON.parse(localStorage.getItem("user")).token
await axios.patch(`http://localhost:5656/comments/${id}`, {text}, {
  headers: { Authorization: token },
})
dispatch(getComments(article));
}


export const  deleteComment = () => async (dispatch) => {
const token = JSON.parse(localStorage.getItem("user")).token
await axios.delete(`http://localhost:5656/comments/${id}`, {
  headers: { Authorization: token },
})
dispatch(getComments(article));
}
