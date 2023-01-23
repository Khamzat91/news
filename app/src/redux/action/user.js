import { IS_AUTH } from "../types";
import axios from "axios";

export const setIsAuth = (isAuth) => ({
  type: IS_AUTH,
  payload: isAuth,
});

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
 const response = await axios.get(`http://localhost:5656/auth/${userId}`, {
    headers: { Authorization: token },
  });
 
  console.log(response.data);
};
