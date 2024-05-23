import Api from "../../axios";
import { ITrip } from "../../types/trip";

export const useEditTrip = () => {
    return async (trip: ITrip) => {
        console.log(trip);
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
        };
        const res = await Api.patch("trip/", trip, config)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
        return res;
    };
};
