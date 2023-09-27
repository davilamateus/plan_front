import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useGetTripGoals = () => {

    const getTripGoals = useSelector((state: any) => state.tripGoals);
    const [tripGoals, setTripGoals] = useState(getTripGoals);
    useEffect(() => {
        setTripGoals(getTripGoals.tripGoals)
    }, [getTripGoals])

    return tripGoals;

}

export default useGetTripGoals;

