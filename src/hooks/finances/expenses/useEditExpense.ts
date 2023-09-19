import Api from "../../../axios";
import { IFinancesExpenseList } from "../../../types/finances/IExpense";
import useGetGoalsApi from "../goals/useGetGoals";
import useGetExpenseApi from "./useGetExpenses";


const useEditExpense = () => {

    const UseGetExpenseAPI = useGetExpenseApi();
    const UseGetGoals = useGetGoalsApi();

    return async (finances: IFinancesExpenseList, fromDate: number, toDate: number, save: boolean) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };


        const res = await Api.patch('/finances/expense', finances, config)
            .then(() => {
                if (save) {
                    UseGetExpenseAPI(fromDate, toDate, finances.type, true);
                    UseGetGoals(fromDate, toDate, finances.type, true);
                }

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useEditExpense;