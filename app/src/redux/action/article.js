import axios from "axios";
import { SET_ARTICLES, SET_SHOW_ARTICLES } from "../types";


export const setArticle = (items) => ({
type: SET_ARTICLES,
payload: items
})

export const setShowArticle = (article) => ({
    type: SET_SHOW_ARTICLES,
    payload: article
})


export const createArticle = (data) => async () => {
const token = await JSON.parse(localStorage.getItem('user')).token
await axios.post(`http://localhost:5656/posts`, data, {headers: {Authorization: token}})
}

