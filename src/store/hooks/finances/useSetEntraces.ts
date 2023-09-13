
import { useDispatch } from 'react-redux';
import { IFinancesExpenseList } from '../../../types/finances/IExpense';

function useSetEntraces() {
    const dispatch = useDispatch();
    return (entraces: IFinancesExpenseList) => {
        dispatch({
            type: '@entraces/SET_ENTRACES', entraces
        });

    }
}
export default useSetEntraces;