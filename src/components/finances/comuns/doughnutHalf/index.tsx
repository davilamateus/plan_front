import { Doughnut } from "react-chartjs-2";
import "./style.scss";

interface types {
    labels?: string[];
    values?: number[];
    colors?: string[];
    porcent: number;
}
const DoughnutHalf = ({ labels, values, colors, porcent }: types) => {
    const data = {
        labels: labels ? labels : ["Exemplo, Exemplo , Exemplo"],
        datasets: [
            {
                data: values && values.length > 0 ? values : [2000, 1000, 3000],
                backgroundColor: colors && colors.length > 0 ? colors : ["#dfdfdf", "#c1c1c1", "#edf0eeed"],
                borderWidth: 2,
                borderRadius: 2,
                spacing: 2,
                weight: 1
            }
        ]
    };

    const options = {
        cutout: 84,
        circumference: 180,
        rotation: -90,
        plugins: {
            legend: {
                display: false
            }
        }
    };
    const formatPercentage = (value: number) => {
        if (isNaN(value) || !isFinite(value)) {
            return "0%";
        }
        return `${value}%`;
    };

    return (
        <div
            className="doughnut-half"
            style={{ width: "192px" }}>
            <Doughnut
                width={"212px"}
                height={"212px"}
                data={data}
                options={options}
            />
            <div className="porcents">
                <h4>{formatPercentage(porcent)}</h4>
            </div>
        </div>
    );
};

export default DoughnutHalf;
