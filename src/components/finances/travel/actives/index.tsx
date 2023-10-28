import { useEffect, useState } from "react";
import { IFinancesExpenseList } from "../../../../types/finances/IExpense";
import useGetDomesticGoals from "../../../../store/hooks/finances/useGetDomesticGoals";
import { IFinancesGoalsList } from "../../../../types/finances/IGoals";
import ExpensesActives from "../../comuns/actives/table";
import useGetTripGoals from "../../../../store/hooks/finances/useGetTripGoals";
import useGetAvatar from "../../../../store/hooks/avatar/useGetAvatar";



interface type {
    goals: IFinancesGoalsList[]
}

const TripActives = ({ goals }: type) => {


    const [expenses, setExpenses] = useState([])


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

export default TripActives;