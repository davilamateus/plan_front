import React, { useEffect, useState } from 'react';
import FinanceSimpleResult from '../../comuns/FinanceSimpleResult';
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import useGetDomesticCosts from '../../../../store/hooks/finances/useGetDomesticCosts';
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import useGetTripCosts from '../../../../store/hooks/finances/useGetTripCosts';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import './style.scss'
import useGetEntracesApi from '../../../../hooks/finances/entraces/useGetEntraces';
import useGetExpenseApi from '../../../../hooks/finances/expenses/useGetExpenses';

const FinancesResume = () => {

    const [entraces, setEntraces] = useState<IFinancesExpenseList[]>([]);
    const [domestic, setDomestic] = useState<IFinancesExpenseList[]>([]);
    const [trip, setTrip] = useState<IFinancesExpenseList[]>([]);
    const [entraceTotalThatMonth, setEntraceTotalThatMonth] = useState<number>(0);
    const [domesticTotalThatMonth, setDomesticTotalThatMonth] = useState<number>(0);
    const [tripTotalThatMonth, setTripTotalThatMonth] = useState<number>(0);
    const monthName = GetTimestampInfomartions(new Date().getTime(), 0).nameOfMonth;


    const UseGetEntraces = useGetEntraces();
    const UseGetDomesticCosts = useGetDomesticCosts();
    const UseGetTripCosts = useGetTripCosts();

    const UseGetExpenses = useGetExpenseApi();
    const UseGetEntracesApi = useGetEntracesApi();


    // Getting Entraces
    useEffect(() => {
        if (UseGetEntraces.entraces === false) {
            UseGetEntracesApi(0, 1000000000000000000, true);
        } else {
            setEntraces(UseGetEntraces);
        }
    }, [UseGetEntraces]);

    // Getting Total Entraces Value

    useEffect(() => {
        if (entraces.length > 0) {
            let total = 0;
            entraces.map((item) => {
                if (item.date >= GetTimestampInfomartions(new Date().getTime(), 0).firstDay)
                    total = total + item.value;
            })
            setEntraceTotalThatMonth(total);
        }
    }, [entraces]);

    // Getting Domestic
    useEffect(() => {
        if (UseGetDomesticCosts.domesticCosts === false) {
            UseGetExpenses(0, 1000000000000000000, 1, true);
        } else {
            setDomestic(UseGetDomesticCosts);

        }
    }, [UseGetDomesticCosts])

    // Getting Domestic Total Value
    useEffect(() => {
        if (domestic.length > 0) {
            let total = 0
            domestic.map((item) => {
                if (item.date >= GetTimestampInfomartions(new Date().getTime(), 0).firstDay && item.date <= GetTimestampInfomartions(new Date().getTime(), 0).lastDay)
                    total = total + item.value;
            })
            setDomesticTotalThatMonth(total);
        }
    }, [domestic]);




    // Getting Trips
    useEffect(() => {
        if (UseGetTripCosts.tripCosts === false) {
            UseGetExpenses(0, 1000000000000000000, 2, true);
        } else {
            setTrip(UseGetTripCosts);

        }

    }, [UseGetTripCosts]);




    // Getting Trip Total Value
    useEffect(() => {
        if (trip.length > 0) {
            let total = 0;
            trip.map((item) => {
                if (item.date >= GetTimestampInfomartions(new Date().getTime(), 0).firstDay && item.date <= GetTimestampInfomartions(new Date().getTime(), 0).lastDay)
                    total = total + item.value;
            })
            setTripTotalThatMonth(total);
        }
    }, [trip]);





    return (
        <div className='finances-resume'>
            <h3>{monthName} Resume</h3>
            <div className='finances-resume-cards'>
                <FinanceSimpleResult
                    title={`Total Entraces`}
                    value={entraceTotalThatMonth}
                />
                <FinanceSimpleResult
                    title={`Total Domestic costs`}
                    value={domesticTotalThatMonth}
                />
                <FinanceSimpleResult
                    title={`Total Trip Costs`}
                    value={tripTotalThatMonth}
                />
                <FinanceSimpleResult
                    title={`Total Profit`}
                    value={entraceTotalThatMonth - domesticTotalThatMonth - tripTotalThatMonth}
                />
            </div>
        </div>)
}

export default FinancesResume;