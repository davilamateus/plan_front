import produce from 'immer';
const INITIAL_STATE = {
    user: false
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case '@user/SET_USER': {
            return produce(state, (draft) => {
                draft.user = action.user;
            })

        }
        default:
            return state;
    }

}

