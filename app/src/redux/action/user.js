import { IS_AUTH, SET_USER_ARTICLES, SET_USER_COMMENTS } from "../reduce/user";
import axios from "axios";

export const setIsAuth = (isAuth) => ({
  type: IS_AUTH,
  payload: isAuth,
});

export const userArticles = (articles) => ({
  type: SET_USER_ARTICLES,
  payload: articles
})

export const userComments = (comments) => ({
  type: SET_USER_COMMENTS,
  payload: comments
})

export const setUserData = (data, url, navigate) => async (dispatch) => {
  const response = await axios.post(`http://localhost:5656/auth/${url}`, data);
  localStorage.setItem("user", JSON.stringify(response.data));
  dispatch(setIsAuth(true));
  navigate("/profile");
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch(setIsAuth(false));
};

export const getUserData = () => async (dispatch) => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const userId = JSON.parse(localStorage.getItem("user"))._id;
  const response = await axios.get(`http://localhost:5656/users/${userId}`, {
    headers: { Authorization: token },
  });
  dispatch(userArticles(response.data.posts.items));
  dispatch(userComments(response.data.comments.items))
};
