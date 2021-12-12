// api.js
import Axios from "axios";

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

export default api;