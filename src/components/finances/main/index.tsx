import React, { useEffect, useState } from 'react'
import ButtonAdd from '../../communs/buttons/add'
import BoxFullpage from '../../communs/boxFullpage';
import ModalAddFinances from '../modalAdd/main';
import EntracesMain from '../entraces/main';
import IFinancesExpense from '../../../types/finances/IExpense';
import firstAndLastDayOfTheMonth from '../../../functions/date/firstAndLastDayOfTheMonth';
import useGetExpenseApi from '../../../hooks/finances/useGetExpenses';
import useGetDomesticCosts from '../../../store/hooks/finances/useGetDomesticCosts';
import useGetEntraces from '../../../store/hooks/finances/useGetEntraces';
import useGetTripCosts from '../../../store/hooks/finances/useGetTripCosts';
import useSetDomesticCosts from '../../../store/hooks/finances/useSetDomesticCosts';
import useSetEntraces from '../../../store/hooks/finances/useSetEntraces';
import useSetTripCosts from '../../../store/hooks/finances/useSetTripCosts';
import getMonthNameFromTimestamp from './../../../functions/date/getMonthNameFromTimestamp'
import DomesticCostsStates from '../../../store/modules/finances/reducerDomesticCosts';
import DomesticMain from '../domestic/main';

const MainFinances = () => {
    const [modalAdd, setModalAdd] = useState(false);

    const [entraces, setEntraces] = useState<IFinancesExpense[]>([])
    const [domesticCosts, setDomesticCosts] = useState<IFinancesExpense[]>([]);
    const [tripCosts, setTripCosts] = useState<IFinancesExpense[]>([]);
    const [monthName, setMonthName] = useState(getMonthNameFromTimestamp(new Date().getTime()));
    const [entraceTotalThatMonth, setEntraceTotalThatMonth] = useState<number>(0);
    const [domesticTotalThatMonth, setDomesticTotalThatMonth] = useState<number>(0);
    const [tripTotalThatMonth, setTripTotalThatMonth] = useState<number>(0);



    const UseGetEntraces = useGetEntraces();
    const UseGetDomesticCosts = useGetDomesticCosts();
    const UseGetTrioCosts = useGetTripCosts();

    const UseGetEntracesApi = useGetExpenseApi();
    const UseSetEntraces = useSetEntraces();





    useEffect(() => {
        if (UseGetEntraces.entraces === false) {
            UseGetEntracesApi(0, 1000000000000000000, 1).then((data: any) => {
                UseSetEntraces(data.data)
            });
        } else {
            setEntraces(UseGetEntraces);

        }
    }, [UseGetEntraces]);

    useEffect(() => {
        if (UseGetDomesticCosts.domesticCosts === false) {
            UseGetEntracesApi(0, 1000000000000000000, 2).then((data: any) => {
                setDomesticCosts(data.data)
            });
        } else {
            setDomesticCosts(UseGetDomesticCosts);

        }
    }, [UseGetDomesticCosts])





    useEffect(() => {
        if (UseGetTrioCosts.tripCosts === false) {
            UseGetEntracesApi(0, 1000000000000000000, 3).then((data: any) => {
                setTripCosts(data.data)
            });
        } else {
            setDomesticCosts(UseGetTrioCosts);

        }

    }, [UseGetTrioCosts])



    useEffect(() => {
        if (entraces.length > 0) {
            let total = 0
            entraces.map((item) => {
                if (item.date >= firstAndLastDayOfTheMonth(new Date().getTime(), 0).firstDay)
                    total = total + item.value;
            })
            setEntraceTotalThatMonth(total)
        }
    }, [entraces])


    useEffect(() => {
        if (domesticCosts.length > 0) {
            let total = 0
            domesticCosts.map((item) => {
                if (item.date >= firstAndLastDayOfTheMonth(new Date().getTime(), 0).firstDay && item.date <= firstAndLastDayOfTheMonth(new Date().getTime(), 0).lastDay)
                    total = total + item.value;
            })
            setDomesticTotalThatMonth(total)
        }
    }, [domesticCosts])


    useEffect(() => {
        if (tripCosts.length > 0) {
            let total = 0
            tripCosts.map((item) => {
                if (item.date >= firstAndLastDayOfTheMonth(new Date().getTime(), 0).firstDay && item.date <= firstAndLastDayOfTheMonth(new Date().getTime(), 0).lastDay)
                    total = total + item.value;
            })
            setTripTotalThatMonth(total)
        }
    }, [tripCosts])

    return (
        <div>
            <ButtonAdd setModal={setModalAdd} />
            <div>
                <EntracesMain
                    entraces={entraces}
                    monthName={monthName}
                    entraceTotalThatMonth={entraceTotalThatMonth}
                    domesticTotalThatMonth={domesticTotalThatMonth}
                    tripTotalThatMonth={tripTotalThatMonth}
                    totalCostsThatMonth={entraceTotalThatMonth - domesticTotalThatMonth - tripTotalThatMonth}
                />
                <DomesticMain

                />
                {modalAdd ?
                    <BoxFullpage
                        setOpened={setModalAdd}
                        content={
                            <ModalAddFinances
                                setOpened={setModalAdd}
                            />}
                    />
                    : ''}
            </div>
        </div>
    )
}

export default MainFinances;