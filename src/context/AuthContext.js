import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router';


const AuthContext = createContext()
const redirectKey = "sign_in_redirect"


export const AuthProvider = ({children}) =>{
    const [initializing,setInitializing ] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(false);

    // Register user;
    const register = async (user) =>{
        console.log(user);
    }
    //Login User
    const login = async ({mobile,password}) =>{
        console.log(mobile,password);
        setUser(true);
        setInitializing(true);
    }

    const verifyUser = async ({mobile,verificationCode}) =>{
        console.log(mobile,verificationCode);
        setVerified(true);
    }

    // Logout user 
    const logout = () =>{
        console.log('Logout');
        setUser(false);
        setInitializing(false);
    }

    function setRedirect(redirect) {
        window.sessionStorage.setItem(redirectKey, redirect)
    }
      
      function getRedirect() {
        return window.sessionStorage.getItem(redirectKey)
    }
      
      function clearRedirect() {
        return window.sessionStorage.removeItem(redirectKey)
      }
    // Check if user is logged in 


    return (
        <AuthContext.Provider value={{initializing,user,verified,
        error,register,login,logout,verifyUser,setRedirect,getRedirect,clearRedirect}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;