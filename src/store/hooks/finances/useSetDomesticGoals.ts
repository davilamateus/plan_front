
import { useDispatch } from 'react-redux';
import { IFinancesGoalsList } from '../../../types/finances/IGoals';

function useSetDomesticGoals() {
    const dispatch = useDispatch();
    return (domesticGoals: IFinancesGoalsList[]) => {
        dispatch({
            type: '@domesticGoals/SET_DOMESTIC_GOALS', domesticGoals
        });

    }
}
export default useSetDomesticGoals;