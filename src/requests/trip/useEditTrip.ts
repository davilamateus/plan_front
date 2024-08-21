import Api from "../../axios";
import { ITrip } from "../../types/ITrip";

export const useEditTrip = () => {
    return async (trip: ITrip) => {
        return await Api.patch("trip/", trip)
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
    };
};
