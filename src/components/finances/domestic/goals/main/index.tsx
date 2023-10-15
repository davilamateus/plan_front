import DomesticGoalsCard from '../card/main';
import { IFinancesGoalsList } from '../../../../../types/finances/IGoals';
import './style.scss'
import useGetGoalsApi from '../../../../../hooks/finances/goals/useGetGoals';
import { useEffect, useState } from 'react';
import useGetDomesticGoals from '../../../../../store/hooks/finances/useGetDomesticGoals';

interface type {
    fromDate: number;
    toDate: number;
}
const DomesticCostPlanning = ({ fromDate, toDate }: type) => {


    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [dateLocked, setDateLoked] = useState(true);
    const UseGetGoals = useGetGoalsApi();


    const UseGetDomesticGoals = useGetDomesticGoals();

    useEffect(() => {
        if (UseGetDomesticGoals == false && dateLocked) {
            UseGetGoals(fromDate, toDate, 1, true);
            setDateLoked(false)
        } else {
            setDateLoked(false)
            setGoals(UseGetDomesticGoals)
        }
    }, [UseGetDomesticGoals])


    return (
        <div className='finances-domestic-goals-main'>
            <div className='finances-domestic-goals-cards'>
                {goals.length > 0 ?
                    <>
                        {goals.map((item: IFinancesGoalsList) => (
                            item.title === "Others" && item.valueItens === 0 ? '' :
                                <DomesticGoalsCard
                                    key={item.id}
                                    goal={item}
                                    toDate={toDate}
                                    fromDate={fromDate}
                                />
                        ))}
                    </>
                    : ''}
            </div>
        </div>
    )
}

export default DomesticCostPlanning