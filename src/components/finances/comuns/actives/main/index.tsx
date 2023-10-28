import { useEffect, useState } from "react";
import { IFinancesGoalsList } from "../../../../../types/finances/IGoals";
import ExpensesActives from "../table";


interface type {
    goals: IFinancesGoalsList[]
}

const GoalsToExpenses = ({ goals }: type) => {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        if (goals.length > 0) {
            let array: any = []
            goals.map((goal: IFinancesGoalsList) => {
                if (goal.itens.length > 0) {
                    goal.itens.map((expense) => {
                        array.push({ ...expense, color: goal.color })
                    })
                }
                setExpenses(array)
            })
        }
    }, [goals]);

    return (
        <ExpensesActives actives={expenses} />
    )
}

export default GoalsToExpenses;