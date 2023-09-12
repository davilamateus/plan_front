import Api from "../../axios";
import useSetEntraces from "../../store/hooks/finances/useSetEntraces";
import IFinancesExpense from "../../types/finances/IExpense";
import useGetExpenseApi from "./useGetExpenses";


const useAddExpense = () => {

    const UseGetExpenseAPI = useGetExpenseApi();
    const UseSetEntraces = useSetEntraces();

    return async (finances: IFinancesExpense) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.post('/finances/expense', finances, config)
            .then((data) => {

                if (finances.type == 1) {
                    UseGetExpenseAPI(0, 100000000000000000, 1).then((data: any) => {
                        UseSetEntraces(data.data)
                    })
                }
                return data
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddExpense;