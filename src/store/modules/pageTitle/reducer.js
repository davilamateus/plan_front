import produce from 'immer';
const pageTitle =

    ''

const INITIAL_STATE = {
    pageTitle
};

function ReduxPageTitle(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@pageTitle/SET_PAGE-TITLE': {
            return produce(state, (draft) => {
                draft.pageTitle = action.pageTitle;
            })

        }
        default:
            return state;
    }

}

export default ReduxPageTitle;