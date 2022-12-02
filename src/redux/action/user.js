import { IS_AUTH } from "../types"


export const setIsAuth = (isAuth) => ({
type: IS_AUTH,
payload: isAuth
})