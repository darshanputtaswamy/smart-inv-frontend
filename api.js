// api.js
import Axios from "axios";
import { useState, useMemo, useEffect } from  "react";

let urls = {
    TEST: `http://localhost:3000/api/v1.0`,
    PROD: 'https://api.myezbar.ml/api/v1.0'
}
const api = Axios.create({
    baseURL: urls['TEST'],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

 

export const useAxiosLoader = () => {
    const [counter, setCounter] = useState(0);
      
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
      const resInterceptor = api.interceptors.response.use(interceptors.response,(error) =>
      Promise.reject(
          (error.response && error.response.data.message) || 'Something went wrong!'
      ));
      return () => {
        // remove all intercepts when done
        api.interceptors.request.eject(reqInterceptor);
        api.interceptors.response.eject(resInterceptor);
      };
    }, [interceptors]);
    
    return [counter > 0];
  };

export default api;