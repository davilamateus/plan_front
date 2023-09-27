import React, { useEffect, useState } from 'react'
import { IFinancesGoalsList } from '../../../../../../types/finances/IGoals'
import DomesticCostPlanningCircle from '../circle';
import './style.scss'
import BoxFullpage from '../../../../../communs/boxFullpage';
import ModalEditGoals from '../../../../modalEdit/goals';
import FormartMoney from '../../../../../../functions/formartMoney/formartMoney';


interface type {
    goal: IFinancesGoalsList;
    fromDate: number;
    toDate: number;
}

const DomesticGoalsCard = ({ goal, fromDate, toDate }: type) => {

    const [calc, setCalc] = useState(0);
    const [porcent, setPorcent] = useState(0);
    const [opened, setOpened] = useState<boolean>(false);

    useEffect(() => {
        let calc = 0
        goal.itens.map((item) => {
            if (item.value > 0) {
                calc = calc + item.value

            }

        })
        setCalc(calc);
        setPorcent((+((calc * 100) / goal.value).toFixed(1)));
    }, [goal])


    return (
        <>
            <div
                className='domestic-goals-box'
                onClick={() => {
                    setOpened(true);
                }}
            >
                <div className="domestic-goals-left">
                    <div className="domestic-goal-circle">
                        <DomesticCostPlanningCircle
                            value={goal.id !== 0 ? porcent : 100}
                            color={goal.color}
                            icon={goal.icon}
                        />
                    </div>
                    <div className="domestic-goal-porcent">
                        {goal.id !== 0 ?
                            <>
                                {porcent}%
                            </>
                            : ''}
                    </div>
                </div>
                <div className="domestic-goals-content">
                    <div className='bolder'>
                        {goal.title}
                    </div>
                    <div>
                        <span
                            className='bolder'
                            style={{ color: `${goal.color}` }}
                        >{FormartMoney(calc)}</span>
                        {goal.value !== null ?
                            <span>  of  {FormartMoney(goal.value)}</span>
                            : ''}

                    </div>
                </div>
            </div>
            {opened ?

                <BoxFullpage
                    setOpened={setOpened}
                    content={
                        <ModalEditGoals
                            goal={
                                {
                                    title: goal.title,
                                    color: goal.color,
                                    icon: goal.icon,
                                    value: goal.value,
                                    type: goal.type,
                                    id: goal.id,
                                    itens: goal.itens,
                                    valueItens: goal.valueItens
                                }}
                            setOpened={setOpened}
                            fromDate={fromDate}
                            toDate={toDate}
                        />
                    }

                />
                : ''}
        </>

    )
}

export default DomesticGoalsCard;