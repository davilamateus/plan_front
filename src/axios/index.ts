import axios from "axios";

//const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://plan-api.onrender.com/";

const Api = axios.create({
	baseURL: BASE_URL,
});

Api.interceptors.request.use(
	(config) => {
		const token =
			localStorage.getItem("token") || sessionStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		} else {
			delete config.headers.Authorization;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export { BASE_URL };
export default Api;
