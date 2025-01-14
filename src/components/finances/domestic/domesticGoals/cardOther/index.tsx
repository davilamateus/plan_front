import { useContext, useEffect, useState } from "react";
import { formartMoney } from "../../../../../functions/formartMoney/formartMoney";
import { UseFinanceContext } from "../../../../../context/useFinanceContext";
import DomesticCostPlanningCircle from "../card/circle";
import "./style.scss";

interface type {
	totalDomestic: number;
	date: {
		month: string;
		year: number;
		from: number;
		to: number;
	};
}

const FinanceResumeCardOther = ({ date, totalDomestic }: type) => {
	const [value, setValue] = useState(0);
	const finances = useContext(UseFinanceContext);

	useEffect(() => {
		const calc =
			finances?.state.domestic.expenses
				.filter((item) => item.date > date.from && item.date <= date.to)
				.filter((item) => item.financesGoalId == null)
				.reduce((acc, item) => item.value + acc, 0) || 0;
		setValue(calc);
	}, [finances, date]);

	return value > 0 ? (
		<div className="goals-box box">
			<div className="goals-left">
				<div className="goal-circle">
					<DomesticCostPlanningCircle
						value={(value * 100) / totalDomestic}
						color={"#000"}
						icon={0}
					/>
				</div>
			</div>
			<div className="goals-content">
				<span className="goals-title">Outros</span>
				<span className="goals-value">{formartMoney(value)}</span>
				<div style={{ color: `#000` }} className="goal-porcent">
					{((value * 100) / totalDomestic).toFixed(1)}%
				</div>
			</div>
		</div>
	) : (
		<></>
	);
};

export default FinanceResumeCardOther;
