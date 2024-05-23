import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetGoalsApi } from "../../../hooks/finances/goals/useGetGoals";

export const useGetDomesticGoals = () => {
    const getDomesticGoals = useSelector((state: any) => state.domesticGoals);
    const [domesticGoals, setDomesticGoals] = useState(getDomesticGoals);
    const UseGetGoalsApi = useGetGoalsApi();
    useEffect(() => {
        if (getDomesticGoals.domesticGoals) {
            setDomesticGoals(getDomesticGoals.domesticGoals);
        } else {
            UseGetGoalsApi(1);
        }
    }, [getDomesticGoals]);

    return domesticGoals;
};
