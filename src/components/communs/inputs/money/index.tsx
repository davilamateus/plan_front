import { Dispatch, SetStateAction } from "react";
import CurrencyFormat from 'react-currency-format';


interface type {
    title: string;
    setInput: Dispatch<SetStateAction<string | undefined>>;
    input: string | undefined;
    placeholder: string;
}

const InputMoney = ({ title, setInput, input, placeholder }: type) => {
    function currencyFormat(num: number) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <label>
            <h4>{title}</h4>
            <div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => {
                        console.log(currencyFormat(+(e.target.value)))
                        setInput((e.target.value))
                    }}
                />
            </div>
        </label>
    )

}

export default InputMoney;