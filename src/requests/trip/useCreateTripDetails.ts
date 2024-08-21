import Api from "../../axios";
import { ITrip } from "../../types/ITrip";

export const useCreateTripDetails = () => {
    return async (trip: ITrip) => {
        return await Api.post("trip/", trip)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
    };
};
