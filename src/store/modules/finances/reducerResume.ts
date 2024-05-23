import produce from 'immer';

const financeResume = false
const INITIAL_STATE = {
    financeResume
};

export const financeResumeState = (state = INITIAL_STATE, action: { type: any; financeResume: boolean; }) => {
    switch (action.type) {
        case '@financeResume/SET_FINANCE_RESUME': {
            return produce(state, (draft) => {
                draft.financeResume = action.financeResume;
            })

        }
        default:
            return state;
    }

}

