import produce from 'immer';
import IFinancesExpense from '../../../types/finances/IExpense';
const tripCosts: IFinancesExpense[] | boolean = false
const INITIAL_STATE = {
    tripCosts
};

function TripCostsStates(state = INITIAL_STATE, action: { type: any; tripCosts: boolean; }) {
    switch (action.type) {
        case '@tripCosts/SET_TRIP_COSTS': {
            return produce(state, (draft) => {
                draft.tripCosts = action.tripCosts;
            })

        }
        default:
            return state;
    }

}

export default TripCostsStates