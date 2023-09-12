import Api from "../../axios";
import { IFinancesGoalsAdd } from "../../types/finances/IGoals";


const useAddGoals = () => {

    return async (goals: IFinancesGoalsAdd) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.post('/finances/goals', goals, config)
            .then((data) => {

                return data
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useAddGoals;