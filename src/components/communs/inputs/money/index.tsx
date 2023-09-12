import { Dispatch, SetStateAction } from "react";
import CurrencyFormat from 'react-currency-format';
import './style.scss';


interface type {
    title: string;
    setInput: Dispatch<SetStateAction<number>>;
    input: number | undefined;
}

const InputMoney = ({ title, setInput, input }: type) => {

    return (
        <label>
            <h4>{title}</h4>
            <div className="input-money">
                <span>$</span>
                <CurrencyFormat
                    isNumericString={true}
                    thousandSeparator={false}
                    decimalSeparator='.'
                    value={input || 0}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    displayType={'input'}
                    onValueChange={(e: any) => {
                        setInput(e.value)
                    }}
                />
            </div>
        </label>
    )

}

export default InputMoney;