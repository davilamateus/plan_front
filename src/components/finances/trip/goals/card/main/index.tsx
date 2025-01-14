import { useState, useEffect, useContext } from "react";

import TripGoalsCicle from "../circle";
import "./style.scss";
import BoxFullpage from "../../../../../communs/boxFullpage";
import FinanceSimpleResult from "../../../../comuns/resume";
import ModalGoals from "../../../../modal/categories";
import { IFinancesGoal } from "../../../../../../types/IFinances";
import { UseFinanceContext } from "../../../../../../context/useFinanceContext";

interface type {
	goal: IFinancesGoal;
}

const TripGoalsCard = ({ goal }: type) => {
	const [opened, setOpened] = useState<boolean>(false);
	const [valueItens, setValueItens] = useState(0);
	const finances = useContext(UseFinanceContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const calc =
			finances?.state.trip.expenses.reduce(
				(acc, item) => item.value + acc,
				0
			) || 0;
		setTotal(calc);
	}, [finances]);

	useEffect(() => {
		if (finances) {
			const array = finances?.state.trip.expenses.filter(
				(item) => item.financesGoalId == goal.id
			);
			setValueItens(array.reduce((acc, crr) => acc + crr.value, 0));
		}
	}, [finances]);

	return (
		<>
			<div
				className="trip-box box"
				onClick={() => {
					setOpened(true);
				}}
			>
				<div className="trip-title">{goal.title}</div>
				<div className="trip-left">
					<div className="circle">
						<TripGoalsCicle
							value={goal.id !== 0 ? (valueItens * 100) / total : 100}
							color={goal.color}
							icon={goal.icon}
						/>
					</div>
				</div>
				<div className="trip-content">
					<div className="porcent" style={{ color: goal.color }}>
						{goal.id !== 0 && <>{((valueItens * 100) / total).toFixed(1)}%</>}
					</div>
					<FinanceSimpleResult title="Investidos" value={valueItens} />
				</div>
			</div>
			{opened && (
				<BoxFullpage
					title={goal.title}
					setOpened={setOpened}
					content={
						<ModalGoals
							goalEdit={{
								title: goal.title,
								color: goal.color,
								icon: goal.icon,
								value: goal.value,
								type: 2,
								id: goal.id,
							}}
							setOpened={setOpened}
						/>
					}
				/>
			)}
		</>
	);
};

export default TripGoalsCard;
