import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useGetTrip } from "../../../store/hooks/trip/useGetTrip";
import { useGetExchangeApi } from "../../../hooks/exchange/useGetExange";
import Skeleton from "react-loading-skeleton";
import "./stype.scss";
import TitleOfComponentOnDashnboard from "../../communs/titleOfComponentOnDashnboard";

const ExchangeDashboard = () => {
    const [dataValue, setDataValue] = useState<number[]>([]);
    const [loaded, setLoaded] = useState(false);

    const UseGetTrip = useGetTrip();
    const UseGetExchange = useGetExchangeApi();

    useEffect(() => {
        if (UseGetTrip.currentCurrency) {
            UseGetExchange(UseGetTrip.tripCurrency, UseGetTrip.currentCurrency)
                .then((data) => {
                    setDataValue(data.data);
                    setLoaded(true);
                })
                .catch((error) => console.log(error));
        }
    }, [UseGetTrip]);

    const data = {
        labels: ["-6d", "-5d", "-4d", "-3d", "-2d", "-1d", "Today"],
        datasets: [
            {
                data: dataValue.length > 0 ? dataValue : [1, 1, 1, 1, 1, 1, 1],
                fill: false,
                borderColor: dataValue.length > 0 ? (dataValue[5] < dataValue[6] ? " #FA385F" : "#6AD9A8") : "#dfdfdf",
                pointRadius: 1.3,
                borderWidth: 3,
                tension: 0.4
            }
        ]
    };

    const options = {
        plugins: {
            labels: {
                display: false
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        },
        responsive: true
    };

    return (
        <div className="exchange-dashboard">
            <TitleOfComponentOnDashnboard
                title="Exchange"
                link="/exchange"
            />
            <div className="box">
                <div style={{ width: "100%", height: "130px" }}>
                    <Line
                        style={{ position: "absolute", marginTop: "3%" }}
                        height={60}
                        data={data}
                        options={options}
                    />
                </div>
                <div className="exchange-dashboard-texts">
                    {loaded ? (
                        <div>
                            {UseGetTrip.tripCurrency}{" "}
                            <h4
                                className="exchange-value"
                                style={{ color: dataValue.length > 0 ? (dataValue[5] < dataValue[6] ? " #FA385F" : "#6AD9A8") : "#dfdfdf" }}>
                                {dataValue[0]}
                            </h4>
                        </div>
                    ) : (
                        <Skeleton style={{ width: "124px", height: "18pt" }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExchangeDashboard;
