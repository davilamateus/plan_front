import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useGetDomesticCosts = () => {

    const getDomesticCosts = useSelector((state: any) => state.domesticCosts);
    const [domesticCosts, setDomesticCosts] = useState(getDomesticCosts);
    useEffect(() => {
        setDomesticCosts(getDomesticCosts.domesticCosts)
    }, [getDomesticCosts])

    return domesticCosts;

}

export default useGetDomesticCosts;

