
import { useDispatch } from 'react-redux';
import { IFinancesExpenseList } from '../../../types/finances/IExpense';

function useSetDomesticCosts() {
    const dispatch = useDispatch();
    return (domesticCosts: IFinancesExpenseList[]) => {
        dispatch({
            type: '@domestiCosts/SET_DOMESTIC_COSTS', domesticCosts
        });

    }
}
export default useSetDomesticCosts;