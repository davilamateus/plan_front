import produce from 'immer';
import { IFinancesGoal } from '../../../types/finances/IGoals';
const domesticGoals: IFinancesGoal[] | boolean = false;
const INITIAL_STATE = {
    domesticGoals
};

function DomesticGoalsStates(state = INITIAL_STATE, action: { type: any; domesticGoals: boolean; }) {
    switch (action.type) {
        case '@domesticGoals/SET_DOMESTIC_GOALS': {
            return produce(state, (draft) => {
                draft.domesticGoals = action.domesticGoals;
            })

        }
        default:
            return state;
    }

}

export default DomesticGoalsStates