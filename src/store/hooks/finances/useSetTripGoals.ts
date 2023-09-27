
import { useDispatch } from 'react-redux';
import { IFinancesGoalsList } from '../../../types/finances/IGoals';

function useSetTripGoals() {
    const dispatch = useDispatch();
    return (tripGoals: IFinancesGoalsList[]) => {
        dispatch({
            type: '@tripGoals/SET_TRIP_GOALS', tripGoals
        });

    }
}
export default useSetTripGoals;