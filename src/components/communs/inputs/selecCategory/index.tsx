import { IFinancesGoal } from "../../../../types/IFinances";
import "./style.scss";

interface Type {
	title: string;
	goals: IFinancesGoal[];
	selectOption: number | null;
	setSelectOptions: (e: number | null) => void;
}

const InputSelectCategory = ({
	title,
	goals,
	setSelectOptions,
	selectOption,
}: Type) => {
	return (
		<label className="select-input">
			<h4>{title}</h4>
			<div>
				<select
					value={selectOption !== null ? selectOption : ""}
					onChange={(e) => {
						const value = e.target.value;
						setSelectOptions(value === "" ? null : +value);
					}}
				>
					{goals.map((item) => (
						<option key={item.id} value={item.id}>
							{item.title}
						</option>
					))}
				</select>
			</div>
		</label>
	);
};

export default InputSelectCategory;
