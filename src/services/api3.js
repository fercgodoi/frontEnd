import axios from "axios";
require('dotenv').config();

// const dados  = new FormData();
// dados.set('BancoCont', 'ooi');
const token = localStorage.getItem('token');
const api2 = axios.create({
    baseURL: "",
    headers: {'Authorization': `Bearer ${token}`},
    // data: dados
});

export default api2;