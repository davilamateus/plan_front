import Api from "../../../axios";
import useGetExpenseApi from "./useGetExpenses";
import { IFinancesExpenseAdd } from "../../../types/finances/IExpense";


const useAddExpense = () => {

    const UseGetExpenseAPI = useGetExpenseApi();

    return async (finances: IFinancesExpenseAdd) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.post('/finances/expense', finances, config)
            .then((data) => {
                UseGetExpenseAPI(0, 100000000000000000, finances.type, true);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddExpense;