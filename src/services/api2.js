import axios from "axios";



const token = localStorage.getItem('token');
const api2 = axios.create({
    baseURL: "http://localhost:3000",
    headers: {'Authorization': `Bearer ${token}`}
});

export default api2;
// export default api2;