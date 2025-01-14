import "./style.scss";
import TitleOfComponent from "../../../communs/titleOfComponent";
import { useContext, useEffect, useState } from "react";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import { IFinancesGoal } from "../../../../types/IFinances";

const TripResume = () => {
	const finances = useContext(UseFinanceContext);
	const [total, setTotal] = useState(0);

	// Calcula o total de despesas da viagem
	useEffect(() => {
		const calc =
			finances?.state.trip.expenses.reduce(
				(acc, item) => item.value + acc,
				0
			) || 0;
		setTotal(calc);
	}, [finances]);

	// Calcula o total por categoria
	const getTotalCategory = (id: number) => {
		if (finances) {
			const array = finances.state.trip.expenses.filter(
				(item) => item.financesGoalId === id
			);
			return array.reduce((acc, crr) => acc + crr.value, 0);
		}
		return 0; // Retorna 0 se não houver despesas para a categoria
	};

	return (
		<div className="trip-finances-resume">
			<div className="trip-finances-resume-bar">
				{finances?.state.loaded &&
					finances.state.trip.goals.map(
						(item: IFinancesGoal, index: number) => {
							const categoryTotal = getTotalCategory(item.id);
							const widthPercentage =
								total > 0 ? (categoryTotal * 100) / total : 0;

							return (
								<div
									key={index}
									className="trip-finance-resume-bar-item"
									style={{
										backgroundColor: item.color,
										width: `${widthPercentage}%`,
									}}
								></div>
							);
						}
					)}
			</div>
		</div>
	);
};

export default TripResume;
