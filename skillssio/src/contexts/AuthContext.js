import { Action } from "history";
import { createContext , useReducer, useContext} from "react";
import Backdrop from "../utils/Backdrop/Backdrop";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const authReducer = (state, action) => {
        switch(action.type) {
            case "LOGIN": 
            return {login: true, data: action.payload}
            case "SIGNOUT":
            return {login: false, data:null}
            default:
            return state;
        }
    }
    const signout = (loading) => {
        loading(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                localStorage?.removeItem('userInfo')
                dispatch({type: "SIGNOUT"})
                resolve({success: true, status: 200})
                loading(false)
            }, 1000);
        })
    }




    const [state,dispatch] = useReducer(authReducer, JSON.parse(localStorage?.getItem('userInfo')) || {login: false, data: null})
    return (
        <AuthContext.Provider value={{isUserLoggedIn: state.login, uid:state?.data?.uid, userDetails: state.data, dispatch,signout}}>
        {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext)