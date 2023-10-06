import Api from "../../../axios";
import useGetExpenseApi from "./useGetExpenses";
import { IFinancesExpenseAdd } from "../../../types/finances/IExpense";
import useGetGoalsApi from "../goals/useGetGoals";
import GetTimestampInfomartions from "../../../functions/date/GetTimestampInfomartions";


const useAddExpense = () => {
    const UseGetGoalsApi = useGetGoalsApi();


    return async (finances: IFinancesExpenseAdd) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.post('/finances/expense', finances, config)
            .then(() => {

                UseGetGoalsApi(GetTimestampInfomartions(new Date().getTime(), 0).firstDay, GetTimestampInfomartions(new Date().getTime(), 0).lastDay, finances.type, true);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddExpense;