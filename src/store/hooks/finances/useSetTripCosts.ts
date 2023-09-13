
import { useDispatch } from 'react-redux';
import { IFinancesExpenseList } from '../../../types/finances/IExpense';

function useSetTripCosts() {
    const dispatch = useDispatch();
    return (tripCosts: IFinancesExpenseList[]) => {
        dispatch({
            type: '@tripCosts/SET_TRIP_COSTS', tripCosts
        });

    }
}
export default useSetTripCosts;