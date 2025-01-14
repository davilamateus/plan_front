import { dateToInput } from "../../../../functions/date/dateToInput";
import "./style.scss";

interface type {
	title: string;
	date: number;
	setDate: (e: number) => void;
}

const InputDate = ({ title, date, setDate }: type) => {
	return (
		<div>
			<label>
				<h4>{title}</h4>
			</label>
			<div className="input-date">
				<input
					type="date"
					value={dateToInput(date)}
					onChange={(e) => {
						setDate(new Date(e.target.value).getTime());
					}}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="15"
					viewBox="0 0 15 15"
				>
					<path
						id="calendar-lines-alt-svgrepo-com"
						d="M6.111,8.444h7.778M6.111,11.556H10M6.111,3V4.556M13.889,3V4.556M5.489,17h9.022a3.864,3.864,0,0,0,1.64-.17,1.555,1.555,0,0,0,.68-.68,3.864,3.864,0,0,0,.17-1.64V7.044a3.864,3.864,0,0,0-.17-1.64,1.555,1.555,0,0,0-.68-.68,3.865,3.865,0,0,0-1.64-.17H5.489a3.864,3.864,0,0,0-1.64.17,1.555,1.555,0,0,0-.68.68A3.864,3.864,0,0,0,3,7.044v7.467a3.865,3.865,0,0,0,.17,1.64,1.555,1.555,0,0,0,.68.68A3.864,3.864,0,0,0,5.489,17Z"
						transform="translate(-2.5 -2.5)"
						fill="none"
						stroke="#cecece"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1"
					/>
				</svg>
			</div>
		</div>
	);
};

export default InputDate;
