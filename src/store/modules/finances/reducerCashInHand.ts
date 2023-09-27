import produce from 'immer';
import { IFinancesExpenseList } from '../../../types/finances/IExpense';

const cashInHand: number | boolean = false
const INITIAL_STATE = {
    cashInHand
};

function CashInHandStates(state = INITIAL_STATE, action: { type: any; cashInHand: boolean; }) {
    switch (action.type) {
        case '@cashInHand/SET_CASH_IN_HAND': {
            return produce(state, (draft) => {
                draft.cashInHand = action.cashInHand;
            })

        }
        default:
            return state;
    }

}

export default CashInHandStates