import { CurrencyInput, Currencies, Locales } from "input-currency-react";
import "./style.scss";

interface type {
	title: string;
	setInput: (e: number) => void;
	input: number;
}

const InputMoney = ({ title, setInput, input }: type) => {
	const handleOnChange = (inputElement: any, maskedValue: any, value: any) => {
		setInput(Number(value.replace(".", "")));
	};

	return (
		<label>
			<h4>{title}</h4>
			<div className="input-money">
				<div>
					<span>R$</span>
					<CurrencyInput
						value={input.toString()} // Initial value
						options={{
							precision: 2,
							style: "decimal",
							allowNegative: false,
							alwaysNegative: false,
							locale: Locales["Portuguese (Brazil)"], // Format Type
							i18nCurrency: Currencies["Brazilian Real"], // Symbol
						}}
						autoFocus={false}
						onChangeEvent={handleOnChange}
					/>
				</div>
			</div>
		</label>
	);
};

export default InputMoney;
