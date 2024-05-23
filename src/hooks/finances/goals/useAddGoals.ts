import { IFinancesGoal } from "../../../types/finances/IGoals";
import Api from "../../../axios";
import { useGetGoalsApi } from "./useGetGoals";

const useAddGoals = () => {
    const UseGetGoals = useGetGoalsApi();

    return async (goals: IFinancesGoal) => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token");

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.post("/finances/goals", goals, config)
            .then(() => UseGetGoals(goals.type))
            .catch((error) => console.log(error));
        return res;
    };
};

export default useAddGoals;
