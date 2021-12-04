// api.js
import Axios from "axios";

let urls = {
    TEST: `http://localhost:3000`,
    PROD: 'https://api.myezbar.ml/'
}
const api = Axios.create({
    baseURL: urls['TEST'],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default api;