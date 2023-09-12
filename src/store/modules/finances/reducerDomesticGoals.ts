import produce from 'immer';
import { IFinancesGoalsList } from '../../../types/finances/IGoals';
const domesticGoals: IFinancesGoalsList[] | boolean = false;
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