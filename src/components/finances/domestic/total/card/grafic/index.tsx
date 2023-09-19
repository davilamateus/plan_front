import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import useGetDomesticGoals from '../../../../../../store/hooks/finances/useGetDomesticGoals';
import { IFinancesGoalsList } from '../../../../../../types/finances/IGoals';



const DomesticTotalCardGrafic = () => {


    const UseGetDomesticGoals = useGetDomesticGoals();
    const [colors, setColors] = useState<string[]>([])
    const [labels, setLabels] = useState<string[]>([])
    const [eachGoalValue, setEachGoalValue] = useState<number[]>([])



    useEffect(() => {
        let totalPlanning = 0;
        let totalEachGoal: number[] = [];
        let takingColors: string[] = [];
        let takingLabels: string[] = [];

        let totalPaid = 0
        if (UseGetDomesticGoals.length > 0) {

            UseGetDomesticGoals.map((goal: IFinancesGoalsList) => {
                totalPlanning = goal.value + totalPlanning;
                takingColors.push(goal.color);
                totalEachGoal.push(goal.valueItens);
                takingLabels.push(goal.title);
                goal.itens.map((item) => {
                    if (item.value) {
                        totalPaid = totalPaid + item.value

                    }
                })

            })

            if (totalPaid < totalPlanning) {

                totalEachGoal.push(totalPlanning - totalPaid);
                takingColors.push('#f0f0f0');
                takingLabels.push('Rest');
            }

            setEachGoalValue(totalEachGoal);
            setColors(takingColors);
            setLabels(takingLabels);

        }

    }, [UseGetDomesticGoals])



    const data = {
        labels: labels,
        datasets: [{
            data: eachGoalValue,
            backgroundColor: colors,
            borderWidth: 0,
            offset: 0,
            weight: 20.1,
        }],
    };


    const options = {
        rotation: -90,
        cutoutPercentage: 100,
        plugins: {
            legend: {
                display: false, // Oculta a legenda
            },

            tooltip: {
            },
        }



    }


    return (
        <div className='grafic-domestic-total-box'>
            <div className='grafic-domestic-total-grafic' style={{ width: '196px' }}> {/* Defina largura e altura como desejado */}
                <Doughnut width={48} height={48} data={data} options={options} />
            </div>

        </div>
    );

}

export default DomesticTotalCardGrafic