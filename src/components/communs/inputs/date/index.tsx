import React, { Dispatch, SetStateAction } from 'react'
import DateToInput from '../../../../functions/date/dateToInput';

interface type {
    title: string;
    date: number;
    setDate: Dispatch<SetStateAction<number>>;
}

const InputDate = ({ title, date, setDate }: type) => {
    console.log('Aqui', DateToInput(date))



    return (
        <div>
            <label>
                <h4>{title}</h4>
            </label>
            <input
                type="date"
                defaultValue={DateToInput(date)}
                onChange={(e) => { setDate(new Date(e.target.value).getTime()) }}
            />
        </div>
    )
}

export default InputDate