import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, Tooltip, registerables } from "chart.js";
import IBarData from "../../../../types/finances/entraces/IBarData";
import { formartMoney } from "../../../../functions/formartMoney/formartMoney";
Chart.register(...registerables);

interface type {
    barData: IBarData;
}

const GraficOfBar = ({ barData }: type) => {
    console.log(barData);

    const chartContainerRef = React.useRef<HTMLDivElement>(null);

    const data = {
        labels: barData.title.length > 0 ? barData.title.reverse() : ["", "", "", "", "", "", "", "", "", ""],
        datasets: [
            {
                label: "Value",
                backgroundColor: barData.title.length > 0 ? "#6AD8A7" : "#EEEEEE",
                borderColor: "#fff",
                borderWidth: 1,
                borderRadius: 8,
                hoverBackgroundColor: "#6Ae9A8",
                hoverBorderColor: "rgba(75,192,192,1)",
                data: barData.value.length > 0 ? barData.value.reverse() : [100000, 200000, 300000, 100000, 400000, 200000, 10000, 400000, 400000, 200000, 100000, 40000, 20000]
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: {
                    display: true,
                    beginAtZero: false,
                    callback: function (value: string | number, index: any, values: any) {
                        const numberValue = typeof value === "string" ? parseInt(value) : value;
                        if (numberValue >= 1000) {
                            return formartMoney(numberValue);
                        } else {
                            return value;
                        }
                    }
                },
                gridLines: {
                    show: true
                },
                beginAtZero: true,
                grid: {
                    display: false,
                    borderColor: "rgba(0, 0, 0, 0)"
                }
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                    borderColor: "rgba(0, 0, 0, 0)"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true, // Ativa os tooltips
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || "";
                        if (label) {
                            label += ": ";
                        }
                        if (context.parsed.y !== null) {
                            label += formartMoney(context.parsed.y);
                        }
                        return label;
                    }
                }
            }
        },
        responsive: true,
        height: "400px"
    };

    return (
        <div
            ref={chartContainerRef}
            className="box"
            style={{ width: "auto", height: "230px", padding: "16px" }}>
            <Bar
                data={data}
                options={options}
            />
        </div>
    );
};

export default GraficOfBar;
