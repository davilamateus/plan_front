import Api from "../../../axios";
import { IFinancesExpense } from "../../../types/finances/IExpense";
import {useGetGoalsApi} 
 from "../goals/useGetGoals";
import useGetExpenseApi from "./useGetExpenses";


const useEditExpense = () => {

    const UseGetExpenseAPI = useGetExpenseApi();
    const UseGetGoals = useGetGoalsApi();

    return async (finances: IFinancesExpense) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };


        const res = await Api.patch('/finances/expenses', finances, config)
            .then(() => {UseGetGoals(finances.type)})
            .catch((error) => console.log(error))
        return res;
    }
}

export default useEditExpense;