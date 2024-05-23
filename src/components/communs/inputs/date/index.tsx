import { dateToInput } from '../../../../functions/date/dateToInput';

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
            <input
                type="date"
                value={dateToInput(date)}
                onChange={(e) => { setDate(new Date(e.target.value).getTime()) }}
            />
        </div>
    )
}

export default InputDate;