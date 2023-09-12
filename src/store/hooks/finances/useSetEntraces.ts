
import { useDispatch } from 'react-redux';
import IFinancesExpense from '../../../types/finances/IExpense';

function useSetEntraces() {
    const dispatch = useDispatch();
    return (entraces: IFinancesExpense[]) => {
        dispatch({
            type: '@entraces/SET_ENTRACES', entraces
        });

    }
}
export default useSetEntraces;