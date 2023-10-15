import React, { useEffect, useState } from 'react'
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import useGetTripGoals from '../../../../store/hooks/finances/useGetTripGoals';
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import ModalEditGoals from '../../modalEdit/goals';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';
import TitleOfSession from '../../../communs/titleOfSession';

const TravelCards = () => {

    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState(0);

    const UseGetTripGoals = useGetTripGoals();
    const UseGetGoalsApi = useGetGoalsApi();


    useEffect(() => {

        if (UseGetTripGoals === false) {
            UseGetGoalsApi(0, 1000000000000000000, 2, true);
        } else {
            setGoals(UseGetTripGoals);
        }
    }, [UseGetTripGoals]);



    return (
        <>
            <div className="travel-cards">
                <TitleOfSession title='Travel Cost Planning' />
                <div className="travel-cards-itens">
                    {goals.length > 0 ?
                        goals.map((goal, index) => (
                            goal.title === 'Others' && goal.valueItens === 0 ? '' :
                                <div onClick={() => {
                                    setIndex(index);
                                    setOpened(true);
                                }} key={goal.id} className='travel-card'>
                                    <div className="travel-card-top">
                                        <img src={`./../../../../../icons/categories/${goal.icon}.svg`} alt="" />
                                        <span>{goal.title}</span>
                                    </div>
                                    <div className="travel-card-medium">
                                        <span className="travel-card-value">{FormartMoney(goal.valueItens)}</span>
                                        {goal.value > 0 ?
                                            <span > of {FormartMoney(goal.value)}</span>
                                            : ''}
                                    </div>
                                    <div className="travel-card-bottom">
                                        <div className="travel-card-bar">
                                            <div style={{ backgroundColor: goal.color, width: ` ${((goal.valueItens * 100) / goal.value) < 100 ? (goal.valueItens * 100) / goal.value : 100}%` }} ></div>
                                        </div>
                                        <span>{(goal.valueItens * 100) / goal.value !== Infinity ?
                                            <>
                                                {((goal.valueItens * 100) / goal.value).toFixed(1)} %
                                            </>
                                            : ''} </span>
                                    </div>
                                </div>
                        ))
                        : ''}
                </div>



            </div>
            {opened ?
                <BoxFullpage
                    title='Edit Goal'
                    setOpened={setOpened}
                    content={
                        <ModalEditGoals
                            setOpened={setOpened}
                            fromDate={0}
                            toDate={10000000000000000000000000}
                            goal={goals[index]}

                        />
                    }

                /> : ''}
        </>
    )
}

export default TravelCards