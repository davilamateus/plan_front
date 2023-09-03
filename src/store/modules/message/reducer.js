import produce from 'immer';
const message = {

    title: '', text: '', status: ''
}
const INITIAL_STATE = {
    message
};

function MessageState(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@message/SET_MESSAGE': {
            return produce(state, (draft) => {
                draft.message = action.message;
            })

        }
        default:
            return state;
    }

}

export default MessageState