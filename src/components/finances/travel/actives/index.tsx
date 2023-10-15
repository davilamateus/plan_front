
import { useState, useEffect } from 'react';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import './style.scss';
import useGetTripGoals from '../../../../store/hooks/finances/useGetTripGoals';
import ExpensesActives from '../../comuns/actives';
import TitleOfSession from '../../../communs/titleOfSession';


interface trips {
    expense: IFinancesExpenseList;
    color: string;
    category: string;
    icon: number;
}

const TripExpensesActives = () => {


    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);

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
        <div>
            <TitleOfSession title='Travel Actives' />
            <ExpensesActives active={trips} height={'auto'} />
        </div>
    )
}

export default TripExpensesActives;