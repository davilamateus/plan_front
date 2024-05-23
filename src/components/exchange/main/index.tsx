import React, { useEffect, useState } from "react";
import ExchangeHistoric from "../historic";
import ExchangeSimulation from "../simulation";
import "./style.scss";
import { useGetExchangeApi } from "../../../hooks/exchange/useGetExange";
import { useGetTrip } from "../../../store/hooks/trip/useGetTrip";

const ExchangeMain = () => {
    const [data, setData] = useState<number[]>([]);

    const UseGetTrip = useGetTrip();
    const UseGetExchange = useGetExchangeApi();
    useEffect(() => {
        if (UseGetTrip.tripCurrency) {
            UseGetExchange(UseGetTrip.tripCurrency, UseGetTrip.currentCurrency).then((data) => {
                setData(data.data);
            });
        }
    }, [UseGetTrip]);

    return (
        <div className="exchange-page">
            <ExchangeHistoric data={data} />
            <ExchangeSimulation exchangeToday={data[data.length - 1]} />
        </div>
    );
};

export default ExchangeMain;
