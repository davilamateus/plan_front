import { Dispatch, SetStateAction } from "react";
import { getTimestampInfomartions } from "../../../../functions/date/getTimestampInfomartions";
import "./style.scss";
import TitleOfSession from "../../../communs/titleOfSession";

interface type {
	date: {
		month: string;
		year: number;
		from: number;
		to: number;
	};
	setDate: Dispatch<
		SetStateAction<{
			month: string;
			year: number;
			from: number;
			to: number;
		}>
	>;
}
const InputDateRange = ({ setDate, date }: type) => {
	const months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];
	const getYearsFromCurrentToPast = () => {
		const years = [];
		const currentYear = new Date().getFullYear();
		for (let i = 10; i >= 0; i--) {
			years.push(currentYear - i);
		}
		for (let i = 1; i <= 10; i++) {
			years.push(currentYear + i);
		}

		return years;
	};

	const handleChangeMonths = (number: number) => {
		if (date.month == "Dezembro" && number > 0) {
			setDate({
				month: "Janeiro",
				year: date.year + 1,
				from: getTimestampInfomartions(
					new Date(date.year + 1, months.indexOf("Janeiro"), 15).getTime(),
					0
				).firstDay,
				to: getTimestampInfomartions(
					new Date(date.year + 1, months.indexOf("Janeiro"), 15).getTime(),
					0
				).lastDay,
			});
		} else if (date.month == "Janeiro" && number < 0) {
			setDate({
				month: "Dezembro",
				year: date.year - 1,
				from: getTimestampInfomartions(
					new Date(date.year - 1, months.indexOf("Dezembro"), 15).getTime(),
					0
				).firstDay,
				to: getTimestampInfomartions(
					new Date(date.year - 1, months.indexOf("Dezembro"), 15).getTime(),
					0
				).lastDay,
			});
		} else {
			setDate({
				month: months[months.indexOf(date.month) + number],
				year: date.year,
				from: getTimestampInfomartions(
					new Date(
						date.year,
						months.indexOf(date.month) + number,
						15
					).getTime(),
					0
				).firstDay,
				to: getTimestampInfomartions(
					new Date(
						date.year,
						months.indexOf(date.month) + number,
						15
					).getTime(),
					0
				).lastDay,
			});
		}
	};

	return (
		<div className="date-range-box">
			<div className="data-range-title">
				<TitleOfSession title={`Gastos de ${date.month} de ${date.year}`} />
				<div>
					<svg
						onClick={() => handleChangeMonths(-1)}
						xmlns="http://www.w3.org/2000/svg"
						width="4.71"
						height="8.242"
						viewBox="0 0 4.71 8.242"
					>
						<path
							id="Path_2959"
							data-name="Path 2959"
							d="M4.121,1.41,1.014,4.535a.591.591,0,0,1-.84,0,.6.6,0,0,1,0-.845L3.671.173A.588.588,0,0,1,4.121,0a.588.588,0,0,1,.45.172l3.5,3.517a.6.6,0,0,1,0,.845.591.591,0,0,1-.84,0Z"
							transform="translate(0 8.242) rotate(-90)"
							fill="#383838"
						/>
					</svg>
					<svg
						onClick={() => handleChangeMonths(1)}
						xmlns="http://www.w3.org/2000/svg"
						width="4.71"
						height="8.242"
						viewBox="0 0 4.71 8.242"
					>
						<path
							id="Path_2958"
							data-name="Path 2958"
							d="M204.12,123.294l-3.107-3.124a.591.591,0,0,0-.84,0,.6.6,0,0,0,0,.845l3.5,3.516a.673.673,0,0,0,.9,0l3.5-3.516a.6.6,0,0,0,0-.845.591.591,0,0,0-.84,0Z"
							transform="translate(-119.994 208.241) rotate(-90)"
							fill="#383838"
						/>
					</svg>
				</div>
			</div>
			<div className="date-range">
				<select
					value={date.month}
					onChange={(e) => setDate({ ...date, month: e.target.value })}
				>
					{months.map((month, index) => (
						<option key={index} value={month}>
							{month}
						</option>
					))}
				</select>
				<select
					value={date.year}
					onChange={(e) => {
						setDate({ ...date, year: Number(e.target.value) });
					}}
				>
					{getYearsFromCurrentToPast().map((year, index) => (
						<option key={index} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default InputDateRange;
