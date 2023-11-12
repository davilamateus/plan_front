import Api from "../../axios";

const useCreateUserDetails = () => {
    return async (photo: string | undefined, when: number, city_local: string, state_local: string, country_local: string, currency_local: string, city_trip: string, state_trip: string, country_trip: string, currency_trip: string, country_code: string, country_lat: string, country_lon: string) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };
        const res = await Api.post('userdetails/', { photo, when, city_local, state_local, country_local, currency_local, city_trip, state_trip, country_trip, currency_trip, country_code, country_lat, country_lon }, config)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useCreateUserDetails;