import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useGetTripCosts = () => {

    const getTripCosts = useSelector((state: any) => state.tripCosts);
    const [tripCosts, setTripCosts] = useState(getTripCosts);
    useEffect(() => {
        setTripCosts(getTripCosts.tripCosts)
    }, [getTripCosts])

    return tripCosts;

}

export default useGetTripCosts;

