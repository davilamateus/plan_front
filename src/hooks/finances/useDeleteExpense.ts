import Api from "../../axios";
import useSetEntraces from "../../store/hooks/finances/useSetEntraces";
import useGetExpenseApi from "./useGetExpenses";


const useDeleteExpense = () => {

    const UseGetExpenseAPI = useGetExpenseApi();
    const UseSetEntraces = useSetEntraces();

    return async (id: number, type: number) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.delete(`/finances/expense?id=${id}`, config)
            .then((data) => {

                if (type == 1) {
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

export default useDeleteExpense;