import { Dispatch, SetStateAction, useState } from "react";
import CurrencyFormat from 'react-currency-format';
import './style.scss';
import FormartMoney from "../../../../functions/formartMoney/formartMoney";


interface type {
    title: string;
    setInput: Dispatch<SetStateAction<number>>;
    input: number;
}

const InputMoney = ({ title, setInput, input }: type) => {





    return (
        <label>
            <h4>{title}</h4>
            <div className="input-money">
                <span className="value-input-money">{FormartMoney(input)}</span>

                <input
                    type="number"
                    placeholder="0.00"
                    value={input}
                    onChange={(e) => {
                        setInput(+e.target.value)
                    }}
                />
            </div>
        </label>
    )

}

export default InputMoney;