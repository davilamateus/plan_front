import {useGetGoalsApi} from "../goals/useGetGoals";
import Api from "../../../axios";
import { IFinancesExpense } from "../../../types/finances/IExpense";


const useAddExpense = () => {
    const UseGetGoalsApi = useGetGoalsApi();


    return async (finances: IFinancesExpense) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.post('/finances/expenses', finances, config)
            .then(() => UseGetGoalsApi(finances.type))
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddExpense;