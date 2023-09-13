import produce from 'immer';
import { IFinancesExpenseList } from '../../../types/finances/IExpense';

const entraces: IFinancesExpenseList[] | boolean = false
const INITIAL_STATE = {
    entraces
};

function EntracesStates(state = INITIAL_STATE, action: { type: any; entraces: boolean; }) {
    switch (action.type) {
        case '@entraces/SET_ENTRACES': {
            return produce(state, (draft) => {
                draft.entraces = action.entraces;
            })

        }
        default:
            return state;
    }

}

export default EntracesStates