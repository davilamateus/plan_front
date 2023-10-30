import React from 'react'
import TitleOfSession from '../../communs/titleOfSession'
import { Line } from 'react-chartjs-2'
import './stype.scss';


interface type {
    values: number[]
}
const ExchangeHistoric = ({ values }: type) => {


    const data = {
        labels: ["-6d", "-5d", "-4d", "-3d", "-2d", '-1d', 'Today'],
        datasets: [
            {
                data: values.length > 0 ? values : [3.2, 3.5, 3.2, 3.5, 3.5, 3.2, 3.4],
                fill: false,
                borderColor: values.length > 0 ? values[5] < values[6] ? ' #FA385F' : '#6AD9A8' : '#dfdfdf',
                pointRadius: 3,
                pointBackgroundColor: '#6AD9A8',
                borderWidth: 4,
                tension: 0.4,
                backgroundColor: 'rgba(106,217,168,0.03323266806722693)'
            },

        ]
    };

    const options = {

        plugins: {
            labels: {
                display: false,
            },
            legend: {
                display: false,
            },

        },
        scales: {
            y: {
                display: true,


            },
            x: {
                display: true,

            }


        },
    }







    return (
        <div>
            <TitleOfSession title='Historic' />
            <div className='box web' style={{ width: 'auto', padding: '16px' }}>
                <Line height={100} data={data} options={options} />
            </div>
            <div className='box mobile' style={{ width: 'auto', padding: '16px' }}>
                <Line height={300} data={data} options={options} />
            </div>
        </div>
    );
}


export default ExchangeHistoric