import Api from "../../../axios";
import { IFinancesGoalsList } from "../../../types/finances/IGoals";
import useGetGoalsApi from "./useGetGoals";



const useDeleteGoal = () => {

    const UseGetGoalsApi = useGetGoalsApi();


    return async (goal: IFinancesGoalsList, fromDate: number, toDate: number, save: boolean) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        console.log('Esse pe oi du', goal.id)

        const res = await Api.delete(`/finances/goals?id=${goal.id}`, config)
            .then(() => {
                UseGetGoalsApi(fromDate, toDate, goal.type, save);
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useDeleteGoal;