import { useContext, useEffect, useState } from "react";
import { formartMoney } from "../../../../../../functions/formartMoney/formartMoney";
import { IFinancesGoal } from "../../../../../../types/IFinances";
import DomesticCostPlanningCircle from "../circle";
import BoxFullpage from "../../../../../communs/boxFullpage";
import ModalGoals from "../../../../modal/categories";
import "./style.scss";
import { UseFinanceContext } from "../../../../../../context/useFinanceContext";

interface type {
	goal: IFinancesGoal;
	totalDomestic: number;
	date: {
		month: string;
		year: number;
		from: number;
		to: number;
	};
}

const DomesticGoalsCardOthers = ({ goal, date, totalDomestic }: type) => {
	const [calc, setCalc] = useState(0);
	const [opened, setOpened] = useState<boolean>(false);

	const finances = useContext(UseFinanceContext);

	useEffect(() => {
		const calc =
			finances?.state.domestic.expenses
				.filter(
					(item) =>
						item.date > date.from &&
						item.date <= date.to &&
						item.financesGoalId == goal.id
				)
				.reduce((acc, item) => item.value + acc, 0) || 0;
		setCalc(calc);
	}, [finances, date]);

	return (
		<>
			<div
				className="goals-box box"
				onClick={() => {
					setOpened(true);
				}}
			>
				<div className="goals-left">
					<div className="goal-circle">
						<DomesticCostPlanningCircle
							value={(calc * 100) / totalDomestic}
							color={goal.color}
							icon={goal.icon}
						/>
					</div>
				</div>
				<div className="goals-content">
					<span className="goals-title">{goal.title}</span>
					<span className="goals-value">{formartMoney(calc)}</span>
					<div style={{ color: `${goal.color}` }} className="goal-porcent">
						{goal.id !== 0 && (
							<>
								{!Number.isNaN((calc * 100) / totalDomestic)
									? ((calc * 100) / totalDomestic).toFixed(1)
									: 0}
								%
							</>
						)}
					</div>
				</div>
			</div>
			{opened ? (
				<BoxFullpage
					title={goal.title}
					setOpened={setOpened}
					content={<ModalGoals goalEdit={goal} setOpened={setOpened} />}
				/>
			) : (
				""
			)}
		</>
	);
};

export default DomesticGoalsCardOthers;
