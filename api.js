// api.js
import Axios from "axios";
import { useState, useMemo, useEffect,useContext } from  "react";
import { toast } from 'react-toastify';
import { useRouter } from "next/router"
import Authcontext from 'context/AuthContext';


let urls = {
    TEST: `http://localhost:3000/api/v1.0`,
    PROD: 'https://api.myezbar.ml/api/v1.0'
}
const api = Axios.create({
    baseURL: urls['PROD'],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

 

export const useAxiosLoader = () => {

    const [counter, setCounter] = useState(0);
    const {clearSession} = useContext(Authcontext);
    const router = useRouter();

    const interceptors = useMemo(() => {
      const inc = () => setCounter(counter => counter + 1);
      const dec = () => setCounter(counter => counter - 1);
      
      return ({
        request: config => (inc(), config),
        response: response => (dec(), response),
        error: error => (dec(), Promise.reject(error)),
      });
    }, []); // create the interceptors
    
    useEffect(() => {
      // add request interceptors
      const reqInterceptor = api.interceptors.request.use(interceptors.request, interceptors.error);
      // add response interceptors
      const resInterceptor = api.interceptors.response.use(interceptors.response,(error) =>{
        
      if(error.response 
        && error.response.data.message 
        && (  error.response.data.message.indexOf('Unable to varify your credentials - TokenExpiredError: jwt expired') > -1 
        || error.response.data.message.indexOf('Authentication failed. User is logged in using different device')) > -1
        ){

        if(error.response.data.message.indexOf('Unable to varify your credentials - TokenExpiredError: jwt expired')> 0){
          toast.error('Login Token is expired');
        }else{
          toast.error('User already logged from another device');
        }
        clearSession()
        router.push('/')

      }else if(error.response && error.response.data.message){
        toast.error(error.response.data.message);
      } else{
        toast.error('Something went wrong!');
      }
      return Promise.reject(
          (error.response && error.response.data.message) || 'Something went wrong!'
      )});
      return () => {
        // remove all intercepts when done
        api.interceptors.request.eject(reqInterceptor);
        api.interceptors.response.eject(resInterceptor);
      };
    }, [interceptors]);
    
    return [counter > 0];
  };

export default api;