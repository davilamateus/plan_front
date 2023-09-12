import React, { useEffect, useRef, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js/auto';
import './style.scss'
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
        maintainAspectRatio: false, // Desativa o aspectRatio para tornar o gráfico responsivo
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false, // Oculta as linhas verticais (grades do eixo x)
                    borderColor: 'rgba(0, 0, 0, 0)', // Define a cor da borda como transparente
                },
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false, // Oculta as linhas verticais (grades do eixo x)
                    borderColor: 'rgba(0, 0, 0, 0)', // Define a cor da borda como transparente
                },
            },

        },
        plugins: {
            legend: {
                display: false, // Oculta a legenda
            },
        }
        ,

        responsive: true,
        height: '400px', // Define a altura do canvas em pixels

    }


    return (
        <div className='grafic-entraces-box' style={{ width: '100%', height: '280px' }}> {/* Defina largura e altura como desejado */}
            <Bar data={data} options={options} />
        </div>
    );
}

export default GraficOfBar;
