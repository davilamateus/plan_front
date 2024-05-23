
import { useDispatch } from 'react-redux';
import { ITrip } from '../../../types/trip';

export const useSetTrip = () => {
    const dispatch = useDispatch();
    return (trip: ITrip) => {
        dispatch({
            type: '@trip/SET_TRIP', trip
        });
    }
}

