import Api from "../../axios";

export const useGetWeather = () => {

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async (city: string, countrySlug: string) => {
        const res = await Api.get(`/cities/weather?city=${city}&country=${countrySlug}`, config)
            .then((data) => {
                return (data.data);
            })
            .catch((error) => console.log(error))
        return res;
    }
}

