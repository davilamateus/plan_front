import { useEffect, useState } from "react";
import { IFinancesExpenseList } from "../../../../types/finances/IExpense";
import useGetDomesticGoals from "../../../../store/hooks/finances/useGetDomesticGoals";
import { IFinancesGoalsList } from "../../../../types/finances/IGoals";
import TitleOfSession from "../../../communs/titleOfComponent";
import ExpensesActives from "../../comuns/actives";


interface expenses {
    expense: IFinancesExpenseList;
    color: string;
    category: string;
    icon: number;
}

const DomesticExpensesActives = () => {


    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [expenses, setExpenses] = useState<expenses[]>([]);


    const UseGetDomesticGoals = useGetDomesticGoals();

    useEffect(() => {
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
        <ExpensesActives active={expenses} height={'200px'} />




    )
}

export default DomesticExpensesActives;