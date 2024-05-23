import Api from "../../axios";
import { ITrip } from "../../types/trip";

export const useCreateTripDetails = () => {
    return async (trip: ITrip) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };
        const res = await Api.post('trip/', trip, config)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error))
        return res;
    }
}

