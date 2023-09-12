import React, { useEffect, useState } from 'react'
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import IFinancesExpense from '../../../../types/finances/IExpense';
import GetFirstAndLastDayTimestamps from '../../../../functions/date/firstAndLastDayOfTheMonth';
import GraficOfBar from './grafic';




const FinancesEntracesGrafic = () => {
    const [entraces, setEntraces] = useState<IFinancesExpense[]>([])
    const UseGetEntraces = useGetEntraces();
    const [thatMonth, setThatMonth] = useState<number>(0)
    const [thatMonth_1, setThatMonth_1] = useState<number>(0)
    const [thatMonth_2, setThatMonth_2] = useState<number>(0)
    const [thatMonth_3, setThatMonth_3] = useState<number>(0)
    const [thatMonth_4, setThatMonth_4] = useState<number>(0)
    const [thatMonth_5, setThatMonth_5] = useState<number>(0)
    const [thatMonth_6, setThatMonth_6] = useState<number>(0)
    const [thatMonth_7, setThatMonth_7] = useState<number>(0)
    const [barData, setBarData] = useState<any>()
    const dateToday = new Date().getTime();



    useEffect(() => {
        if (UseGetEntraces.entraces !== false) {
            setEntraces(UseGetEntraces);
        }
    }, [UseGetEntraces]);


    useEffect(() => {
        if (entraces.length > 0) {
            setThatMonth(0)
            setThatMonth_1(0)
            setThatMonth_2(0)
            setThatMonth_3(0)
            setThatMonth_4(0)
            setThatMonth_5(0)
            setThatMonth_6(0)
            setThatMonth_7(0)
            entraces.map((item, index) => {
                if (item.date >= GetFirstAndLastDayTimestamps(dateToday, 0).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, 0).lastDay) {
                    setThatMonth(old => old + item.value)

                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -1).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -1).lastDay) {
                    setThatMonth_1(old => old + item.value)
                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -2).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -2).lastDay) {
                    setThatMonth_2(old => old + item.value)
                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -3).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -3).lastDay) {
                    setThatMonth_3(old => old + item.value)
                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -4).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -4).lastDay) {
                    setThatMonth_4(old => old + item.value)
                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -5).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -5).lastDay) {
                    setThatMonth_5(old => old + item.value)
                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -6).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -6).lastDay) {
                    setThatMonth_6(old => old + item.value)
                } else if (item.date >= GetFirstAndLastDayTimestamps(dateToday, -7).firstDay && item.date <= GetFirstAndLastDayTimestamps(dateToday, -7).lastDay) {
                    setThatMonth_7(old => old + item.value)
                }
            })
        }


    }, [entraces])


    useEffect(() => {
        setBarData([])
        setBarData({
            title: [
                GetFirstAndLastDayTimestamps(dateToday, -7).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, -6).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, -5).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, -4).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, -3).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, -2).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, -1).nameOfMonthShort,
                GetFirstAndLastDayTimestamps(dateToday, 0).nameOfMonthShort,

            ],
            value: [
                thatMonth_7,
                thatMonth_6,
                thatMonth_5,
                thatMonth_4,
                thatMonth_3,
                thatMonth_2,
                thatMonth_1,
                thatMonth,
            ]
        })
    }, [thatMonth, thatMonth_1, thatMonth_2, thatMonth_3, thatMonth_4, thatMonth_5, thatMonth_6, thatMonth_7])




    return (
        <>
            {barData ?
                <GraficOfBar barData={barData} />
                : ''}
        </>
    )
}

export default FinancesEntracesGrafic