import Api from "../../../axios";
import { IFinancesExpense } from "../../../types/finances/IExpense";
import { useGetGoalsApi } from "../goals/useGetGoals";

const useDeleteExpense = () => {
    const UseGetGoalsApi = useGetGoalsApi();

    return async (expense: IFinancesExpense) => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token");

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.delete(`/finances/expenses?id=${expense.id}`, config)
            .then(() => {
                UseGetGoalsApi(expense.type);
            })
            .catch((error) => console.log(error));
        return res;
    };
};

export default useDeleteExpense;
