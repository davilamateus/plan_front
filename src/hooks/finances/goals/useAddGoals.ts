import Api from "../../../axios";
import GetTimestampInfomartions from "../../../functions/date/GetTimestampInfomartions";
import { IFinancesGoalsAdd } from "../../../types/finances/IGoals";
import useGetGoalsApi from "./useGetGoals";


const useAddGoals = () => {

    const UseGetGoals = useGetGoalsApi();
    const getMonthInfors = GetTimestampInfomartions(new Date().getTime(), 0);

    return async (goals: IFinancesGoalsAdd) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.post('/finances/goals', goals, config)
            .then(() => {
                UseGetGoals(getMonthInfors.firstDay, getMonthInfors.lastDay, goals.type, true);
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddGoals;

