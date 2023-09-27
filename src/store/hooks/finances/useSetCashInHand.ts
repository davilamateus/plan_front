
import { useDispatch } from 'react-redux';

function useSetCashInHand() {
    const dispatch = useDispatch();
    return (cashInHand: number) => {
        dispatch({
            type: '@cashInHand/SET_CASH_IN_HAND', cashInHand
        });

    }
}
export default useSetCashInHand;;