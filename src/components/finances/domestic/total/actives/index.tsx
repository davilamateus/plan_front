import { useEffect, useState } from "react";
import { IFinancesExpenseList } from "../../../../../types/finances/IExpense";
import TimestampToDate from "../../../../../functions/date/timestampToDate";
import BoxFullpage from "../../../../communs/boxFullpage";
import useGetDomesticGoals from "../../../../../store/hooks/finances/useGetDomesticGoals";
import { IFinancesGoalsList } from "../../../../../types/finances/IGoals";
import ModalEditExpenses from "../../../modalEdit/expenses";
import './style.scss';


interface expenses {
    expense: IFinancesExpenseList;
    color: string;
    category: string;
    icon: number;
}

const DomesticExpensesActives = () => {


    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const [expenses, setExpenses] = useState<expenses[]>([]);


    const UseGetDomesticGoals = useGetDomesticGoals();

    useEffect(() => {
        console.log(UseGetDomesticGoals)
        if (UseGetDomesticGoals !== false) {
            setGoals(UseGetDomesticGoals);
        }
    }, [UseGetDomesticGoals]);

    useEffect(() => {
        if (goals.length > 0) {
            let array: expenses[] = [];
            goals.map((goal) => {
                if (goal.itens.length > 0) {
                    if (goal.itens.length > 0) {
                        goal.itens.map((expense: IFinancesExpenseList) => {
                            if (expense.date) {
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

    console.log(expenses)

    return (
        <div className='finances-expenses-actives'>
            <h3>Entraces Actives</h3>
            <div className='finances-expenses-actives-table'>

                {expenses.length > 0 ?
                    expenses.map((item, index) => (
                        <div
                            className='finances-expenses-actives-item'
                            onClick={() => {
                                setOpened(true)
                                setIndex(index)
                            }}
                            key={index}
                        >
                            <div className='finances-expenses-actives-text' >
                                <div>
                                    <div style={{ backgroundColor: item.color }} className='circle'></div>
                                    <div className="finances-expenses-actives-title">
                                        {item.expense.title}
                                    </div>
                                </div>
                            </div>
                            <div className='finances-expenses-actives-category'>
                                <img src={`./../../../../../../icons/categories/${item.icon}.svg`} alt="" />
                                <span style={{ color: item.color }}>
                                    {item.category}
                                </span>
                            </div>
                            <div className='finances-expenses-actives-date'>
                                {TimestampToDate(item.expense.date)}
                            </div>
                            <div className='finances-expenses-actives-value'>{item.expense.value}</div>
                        </div>
                    ))
                    : ''}
                {opened ?
                    <BoxFullpage
                        content={
                            <ModalEditExpenses
                                setOpened={setOpened}
                                expenses={expenses[index].expense}
                            />
                        }
                        setOpened={setOpened}
                    />
                    : ''}
            </div>

        </div >

    )
}

export default DomesticExpensesActives