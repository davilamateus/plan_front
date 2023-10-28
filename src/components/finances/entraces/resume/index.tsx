import React, { useEffect, useState } from 'react';
import FinanceSimpleResult from '../../comuns/resume';
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import './style.scss'
import useGetEntracesApi from '../../../../hooks/finances/entraces/useGetEntraces';
import useGetTripGoals from '../../../../store/hooks/finances/useGetTripGoals';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import { IFinancesEntraces } from '../../../../types/finances/IEntraces';
import TitleOfSession from '../../../communs/titleOfComponent';
import DoughnutHalf from '../../comuns/doughnutHalf';

const FinancesResume = () => {

    const [entraces, setEntraces] = useState<IFinancesExpenseList[]>([]);
    const [domestic, setDomestic] = useState<IFinancesExpenseList[]>([]);
    const [trip, setTrip] = useState<IFinancesExpenseList[]>([]);
    const [entraceTotalThatMonth, setEntraceTotalThatMonth] = useState<number>(0);
    const [domesticTotalThatMonth, setDomesticTotalThatMonth] = useState<number>(0);
    const [tripTotalThatMonth, setTripTotalThatMonth] = useState<number>(0);
    const [profit, setProfit] = useState<number>(0);
    const monthName = GetTimestampInfomartions(new Date().getTime(), 0).nameOfMonth;


    const UseGetEntraces = useGetEntraces();
    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetTripGoals = useGetTripGoals();

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
            entraces.map((item: IFinancesEntraces) => {
                if (item.date >= GetTimestampInfomartions(new Date().getTime(), 0).firstDay)
                    total = total + item.value;
            })
            setEntraceTotalThatMonth(total);
        }
    }, [entraces]);





    // Getting Domestic
    useEffect(() => {
        setDomestic(UseGetDomesticGoals)
    }, [UseGetDomesticGoals]);







    // Getting Domestic Total Value
    useEffect(() => {
        if (domestic.length > 0) {
            let total = 0
            domestic.map((expense: IFinancesExpenseList) => {
                total = total + expense.value;
            })
            setDomesticTotalThatMonth(total);
        }
    }, [domestic]);









    // Getting trip
    useEffect(() => {
        if (UseGetTripGoals === false) {
        } else {

            if (UseGetTripGoals.length > 0) {
                let array: IFinancesExpenseList[] = [];
                UseGetTripGoals.map((goals: IFinancesGoalsList) => {
                    if (goals.itens.length > 0) {
                        goals.itens.map((tripExpense: IFinancesExpenseList) => {
                            if (tripExpense) {
                                if (tripExpense.date >= GetTimestampInfomartions(new Date().getTime(), 0).firstDay && tripExpense.date) {
                                    array.push(tripExpense)
                                }
                            }
                        })
                    }
                    else {
                        setTripTotalThatMonth(0)

                    }

                })
                setTrip(array);

            }

        }

    }, [UseGetTripGoals])





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

    useEffect(() => {
        if (entraceTotalThatMonth !== null && domesticTotalThatMonth !== null && tripTotalThatMonth !== null) {
            setProfit(entraceTotalThatMonth - domesticTotalThatMonth - tripTotalThatMonth);
        }
    }, [entraceTotalThatMonth, domesticTotalThatMonth, tripTotalThatMonth]);




    return (
        <div className='finances-resume'>
            <TitleOfSession title={monthName + ' Resume'} />
            <div className="finance-resume-components">
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
                        value={profit}
                    />
                </div>
                <DoughnutHalf
                    labels={domesticTotalThatMonth > 0 ? ['Total Domestic costs', 'Total Trip Costs', profit > 0 ? 'Total Profit' : ''] : []}
                    values={domesticTotalThatMonth > 0 ? [domesticTotalThatMonth, tripTotalThatMonth, profit > 0 ? profit : 0] : []}
                    colors={domesticTotalThatMonth > 0 ? ['#6958A3', '#F1F180', profit > 0 ? '#6AD9A8' : ''] : []}
                    porcent={profit > 0 ? (domesticTotalThatMonth + tripTotalThatMonth) * 100 / entraceTotalThatMonth : -(domesticTotalThatMonth + tripTotalThatMonth) * 100 / entraceTotalThatMonth} />
            </div>
        </div>)
}

export default FinancesResume;