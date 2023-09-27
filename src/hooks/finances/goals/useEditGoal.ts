
import Api from "../../../axios";
import { IFinancesGoalsList } from "../../../types/finances/IGoals";
import useGetGoalsApi from "./useGetGoals";


const useEditGoal = () => {

    const UseGetGoal = useGetGoalsApi();

    return async (goal: IFinancesGoalsList, fromDate: number, toDate: number) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.patch('/finances/goals/', goal, config)
            .then(() => {
                UseGetGoal(fromDate, toDate, goal.type, true);


            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useEditGoal;