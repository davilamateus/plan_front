import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetGoalsApi } from "../../../hooks/finances/goals/useGetGoals";

export const useGetTripGoals = () => {
	const getTripGoals = useSelector((state: any) => state.tripGoals);
	const [tripGoals, setTripGoals] = useState(getTripGoals);
	const UseGetGoalsApi = useGetGoalsApi();
	useEffect(() => {
		if (getTripGoals.tripGoals) {
			setTripGoals(getTripGoals.tripGoals);
		} else {
			UseGetGoalsApi(2);
		}
	}, [getTripGoals]);

	return tripGoals;
};
