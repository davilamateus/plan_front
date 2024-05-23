import axios from "axios";

//const BASE_URL = 'http://localhost:3000/';
const BASE_URL = "https://plan-api.onrender.com/";

const Api = axios.create({
    baseURL: BASE_URL
});

export { BASE_URL };
export default Api;
