import { IS_AUTH } from "../types"
import axios from "axios";


export const setIsAuth = (isAuth) => ({
type: IS_AUTH,
payload: isAuth
})

export const setUserData = (data, url, navigate) => async (dispatch) => {
   const response = await axios.post(`http://localhost:5656/auth/${url}`, data)
   localStorage.setItem('user', JSON.stringify(response.data))
   dispatch(setIsAuth(true))
   navigate('/profile')
}

