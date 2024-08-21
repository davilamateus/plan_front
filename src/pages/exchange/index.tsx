import { useContext, useEffect, useState } from "react";
import { UseTripContext } from "../../context/useTripContext";
import { useGetExchange } from "../../requests/useCityRequest";
import { UseTitleContext } from "../../context/useTitleContext";
import ExchangeHistoric from "../../components/exchange/historic";
import ExchangeSimulation from "../../components/exchange/simulation";

const PageExchange = () => {
    const [data, setData] = useState<number[]>([]);

    const title = useContext(UseTitleContext);
    title.setTitle("Exchange");

    const trip = useContext(UseTripContext);
    const UseGetExchange = useGetExchange();

    useEffect(() => {
        if (trip?.state.tripCurrency) {
            UseGetExchange(trip.state.tripCurrency, trip.state.currentCurrency).then((data: any) => {
                setData(data.data);
            });
        }
    }, [trip]);

    return (
        <div className="exchange-page">
            <ExchangeHistoric data={data} />
            <ExchangeSimulation
                exchangeToday={data[data.length - 1]}
                currentCurrency={trip?.state.currentCurrency}
                tripCurrency={trip?.state.tripCurrency}
            />
        </div>
    );
};

export default PageExchange;
