import axios from "axios";
require('dotenv').config();


const token = localStorage.getItem('token');
const api2 = axios.create({
    baseURL: process.env.APP,
    headers: {'Authorization': `Bearer ${token}`}
});

export default api2;
// export default api2;