
import { useDispatch } from 'react-redux';
import { IFinanceResume } from '../../../types/finances/IResume';

function useSetFinanceResume() {
    const dispatch = useDispatch();
    return (financeResume: IFinanceResume) => {
        dispatch({
            type: '@financeResume/SET_FINANCE_RESUME', financeResume
        });

    }
}
export default useSetFinanceResume;;