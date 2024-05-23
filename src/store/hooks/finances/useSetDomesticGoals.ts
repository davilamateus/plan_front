import { useDispatch } from "react-redux";
import { IFinancesGoal } from "../../../types/finances/IGoals";

function useSetDomesticGoals() {
    const dispatch = useDispatch();
    return (domesticGoals: IFinancesGoal[]) => {
        dispatch({
            type: "@domesticGoals/SET_DOMESTIC_GOALS",
            domesticGoals
        });
    };
}
export default useSetDomesticGoals;
