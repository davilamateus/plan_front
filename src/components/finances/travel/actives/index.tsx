
import { useState, useEffect } from 'react';
import TimestampToDate from '../../../../functions/date/timestampToDate';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import BoxFullpage from '../../../communs/boxFullpage';
import ModalEditExpenses from '../../modalEdit/expenses';
import './style.scss';
import useGetTripGoals from '../../../../store/hooks/finances/useGetTripGoals';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';


interface trips {
    expense: IFinancesExpenseList;
    color: string;
    category: string;
    icon: number;
}

const TripExpensesActives = () => {


    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const [trips, setExpenses] = useState<trips[]>([]);


    const UseGetTripGoals = useGetTripGoals();

    useEffect(() => {
        if (UseGetTripGoals !== false) {
            setGoals(UseGetTripGoals);
        }
    }, [UseGetTripGoals]);


    useEffect(() => {
        if (goals.length > 0) {
            let array: trips[] = [];
            goals.map((goal) => {
                if (goal.itens.length > 0) {
                    if (goal.itens.length > 0) {
                        goal.itens.map((expense: IFinancesExpenseList) => {
                            if (expense) {
                                array.push(
                                    {
                                        expense: expense, color: goal.color, icon: goal.icon, category: goal.title
                                    });

                            }
                        })
                    }
                }
                setExpenses(array.sort((a, b) => b.expense.date - a.expense.date));
            })

        }

    }, [goals]);


    return (
        <div className='finances-trips-actives'>
            <h3>Entraces Actives</h3>
            <div className='finances-trips-actives-table'>

                {trips.length > 0 ?
                    trips.map((item, index) => (
                        <div
                            className='finances-trips-actives-item'
                            onClick={() => {
                                setOpened(true)
                                setIndex(index)
                            }}
                            key={index}
                        >
                            <div className='finances-trips-actives-left' >
                                <div style={{ backgroundColor: item.color }} className='finance-bar-color'></div>
                                <div className='finances-trips-actives-text' >
                                    <div className="finances-trips-actives-title">
                                        {item.expense.title}
                                    </div>
                                    <div className='finances-trips-actives-category'>
                                        <img src={`./../../../../../../icons/categories/${item.icon}.svg`} alt="" />
                                        <span style={{ color: item.color }}>
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='finances-trips-actives-date'>
                                {TimestampToDate(item.expense.date)}
                            </div>
                            <div className='finances-trips-actives-value'>{FormartMoney(item.expense.value)}</div>
                        </div>
                    ))
                    : ''}
                {opened ?
                    <BoxFullpage
                        content={
                            <ModalEditExpenses
                                setOpened={setOpened}
                                expenses={trips[index].expense}
                            />
                        }
                        setOpened={setOpened}
                    />
                    : ''}
            </div>

        </div >

    )
}

export default TripExpensesActives