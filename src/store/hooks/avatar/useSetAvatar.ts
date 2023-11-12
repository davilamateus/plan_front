
import { useDispatch } from 'react-redux';

function useSetAvatar() {
    const dispatch = useDispatch();
    return (name: any,
        email: any,
        city_local: any,
        state_local: any,
        country_local: any,
        currency_local: any,
        city_trip: any,
        state_trip: any,
        country_trip: any,
        currency_trip: any,
        country_code: any,
        country_lon: any,
        country_lat: any,
        when: any,
        photo: any
    ) => {
        const avatar = {
            name,
            email,
            city_local,
            state_local,
            country_local,
            currency_local,
            city_trip,
            state_trip,
            country_trip,
            currency_trip,
            country_code,
            country_lon,
            country_lat,
            when,
            photo

        }

        dispatch({
            type: '@avatar/SET_AVATAR', avatar
        });

    }
}

export default useSetAvatar;