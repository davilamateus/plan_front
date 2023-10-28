import produce from 'immer';
const avatar = {
    name: '',
    email: '',
    city_local: '',
    state_local: '',
    country_local: '',
    currency_local: '',
    country_code: '',
    city_trip: '',
    state_trip: '',
    country_trip: '',
    currency_trip: '',
    when: '',
    photo: ''
}
const INITIAL_STATE = {
    avatar
}

function Avatar(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@avatar/SET_AVATAR': {
            return produce(state, (draft) => {
                draft.avatar = action.avatar;
            })

        }
        default:
            return state;
    }

}

export default Avatar;