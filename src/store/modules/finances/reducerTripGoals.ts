import produce from 'immer';
import { IFinancesGoal } from '../../../types/finances/IGoals';


const tripGoals: IFinancesGoal[] | boolean = false;

const INITIAL_STATE = {
    tripGoals
};

function TripGoalsStates(state = INITIAL_STATE, action: { type: any; tripGoals: boolean; }) {
    switch (action.type) {
        case '@tripGoals/SET_TRIP_GOALS': {
            return produce(state, (draft) => {
                draft.tripGoals = action.tripGoals;
            })

        }
        default:
            return state;
    }

}

export default TripGoalsStates