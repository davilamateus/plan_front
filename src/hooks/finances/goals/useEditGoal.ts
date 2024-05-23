import { IFinancesGoal } from "../../../types/finances/IGoals";
import { useGetGoalsApi } from "./useGetGoals";
import Api from "../../../axios";

const useEditGoal = () => {
    const UseGetGoal = useGetGoalsApi();

    return async (goal: IFinancesGoal) => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token");

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.patch("/finances/goals/", goal, config)
            .then(() => {
                UseGetGoal(goal.type);
            })
            .catch((error) => console.log(error));
        return res;
    };
};

export default useEditGoal;
