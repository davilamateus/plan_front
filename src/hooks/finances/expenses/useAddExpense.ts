import Api from "../../../axios";
import { IFinancesExpenseAdd } from "../../../types/finances/IExpense";
import useGetGoalsApi from "../goals/useGetGoals";
import GetTimestampInfomartions from "../../../functions/date/GetTimestampInfomartions";


const useAddExpense = () => {
    const UseGetGoalsApi = useGetGoalsApi();


    return async (finances: IFinancesExpenseAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
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