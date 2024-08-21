import React, { useContext, useEffect, useState } from "react";
import ExchangeHistoric from "../historic";
import ExchangeSimulation from "../simulation";
import "./style.scss";
import { useGetExchange } from "../../../requests/useCityRequest";
import { UseTripContext } from "../../../context/useTripContext";

const ExchangeMain = () => {
    const [data, setData] = useState<number[]>([]);
    const trip = useContext(UseTripContext);

    const UseGetExchange = useGetExchange();
    useEffect(() => {
        if (trip?.state.loaded) {
            UseGetExchange(trip.state.tripCurrency, trip.state.currentCurrency).then((data: any) => {
                setData(data.data);
            });
        }
    }, [trip]);

    return (
        <div className="exchange-page">
            <ExchangeHistoric data={data} />
            <ExchangeSimulation exchangeToday={data[data.length - 1]} />
        </div>
    );
};

export default ExchangeMain;
