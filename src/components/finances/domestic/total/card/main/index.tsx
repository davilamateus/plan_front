import React, { useEffect, useState } from 'react'
import FinanceSimpleResult from '../../../../comuns/financeSimpleResult';
import { IFinancesGoalsList } from '../../../../../../types/finances/IGoals';
import useGetDomesticGoals from '../../../../../../store/hooks/finances/useGetDomesticGoals';
import DomesticTotalCardGrafic from '../grafic';
import './style.scss';
import TitleOfSession from '../../../../../communs/titleOfSession';



const DomesticTotalCard = () => {

    const UseGetDomesticGoals = useGetDomesticGoals();


    const [paid, setPaid] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(0)
        let totalPlanning = 0
        let totalPaid = 0
        if (UseGetDomesticGoals.length > 0) {
            UseGetDomesticGoals.map((goal: IFinancesGoalsList) => {
                totalPlanning = goal.value + totalPlanning;
                if (goal.itens.length > 0) {
                    goal.itens.map((item) => {
                        if (item?.value) {
                            totalPaid = totalPaid + item.value
                        }

                    })
                }
                setPaid(totalPaid)

            })
            setTotal(totalPlanning)
        }

    }, [UseGetDomesticGoals]);


    return (
        <div className='domestic-total-card'>
            <TitleOfSession title='Total domestic expenses' />
            <div className='domestic-total-card-box'>
                <div className='domestic-total-card-resume'>
                    <FinanceSimpleResult
                        title='Total planning'
                        value={total}
                    />
                    <FinanceSimpleResult
                        title='Paid'
                        value={paid}
                    />
                    <FinanceSimpleResult
                        title='Result'
                        value={total - paid}
                    />
                </div>
                <DomesticTotalCardGrafic
                />
            </div>
        </div>)
}

export default DomesticTotalCard