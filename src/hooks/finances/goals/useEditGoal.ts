
import Api from "../../../axios";
import GetTimestampInfomartions from "../../../functions/date/GetTimestampInfomartions";
import { IFinancesGoalsList } from "../../../types/finances/IGoals";
import useGetGoalsApi from "./useGetGoals";


const useEditGoal = () => {

    const UseGetGoal = useGetGoalsApi();

    return async (goal: IFinancesGoalsList) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.patch('/finances/goals/', goal, config)
            .then(() => {
                if (goal.type == 1) {
                    UseGetGoal(GetTimestampInfomartions(new Date().getTime(), 0).firstDay, GetTimestampInfomartions(new Date().getTime(), 0).lastDay, goal.type, true);
                } else if (goal.type == 2) {

                    UseGetGoal(0, 10000000000000000000, goal.type, true);
                }


            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useEditGoal;