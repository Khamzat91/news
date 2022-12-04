import { IS_AUTH } from "../types"
import axios from "axios";


export const setIsAuth = (isAuth) => ({
type: IS_AUTH,
payload: isAuth
})

export const setUserData = (data, url) => async (dispatch) => {
   const response = await axios.post(`http://localhost:5656/auth/register`, data)
   dispatch(setIsAuth())
   console.log(response.data)
}

