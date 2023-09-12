
import { useDispatch } from 'react-redux';
import IFinancesExpense from '../../../types/finances/IExpense';

function useSetTripCosts() {
    const dispatch = useDispatch();
    return (tripCosts: IFinancesExpense[]) => {
        dispatch({
            type: '@tripCosts/SET_TRIP_COSTS', tripCosts
        });

    }
}
export default useSetTripCosts;