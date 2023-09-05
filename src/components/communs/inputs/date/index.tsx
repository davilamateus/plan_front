import React, { Dispatch, SetStateAction } from 'react'
import DateToInput from '../../../../functions/date/dateToInput';

interface type {
    title: string;
    date: number;
    setDate: Dispatch<SetStateAction<number>>;
}

const InputDate = ({ title, date, setDate }: type) => {


    return (
        <div>
            <label>
                <h3>{title}</h3>
            </label>
            <input
                type="date"
                defaultValue={DateToInput(date + 31557600000)}
                onChange={(e) => { setDate(new Date(e.target.value).getTime()) }}
            />
        </div>
    )
}

export default InputDate