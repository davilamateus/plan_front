import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './style.scss';
Chart.register(...registerables);

function GraficOfBar({ barData }: any) {

    const data = {
        labels: barData.title,
        datasets: [
            {
                label: 'Value',
                backgroundColor: '#6AD9A8',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 0,
                borderRadius: 4,
                hoverBackgroundColor: '#6Ae9A8',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: barData.value,
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
        <div className='grafic-entraces-box' style={{ width: 'auto', height: '280px' }}>
            <Bar data={data} options={options} />
        </div>
    );
}

export default GraficOfBar;
