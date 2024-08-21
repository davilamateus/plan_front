import { ITrip, ITripAction } from "../types/ITrip";

export const useTripReduce = (state: ITrip, action: ITripAction) => {
    switch (action.type) {
        case "set":
            return { ...action.payload, loaded: true };

        default:
            return state;
    }
};
