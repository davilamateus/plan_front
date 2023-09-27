import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useGetCashInHand = () => {

    const getCashInHand = useSelector((state: any) => state.cashInHand);
    const [cashInHand, setCashInHand] = useState(getCashInHand);
    useEffect(() => {
        setCashInHand(getCashInHand.cashInHand)
    }, [getCashInHand])

    return cashInHand;

}

export default useGetCashInHand;

