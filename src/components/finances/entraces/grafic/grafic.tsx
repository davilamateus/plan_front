import { useContext, useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { formartMoney } from "../../../../functions/formartMoney/formartMoney";
import { IBarData } from "../../../../types/IFinances";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import { getTimestampInfomartions } from "../../../../functions/date/getTimestampInfomartions";
Chart.register(...registerables);

const GraficOfBar = () => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const finances = useContext(UseFinanceContext);

    const [barData, setBarData] = useState<IBarData>({
        title: [
            getTimestampInfomartions(new Date().getTime(), -11).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -10).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -9).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -8).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -7).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -6).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -5).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -4).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -3).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -2).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), -1).nameOfMonthShort,
            getTimestampInfomartions(new Date().getTime(), 0).nameOfMonthShort
        ],
        value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    });

    useEffect(() => {
        if (finances && finances?.state?.entraces?.length > 0) {
            let newValue = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            finances.state.entraces.map((item) => {
                const calc = new Date().getMonth() - new Date(item.date).getMonth();
                newValue[calc + 1] = newValue[calc + 1] + item.value;
            });
            setBarData((prev) => ({ ...prev, value: newValue }));
        }
    }, [finances]);

    const data = {
        labels: finances ? barData.title : ["", "", "", "", "", "", "", "", "", "", "", "", ""],
        datasets: [
            {
                label: "Value",
                backgroundColor: barData.title.length > 0 ? "#6AD8A7" : "#EEEEEE",
                borderColor: "#fff",
                borderWidth: 1,
                borderRadius: 8,
                hoverBackgroundColor: "#6Ae9A8",
                hoverBorderColor: "rgba(75,192,192,1)",
                data:
                    barData.value.length > 0
                        ? barData.value.reverse()
                        : [100000, 200000, 300000, 100000, 400000, 330000, 10000, 400000, 400000, 200000, 100000, 40000, 20000]
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
                enabled: true,
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
