import React, { useEffect, useState } from 'react'
import { IFinancesGoalsList } from '../../../../../../types/finances/IGoals'
import DomesticCostPlanningCircle from '../circle';
import './style.scss'


interface type {
    goal: IFinancesGoalsList
}

const DomesticGoalsCard = ({ goal }: type) => {

    const [calc, setCalc] = useState(0);
    const [porcent, setPorcent] = useState(0);

    console.log(goal.itens)

    useEffect(() => {
        let calc = 0
        goal.itens.map((item) => {
            calc = calc + item.value

        })
        setCalc(calc)
        setPorcent((+((calc * 100) / goal.value).toFixed(1)))
    }, [goal])
    return (
        <div className='domestic-goals-box'>
            <div className="domestic-goals-left">
                <div className="domestic-goal-circle">
                    <DomesticCostPlanningCircle
                        value={porcent}
                        color={goal.color}
                        icon={goal.icon}
                    />
                </div>
                <div className="domestic-goal-porcent">{porcent}%</div>
            </div>
            <div className="domestic-goals-content">
                <div className='bolder'>
                    {goal.title}
                </div>
                <div>
                    <span
                        className='bolder'
                        style={{ color: `${goal.color}` }}
                    >{calc}</span>
                    <span> of </span>
                    <span >{goal.value}</span>
                </div>
            </div>
        </div>)
}

export default DomesticGoalsCard