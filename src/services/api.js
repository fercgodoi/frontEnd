import axios from "axios";
require('dotenv').config();

const api = axios.create({
    baseURL: ""
});
export default api;
