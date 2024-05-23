import Api from "../../../axios";
import { IFinancesGoal } from "../../../types/finances/IGoals";
import { useGetGoalsApi } from "./useGetGoals";

const useDeleteGoal = () => {
    const UseGetGoalsApi = useGetGoalsApi();

    return async (goal: IFinancesGoal) => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token");
        console.log(goal);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.delete(`/finances/goals?id=${goal.id}`, config)
            .then(() => {
                UseGetGoalsApi(goal.type);
            })
            .catch((error) => console.log(error));
        return res;
    };
};

export default useDeleteGoal;
