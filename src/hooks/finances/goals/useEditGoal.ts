
import Api from "../../../axios";
import { IFinancesGoalsList } from "../../../types/finances/IGoals";
import useGetGoalsApi from "./useGetGoals";


const useEditGoal = () => {

    const UseGetGoal = useGetGoalsApi();

    return async (goal: IFinancesGoalsList, fromDate: number, toDate: number) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
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