import axios from "axios";
import { SET_ARTICLES, SET_SHOW_ARTICLES } from "../types";

export const setArticles = (items) => ({
  type: SET_ARTICLES,
  payload: items,
});

export const setShowArticle = (article) => ({
  type: SET_SHOW_ARTICLES,
  payload: article,
});

export const createArticle = (data) => async () => {
  const token = await JSON.parse(localStorage.getItem("user")).token;
  await axios.post(`http://localhost:5656/posts`, data, {
    headers: { Authorization: token },
  });
};

export const showArticle = (id) => async (dispatch) => {
  const response = await axios.get(`http://localhost:5656/posts/${id}`);
  dispatch(setShowArticle(response.data));
};

export const getArticles = () => async (dispatch) => {
  const response = await axios.get(`http://localhost:5656/posts`);
  dispatch(setArticles(response.data.items));
};
