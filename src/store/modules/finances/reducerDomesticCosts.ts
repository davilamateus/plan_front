import produce from 'immer';
import { IFinancesExpenseList } from '../../../types/finances/IExpense';



const domesticCosts: IFinancesExpenseList[] | boolean = false
const INITIAL_STATE = {
    domesticCosts
};

function DomesticCostsStates(state = INITIAL_STATE, action: { type: any; domesticCosts: boolean; }) {
    switch (action.type) {
        case '@domesticCosts/SET_DOMESTIC_COSTS': {
            return produce(state, (draft) => {
                draft.domesticCosts = action.domesticCosts;
            })

        }
        default:
            return state;
    }

}

export default DomesticCostsStates