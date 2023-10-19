import DomesticGoalsCard from '../card/main';
import { IFinancesGoalsList } from '../../../../../types/finances/IGoals';
import './style.scss'
import useGetGoalsApi from '../../../../../hooks/finances/goals/useGetGoals';
import { useEffect, useState } from 'react';
import useGetDomesticGoals from '../../../../../store/hooks/finances/useGetDomesticGoals';
import Skeleton from 'react-loading-skeleton';
import TitleOfSession from '../../../../communs/titleOfComponent';

interface type {
    fromDate: number;
    toDate: number;
}
const DomesticCostGoals = ({ fromDate, toDate }: type) => {


    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [dateLocked, setDateLoked] = useState(true);
    const [loading, setLoading] = useState(true);

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
    }, [UseGetDomesticGoals, UseGetGoals, dateLocked, fromDate, toDate])

    useEffect(() => {
        if (UseGetDomesticGoals.domesticGoals !== false && UseGetDomesticGoals !== false) {
            setLoading(false)
        }
    }, [UseGetDomesticGoals])


    return (
        <div className='finances-domestic-goals-main'>
            <TitleOfSession title='Goals' />
            <div className='finances-domestic-goals-cards'>
                {!loading ?
                    goals.length > 0 ?
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
                        : 'Não Tem Nada'
                    :
                    <>
                        <div className='domestic-goals-box box'>
                            <div className="domestic-goals-left">
                                <div className="domestic-goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="domestic-goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="domestic-goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='domestic-goals-box box'>
                            <div className="domestic-goals-left">
                                <div className="domestic-goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="domestic-goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="domestic-goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='domestic-goals-box box'>
                            <div className="domestic-goals-left">
                                <div className="domestic-goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="domestic-goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="domestic-goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='domestic-goals-box box'>
                            <div className="domestic-goals-left">
                                <div className="domestic-goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="domestic-goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="domestic-goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='domestic-goals-box box'>
                            <div className="domestic-goals-left">
                                <div className="domestic-goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="domestic-goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="domestic-goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>

                    </>
                }
            </div>
        </div>
    )
}

export default DomesticCostGoals;