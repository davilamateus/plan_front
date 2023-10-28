import DomesticGoalsCard from '../card/main';
import { IFinancesGoalsList } from '../../../../../types/finances/IGoals';
import './style.scss'
import Skeleton from 'react-loading-skeleton';
import TitleOfSession from '../../../../communs/titleOfComponent';

interface type {
    goals: IFinancesGoalsList[];

}
const FinancesGoals = ({ goals }: type) => {

    return (
        <div className='finances-goals-main'>
            <TitleOfSession title='Goals' />
            <div className='finances-goals-cards'>
                {goals.length > 0 ?
                    <>
                        {goals.map((item: IFinancesGoalsList) => (
                            item.title === "Others" && item.valueItens === 0 ? '' :
                                <DomesticGoalsCard
                                    key={item.id}
                                    goal={item}
                                />
                        ))}
                    </>
                    :

                    <>
                        <div className='goals-box box'>
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='goals-box box'>
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='goals-box box'>
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='goals-box box'>
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: '90px', height: '14px', }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: '120px', height: '14px', }} />
                                </div>
                            </div>
                        </div>
                        <div className='goals-box box'>
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: '48px', height: '48px', borderRadius: '48px', }} />

                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: '30px', height: '14px', }} />
                                </div>
                            </div>
                            <div className="goals-content">
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

export default FinancesGoals;
