import Api from "../../axios";

export const useGetCityAutocomplete = () => {
    return async (query: string) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await Api.get(`/cities/autocomplete?query=${query}`, config)
            .then((data) => {
                return data
            })
            .catch((error) => {
                return error
            })
        return res;
    }



}

