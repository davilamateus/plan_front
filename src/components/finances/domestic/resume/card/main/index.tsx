import React, { useEffect, useState } from 'react'
import FinanceSimpleResult from '../../../../comuns/resume';
import { IFinancesGoalsList } from '../../../../../../types/finances/IGoals';
import useGetDomesticGoals from '../../../../../../store/hooks/finances/useGetDomesticGoals';
import './style.scss';
import TitleOfSession from '../../../../../communs/titleOfComponent';
import DoughnutHalf from '../../../../comuns/doughnutHalf';



const DomesticResume = () => {


    const UseGetDomesticGoals = useGetDomesticGoals();


    const [paid, setPaid] = useState(0);
    const [total, setTotal] = useState(0);
    const [colors, setColors] = useState<string[]>([])



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

    useEffect(() => {
        if (total > 0) {
            setColors(['#FA385F', '#6AD9A8'])
        }
    }, [total])


    return (
        <div className='domestic-total-card'>
            <TitleOfSession title='Resume' />
            <div className='domestic-total-card-box '>
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
                <DoughnutHalf labels={['Paid', 'Result']} values={[paid, (total - paid)]} porcent={(paid * 100) / total} colors={colors} />
            </div>
        </div>)
}

export default DomesticResume