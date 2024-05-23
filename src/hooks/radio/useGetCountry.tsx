import Api from "../../axios";

export const useGetRadio = () => {

    return async (country: string) => {

        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await Api.get(`/cities/radios?country=${country}`, config)
            .then((data) => {
                return (data.data);
            })
            .catch((error) => console.log(error))
        return res;
    }
}

