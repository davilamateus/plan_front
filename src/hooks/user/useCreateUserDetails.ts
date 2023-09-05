import Api from "../../axios";

const useCreateUserDetails = () => {
    return async (photo: string | undefined, when: number, city_local: string, state_local: string, country_local: string, city_trip: string, state_trip: string, country_trip: string) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };
        const res = await Api.post('userdetails/', { photo, when, city_local, state_local, country_local, city_trip, state_trip, country_trip }, config)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useCreateUserDetails;