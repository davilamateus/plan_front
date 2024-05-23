import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import './style.scss'


interface type {
    value: number;
    color: string;
    icon: number;
}
const TripGoalsCicle = ({ value, color, icon }: type) => {

    const [rest, setRest] = useState(0)

    useEffect(() => {
        if (value > 100) {
            setRest(0)
        } else {
            setRest(value - 100)
        }
    }, [value])

    const data = {
        labels: [
            ''
        ],
        datasets: [{
            label: '',
            data: [value, rest],
            backgroundColor: [
                color,
                '#f0f0f0'
            ],
            borderWidth: 0,
            offset: 0,
            weight: 0.1,


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
                enabled: false, // Desativar a exibição da tooltip no hover
            },
        }



    }


    return (
        <div className='trip-domestic-grafic-box'>
            <div className='trip-domestic-grafic' style={{ height: '48px' }}> {/* Defina largura e altura como desejado */}
                <Doughnut width={92} height={92} data={data} options={options} />
            </div>
            <div className='trip-domestic-icon' >
                <img src={`./../../../../../../../icons/categories/${icon}.svg`} alt="" />
            </div>
        </div>
    );

}

export default TripGoalsCicle