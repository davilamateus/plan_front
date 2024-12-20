import { Doughnut } from "react-chartjs-2";
import Skeleton from "react-loading-skeleton";
import "./style.scss";

interface types {
    labels?: string[];
    values?: number[];
    colors?: string[];
    loaded: boolean;
    porcent: number;
}

const DoughnutHalf = ({ labels, values, colors, porcent, loaded }: types) => {
    let data = {
        labels: labels ? labels : ["Exemplo, Exemplo , Exemplo"],
        datasets: [
            {
                data:
                    values && values.length > 0
                        ? values[0] === 0 && values[1] === 0 && values[2] === 0
                            ? [1]
                            : values
                        : [2000, 1000, 3000],
                backgroundColor: values && values[0] === 0 && values[1] === 0 && values[2] === 0 ? ["#edf0eeed"] : colors,
                borderWidth: 2,
                borderRadius: 2,
                spacing: 2,
                weight: 1
            }
        ]
    };

    console.log(colors);

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
                {loaded ? <h4>{formatPercentage(porcent)}</h4> : <Skeleton style={{ width: "68px", height: "48px" }} />}
            </div>
        </div>
    );
};

export default DoughnutHalf;
