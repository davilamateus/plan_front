
import { useDispatch } from 'react-redux';
import { IFinancesExpense } from '../../../types/finances/IExpense';

function useSetDomesticCosts() {
    const dispatch = useDispatch();
    return (domesticCosts: IFinancesExpense) => {
        dispatch({
            type: '@domestiCosts/SET_DOMESTIC_COSTS', domesticCosts
        });

    }
}
export default useSetDomesticCosts;