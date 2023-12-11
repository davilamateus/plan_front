import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useGetGoalsApi from '../../../hooks/finances/goals/useGetGoals';


const useGetDomesticGoals = () => {

    const getDomesticGoals = useSelector((state: any) => state.domesticGoals);
    const [domesticGoals, setDomesticGoals] = useState(getDomesticGoals);
    useEffect(() => {

        setDomesticGoals(getDomesticGoals.domesticGoals)
    }, [getDomesticGoals])

    return domesticGoals;

}

export default useGetDomesticGoals;

