import React, { useEffect, useState } from 'react'
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals'
import useGetGoalsApi from '../../../../hooks/finances/useGetGoals';
import GetFirstAndLastDayTimestamps from '../../../../functions/date/firstAndLastDayOfTheMonth';
import DomesticGoalsCard from './card';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';

const DomesticCostPlanning = () => {

    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetGoals = useGetGoalsApi();
    const [month, setMonth] = useState(0);
    const [goals, setGoals] = useState<IFinancesGoalsList[]>([])


    useEffect(() => {
        if (UseGetDomesticGoals == false) {
            UseGetGoals(GetFirstAndLastDayTimestamps(new Date().getTime(), month).firstDay, GetFirstAndLastDayTimestamps(new Date().getTime(), month).lastDay, 2, true)
        } else {
            setGoals(UseGetDomesticGoals)
        }
    }, [UseGetDomesticGoals])

    console.log(goals)
    return (
        <div>
            {goals.length > 0 ?
                <>
                    {goals.map((item: IFinancesGoalsList) => (
                        <DomesticGoalsCard
                            goal={item}
                        />
                    ))}
                </>
                : ''}
        </div>
    )
}

export default DomesticCostPlanning