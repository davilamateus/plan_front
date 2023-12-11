import Api from "../../axios";




const useGetWeather = () => {

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async (city: string, country_slug: string) => {
        const res = await Api.get(`/city/weather?city=${city}&country_slug=${country_slug}`, config)
            .then((data) => {
                return (data.data);
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetWeather;