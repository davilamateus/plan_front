import { useEffect, useState } from "react";
import { IFinancesGoalsList } from "../../../../types/finances/IGoals";
import useGetTripGoals from "../../../../store/hooks/finances/useGetTripGoals";
import FinanceSimpleResult from "../../comuns/resume";
import useGetAvatar from "../../../../store/hooks/avatar/useGetAvatar";
import useGetCashInHand from "../../../../store/hooks/finances/useGetCashInHand";
import useGetCashInHandApi from "../../../../hooks/finances/cashInHand/useGetCashInHand";
import './style.scss';
import FormartMoney from "../../../../functions/formartMoney/formartMoney";
import { IFinancesExpenseList } from "../../../../types/finances/IExpense";
import TitleOfSession from "../../../communs/titleOfComponent";
import DoughnutHalf from "../../comuns/doughnutHalf";

const TripResume = () => {



    const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);
    const [totalGoals, setTotalGoals] = useState(0);
    const [totalPaid, setTotalPaid] = useState(0);
    const [totalCash, setTotalCash] = useState(0);
    const [whenCalc, setWhenCalc] = useState(0);




    const UseGetTripGoals = useGetTripGoals();
    const UseGetAvatar = useGetAvatar();


    useEffect(() => {
        if (UseGetTripGoals !== false) {
            setGoals(UseGetTripGoals);
        }
    }, [UseGetTripGoals]);



    const UseGetCashInHand = useGetCashInHand();
    const UseGetCachInHandApi = useGetCashInHandApi();

    useEffect(() => {
        if (UseGetCashInHand !== false) {
            if (UseGetCashInHand > 0) {
                setTotalCash(UseGetCashInHand);

            }
        } else {
            UseGetCachInHandApi();
        }
    }, [UseGetCashInHand]);

    /*
        */

    useEffect(() => {
        if (UseGetAvatar.when > 0) {
            setWhenCalc(monthsCalc(new Date().getTime(), UseGetAvatar.when))
        }

    }, [UseGetAvatar])



    useEffect(() => {
        let total = 0;
        let totalPaid = 0
        if (goals.length > 0) {
            goals.map((goal: IFinancesGoalsList) => {
                if (goal.value !== null) {
                    total = total + goal.value

                }
                if (goal.itens.length > 0) {
                    goal.itens.map((expense: IFinancesExpenseList) => {
                        totalPaid = totalPaid + expense.value


                    })
                }
            })
        }
        setTotalGoals(total);
        setTotalPaid(totalPaid);

    }, [goals])


    function monthsCalc(timestamp1: number, timestamp2: number): number {
        const data1 = new Date(timestamp1);
        const data2 = new Date(timestamp2);

        const calc = (data2.getFullYear() - data1.getFullYear()) * 12 +
            (data2.getMonth() - data1.getMonth());

        return calc;
    }



    return (
        <div>
            <TitleOfSession title='Resume' />
            <div className="trip-resume">
                <div className="trip-resume-results">
                    <FinanceSimpleResult
                        title='Cost total planning for trip'
                        value={totalGoals}
                    />
                    <FinanceSimpleResult
                        title='Total trip paid'
                        value={totalPaid}
                    />
                    <FinanceSimpleResult
                        title='Fault to pay for tripping'
                        value={totalGoals - totalPaid}
                    />
                    <FinanceSimpleResult
                        title='Cash in cash'
                        value={totalCash}
                    />
                    <FinanceSimpleResult
                        title='Cash - missing for trip'
                        value={totalGoals - totalCash - totalPaid}
                    />
                    <div className='finance-simple-result'>
                        <span>Join by month until the trip</span>
                        <span className="finance-simple-result-value">{`${(totalGoals - totalCash - totalPaid) / whenCalc > 0 ?

                            FormartMoney(+((((totalGoals - totalCash - totalPaid) / whenCalc)).toFixed(0))) + ' durin ' + whenCalc + (whenCalc > 1 ? ' months.' : ' month.')

                            : FormartMoney(0)}`}</span>
                    </div>

                </div>
                <DoughnutHalf labels={['Total trip paid', 'Cash in cash', 'Cash - missing for trip']} values={[totalPaid, totalCash, (totalGoals - totalCash - totalPaid)]} colors={['#6AD9A8', '#F1F180', '#edf0eeed']} porcent={(totalCash + totalPaid) * 100 / totalGoals} />

            </div>
        </div>

    )
}

export default TripResume;