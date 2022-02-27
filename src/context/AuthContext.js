import { createContext, useState, useEffect } from "react";
import {useRouter} from 'next/router';
import Cookies from 'js-cookie'

import api from '../../api.js';

const AuthContext = createContext({})
const redirectKey = "sign_in_redirect"

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false
    }

    const decodedToken = jwtDecode(accessToken)
    const currentTime = Date.now() / 1000
    return decodedToken.exp > currentTime
}

function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // catch possible errors:
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
  }
  
  function getUserFromLocalStorage(initialValue) {
    try {
      const value = window.localStorage.getItem('user');
      const accessToken =  window.localStorage.getItem('accessToken')
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
  }

export const AuthProvider = ({children}) =>{
    const [initializing,setInitializing ] = useState(false);
    const [sessionUser, setSessionUser] = useState(() => getUserFromLocalStorage(null));
    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(()=>sessionUser?sessionUser.isverified:false);

    const setSession = async (obj) => {
        if (obj) {
            localStorage.setItem('accessToken', obj.accessToken)
            localStorage.setItem('user', JSON.stringify(obj.user))
            api.defaults.headers.common.Authorization = `Bearer ${obj.accessToken}`
        }
    }

    const clearSession = () =>{
            localStorage.removeItem('accessToken')
            localStorage.removeItem('user')
            delete api.defaults.headers.common.Authorization
            setSessionUser(false);
            setInitializing(false);
    }
    

    // Register user;
    const register = async (newuser) =>{
        setInitializing(true);
        const response = await api.post('/user', {
            phone:newuser.mobile,
            username:newuser.username,
            password:newuser.password
        })
        const { accessToken, user } = response.data
        setSession({ accessToken, user })
        setSession();
        setSessionUser(user);
        setInitializing(false);
    }
    //Login User
    const login = async ({mobile,password}) =>{
        setInitializing(true);
        const response = await api.post('/user/login', {
            phone:mobile,
            password:password,
        }).catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response);
              const { message } = error.response.data
              setInitializing(false);
              setError(message)
              return;
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            return;

          })
        if(response && response.data){
            const { accessToken, user } = response.data
            setSession({ accessToken, user })
            setSessionUser(user);
            setInitializing(false);
        }
    }

    const verifyUser = async (verification_code) =>{

        if(sessionUser){
            console.log(sessionUser)
            setInitializing(true);
            const response = await api.post('/user/verification', {
                phone:sessionUser.phone,
                verification_code:verification_code,
            })
            const { accessToken, user } = response.data
            clearSession()
            setSession({ accessToken, user })
            setSessionUser(user);
            setInitializing(false);
        }
    }

    // Logout user 
    const logout = () =>{
        setInitializing(true);
        console.log('Logout');
        clearSession();
    }

    const resendOtp = async () =>{
        const response = await api.post('/user/resendVerificationCode')
    }
 
 
      let authObj = 
      {initializing,
        sessionUser,
        verified,
        error,
        register,
        login,
        logout,
        verifyUser,
        clearSession,
        resendOtp
    };
    console.log(authObj);
    
    return (
        <AuthContext.Provider value={authObj}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;