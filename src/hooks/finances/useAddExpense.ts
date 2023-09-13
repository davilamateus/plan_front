import Api from "../../axios";
import useSetEntraces from "../../store/hooks/finances/useSetEntraces";
import useGetExpenseApi from "./useGetExpenses";
import { IFinancesExpenseAdd } from "../../types/finances/IExpense";


const useAddExpense = () => {

    const UseGetExpenseAPI = useGetExpenseApi();
    const UseSetEntraces = useSetEntraces();

    return async (finances: IFinancesExpenseAdd) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.post('/finances/expense', finances, config)
            .then((data) => {

                if (finances.type == 1) {
                    UseGetExpenseAPI(0, 100000000000000000, 1).then((data: any) => {
                        UseSetEntraces(data.data);
                    })
                }
                return data;
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddExpense;