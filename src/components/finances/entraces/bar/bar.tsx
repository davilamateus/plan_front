import { useContext, useEffect, useState } from "react";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import { getTimestampInfomartions } from "../../../../functions/date/getTimestampInfomartions";
import { formartMoney } from "../../../../functions/formartMoney/formartMoney";
import "./style.scss";

const BarFinances = () => {
	const finances = useContext(UseFinanceContext);
	const [moreValue, setMoreValue] = useState<number>(50000);
	const [values, setValues] = useState<number[]>(Array(12).fill(0));

	const roundUp = (num: number): number => {
		const numStr = num.toString();
		const firstDigit = parseInt(numStr[0]);
		const roundedValue = (firstDigit + 1) * Math.pow(10, numStr.length - 1);

		return roundedValue;
	};

	useEffect(() => {
		if (finances && finances?.state?.entraces?.length > 0) {
			const newValue = Array(12).fill(0);
			finances.state.entraces.forEach((item) => {
				const calc = new Date().getMonth() - new Date(item.date).getMonth();
				if (calc >= 0 && calc < 12) {
					newValue[calc] += item.value;
				}
			});
			setValues(newValue);

			const maxValue = Math.max(...newValue);
			if (maxValue > moreValue) {
				setMoreValue(roundUp(maxValue));
			}
		}
	}, [finances]);

	return (
		<div className="finances-bar box">
			<div className="finances-bar-values">
				<p>{formartMoney(moreValue)}</p>
				<p>{formartMoney(moreValue * 0.8)}</p>
				<p>{formartMoney(moreValue * 0.6)}</p>
				<p>{formartMoney(moreValue * 0.4)}</p>
				<p>{formartMoney(moreValue * 0.2)}</p>
				<p>{formartMoney(0)}</p>
			</div>
			<div className="finances-bar-content">
				<div className="finances-bar-bar">
					{[...values].reverse().map((item, index) => (
						<div
							key={index}
							className={`finances-bar-item finance-bar-item-${index}`}
						>
							<div className={`finances-bar-border box`}>
								<div
									style={{
										height: `${
											item && moreValue ? (item * 100) / moreValue : 0
										}%`,
									}}
									className="finances-bar-item-fill"
								></div>
							</div>
							<div className="finances-bar-months">
								{
									getTimestampInfomartions(new Date().getTime(), index + 1)
										.nameOfMonthShort
								}{" "}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BarFinances;
