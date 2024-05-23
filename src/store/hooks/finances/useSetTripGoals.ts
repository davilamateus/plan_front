
import { useDispatch } from 'react-redux';
import { IFinancesGoal } from '../../../types/finances/IGoals';

function useSetTripGoals() {
    const dispatch = useDispatch();
    return (tripGoals: IFinancesGoal[]) => {
        dispatch({
            type: '@tripGoals/SET_TRIP_GOALS', tripGoals
        });

    }
}
export default useSetTripGoals;