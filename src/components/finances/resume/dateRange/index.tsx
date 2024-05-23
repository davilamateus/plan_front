import { Dispatch, SetStateAction } from 'react';
import { getTimestampInfomartions } from '../../../../functions/date/getTimestampInfomartions';
import './style.scss';
import TitleOfSession from '../../../communs/titleOfSession';


interface type {
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
    setDate: Dispatch<SetStateAction<{
        month: string;
        year: number;
        from: number;
        to: number;
    }>>;
}
const InputDateRange = ({ setDate, date }: type) => {


    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const getYearsFromCurrentToPast = () => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let i = 10; i >= 0; i--) {
            years.push(currentYear - i);
        }
        for (let i = 1; i <= 10; i++) {
            years.push(currentYear + i);
        }

        return years;
    };



    const handleChangeMonths = (number: number) => {

        if (date.month == 'December' && number > 0) {
            setDate({
                month: 'January',
                year: date.year + 1,
                from: getTimestampInfomartions(new Date(date.year + 1, months.indexOf('January'), 15).getTime(), 0).firstDay,
                to: getTimestampInfomartions(new Date(date.year + 1, months.indexOf('January'), 15).getTime(), 0).lastDay,
            })
        } else if (date.month == 'January' && number < 0) {
            setDate({
                month: 'December',
                year: date.year - 1,
                from: getTimestampInfomartions(new Date(date.year - 1, months.indexOf('December'), 15).getTime(), 0).firstDay,
                to: getTimestampInfomartions(new Date(date.year - 1, months.indexOf('December'), 15).getTime(), 0).lastDay,
            })
        } else {
            setDate({
                month: months[
                    months.indexOf(date.month) + (number)
                ],
                year: date.year,
                from: getTimestampInfomartions(new Date(date.year, months.indexOf(date.month) + (number), 15).getTime(), 0).firstDay,
                to: getTimestampInfomartions(new Date(date.year, months.indexOf(date.month) + (number), 15).getTime(), 0).lastDay,
            })

        }
    }


    return (
        <div className='date-range-box'>
            <TitleOfSession title={`${date.month}'s Finances`} />
            <div className='date-range'>
                <button onClick={() => handleChangeMonths(- 1)}>Back</button>
                <select
                    value={date.month}
                    onChange={(e) => setDate({ ...date, month: e.target.value })}
                >
                    {months.map((month, index) => (
                        <option key={index} value={month}>
                            {month}
                        </option>

                    ))}
                </select>
                <select
                    value={date.year}
                    onChange={(e) => {
                        setDate({ ...date, year: Number(e.target.value) })
                    }} >
                    {getYearsFromCurrentToPast().map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
                <button onClick={() => handleChangeMonths(1)}>Next </button>
            </div>
        </div>
    )
}

export default InputDateRange;