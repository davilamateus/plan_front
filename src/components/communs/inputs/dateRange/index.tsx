import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import './style.scss'
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';


interface type {

    fromDate: number;
    setFromDate: Dispatch<SetStateAction<number>>;
    toDate: number;
    setToDate: Dispatch<SetStateAction<number>>;
}
const InputDateRange = ({ setFromDate, setToDate, fromDate, toDate }: type) => {


    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    function getYearsFromCurrentToPast(): number[] {
        const years = [];
        const currentYear = new Date().getFullYear();

        for (let i = 0; i <= 10; i++) {
            years.push(currentYear - i);
        }

        return years;
    }

    const [monthSelected, setMonthSelected] = useState<number>(
        (new Date().getMonth())
    );
    const [yearSelected, setYearSelected] = useState<string>(
        (new Date().getFullYear().toString())
    );


    const UseGetDomesticGoals = useGetDomesticGoals();
    const [dateLocked, setDateLoked] = useState(true);


    const UseGetGoals = useGetGoalsApi();

    useEffect(() => {
        if (UseGetDomesticGoals == false && dateLocked) {
            setDateLoked(false)
            UseGetGoals(fromDate, toDate, 1, true);
        } else {
            setDateLoked(false)
        }
    }, [UseGetDomesticGoals])

    useEffect(() => {
        if (!dateLocked) {
            UseGetGoals(fromDate, toDate, 1, true);
        }


    }, [toDate, fromDate])

    useEffect(() => {
        if (monthSelected + 1 < 10) {

            setFromDate(GetTimestampInfomartions(new Date(`0${monthSelected + 1}-01-${yearSelected}`).getTime(), 0).firstDay);
            setToDate(GetTimestampInfomartions(new Date(`0${monthSelected + 1}-01-${yearSelected}`).getTime(), 0).lastDay);
        } else {
            setFromDate(GetTimestampInfomartions(new Date(`${monthSelected + 1}-01-${yearSelected}`).getTime(), 0).firstDay);
            setToDate(GetTimestampInfomartions(new Date(`${monthSelected + 1}-01-${yearSelected}`).getTime(), 0).lastDay);
        }
    }, [monthSelected, yearSelected])





    return (
        <div className='date-range'>
            <h3>Period</h3>
            <select
                value={monthSelected}
                onChange={(e) => { setMonthSelected(+(e.target.value)) }}
            >
                {months.map((month, index) => (
                    <option key={index} value={index}>
                        {month}
                    </option>

                ))}
            </select>
            <select onChange={(e) => {
                setYearSelected(e.target.value)
            }} >
                {getYearsFromCurrentToPast().map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>

        </div>
    )
}

export default InputDateRange;