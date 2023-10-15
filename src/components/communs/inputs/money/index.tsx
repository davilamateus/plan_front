import { Dispatch, SetStateAction, useState } from "react";
import './style.scss';
import {
    CurrencyInput,
    Currencies,
    Locales
} from 'input-currency-react';




interface type {
    title: string;
    setInput: Dispatch<SetStateAction<number>>;
    input: number;
}

const InputMoney = ({ title, setInput, input }: type) => {




    const handleOnChange = (inputElement: any, maskedValue: any, value: any) => {
        setInput(value.replace('.', ''))
        console.log(value.replace('.', ''))
    };

    ;


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
                            locale: Locales["English (United States)"], // Format Type
                            i18nCurrency: Currencies["US Dollar"] // Symbol
                        }}
                        autoFocus={true}
                        onChangeEvent={handleOnChange}
                    />
                </div>

            </div>
        </label>
    )

}

export default InputMoney;