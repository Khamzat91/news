import { IS_AUTH, USER_ARTICLES } from "../types";
import axios from "axios";

export const setIsAuth = (isAuth) => ({
  type: IS_AUTH,
  payload: isAuth,
});

export const userArticles = (articles) => ({
  type: USER_ARTICLES,
  payload: articles
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
};
