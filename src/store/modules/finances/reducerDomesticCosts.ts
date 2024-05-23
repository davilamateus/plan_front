import produce from 'immer';
import { IFinancesExpense } from '../../../types/finances/IExpense';



const domesticCosts: IFinancesExpense[] | boolean = false
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