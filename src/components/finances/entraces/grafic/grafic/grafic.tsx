import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './style.scss';
import IBarData from '../../../../../types/finances/entraces/IBarData';
Chart.register(...registerables);


interface type {
    barData: IBarData
}

function GraficOfBar({ barData }: type) {


    const data = {
        labels: barData.title,
        datasets: [
            {
                label: 'Value',
                backgroundColor: barData.loading ? '#EEEEEE' : '#6AD8A7',
                borderColor: '#fff',
                borderWidth: 1,
                borderRadius: 8,
                hoverBackgroundColor: '#6Ae9A8',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: barData.loading ? [1000, 2000, 3000, 1000, 4000, 2000, 1000, 4000, 4000, 2000, 1000, 4000, 2000] : barData.value,
                borderSkipped: false

            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                    borderColor: 'rgba(0, 0, 0, 0)',
                },
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                    borderColor: 'rgba(0, 0, 0, 0)',
                },
            },

        },
        barThickness: 16,
        plugins: {
            legend: {
                display: false,
            },
        }
        ,

        responsive: true,
        height: '400px',

    }


    return (
        <div className='box' style={{ width: 'auto', height: '230px', padding: '16px' }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default GraficOfBar;
