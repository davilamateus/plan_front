import produce from 'immer';
import { ITrip } from '../../../types/trip';
const trip: ITrip | boolean = false;

const INITIAL_STATE = {
    trip
}

export const tripReduce = (state = INITIAL_STATE, action: { type: string; trip: boolean; }) => {
    switch (action.type) {
        case '@trip/SET_TRIP': {
            return produce(state, (draft) => {
                draft.trip = action.trip;
            })

        }
        default:
            return state;
    }

}

