import React, { useEffect, useState } from 'react';
import FinanceSimpleResult from '../../comuns/financeSimpleResult';
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import './style.scss'
import useGetEntracesApi from '../../../../hooks/finances/entraces/useGetEntraces';
import useGetTripGoals from '../../../../store/hooks/finances/useGetTripGoals';
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import { IFinancesEntraces } from '../../../../types/finances/IEntraces';

const FinancesResume = () => {

    const [entraces, setEntraces] = useState<IFinancesExpenseList[]>([]);
    const [domestic, setDomestic] = useState<IFinancesExpenseList[]>([]);
    const [trip, setTrip] = useState<IFinancesExpenseList[]>([]);
    const [entraceTotalThatMonth, setEntraceTotalThatMonth] = useState<number>(0);
    const [domesticTotalThatMonth, setDomesticTotalThatMonth] = useState<number>(0);
    const [tripTotalThatMonth, setTripTotalThatMonth] = useState<number>(0);
    const monthName = GetTimestampInfomartions(new Date().getTime(), 0).nameOfMonth;


    const UseGetEntraces = useGetEntraces();
    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetTripGoals = useGetTripGoals();

    const UseGetEntracesApi = useGetEntracesApi();
    const UseGetGoalsApi = useGetGoalsApi();




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
        if (UseGetDomesticGoals == false) {
            UseGetGoalsApi(GetTimestampInfomartions(new Date().getTime(), 0).firstDay, GetTimestampInfomartions(new Date().getTime(), 0).lastDay, 1, true);

        } else {
            setDomestic(UseGetDomesticGoals)
        }


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
            UseGetGoalsApi(0, 1000000000000000000, 2, true);

        } else {
            let array: IFinancesExpenseList[] = [];

            if (UseGetTripGoals.length > 0) {
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


                })

            }
            setTrip(array);

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




    return (
        <div className='finances-resume'>
            <h3 className='sub-title'>{monthName} Resume</h3>
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