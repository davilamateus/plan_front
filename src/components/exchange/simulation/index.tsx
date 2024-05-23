import { useState } from "react";
import TitleOfSession from "../../communs/titleOfSession";
import InputMoney from "../../communs/inputs/money";
import "./style.scss";
import { useGetTrip } from "../../../store/hooks/trip/useGetTrip";
import ExchangeCard from "./card";

interface types {
    exchangeToday?: number;
    currency_local?: string;
    currency_trip?: string;
}

const ExchangeSimulation = ({ exchangeToday = 1 }: types) => {
    const UseGetTrip = useGetTrip();

    const [input, setInput] = useState(100000);
    const [type, setType] = useState(1);
    return (
        <div>
            <TitleOfSession title={"Simulation"} />
            <div className="simulation">
                <div className="simulation-input box">
                    <div className="simulation-type">
                        <h4>Type of exchange</h4>
                        <div>
                            <button
                                onClick={() => {
                                    setType(1);
                                }}
                                className={type === 1 ? "selected" : ""}>
                                {UseGetTrip.currentCurrency ? (
                                    <>
                                        {UseGetTrip.currentCurrency} to {UseGetTrip.tripCurrency}
                                    </>
                                ) : (
                                    <img src="./../../../../gifs/btnloadin.gif" />
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    setType(2);
                                }}
                                className={type === 2 ? "selected" : ""}>
                                {UseGetTrip.currentCurrency ? (
                                    <>
                                        {UseGetTrip.tripCurrency} to {UseGetTrip.currentCurrency}
                                    </>
                                ) : (
                                    <img src="./../../../../gifs/btnloadin.gif" />
                                )}{" "}
                            </button>
                        </div>
                    </div>
                    <InputMoney
                        title="Value"
                        input={input}
                        setInput={setInput}
                    />
                </div>
                <div className="simulation-cards">
                    <ExchangeCard
                        img={"paypal"}
                        tax={0.87}
                        fixedTax={0}
                        type={type}
                        input={input}
                        exchangeToday={exchangeToday}
                        currencyLocal={UseGetTrip.currentCurrency}
                        currencyTrip={UseGetTrip.tripCurrency}
                    />
                    <ExchangeCard
                        img={"remessa"}
                        tax={0.91}
                        fixedTax={1.5}
                        type={type}
                        input={input}
                        exchangeToday={exchangeToday}
                        currencyLocal={UseGetTrip.currentCurrency}
                        currencyTrip={UseGetTrip.tripCurrency}
                    />
                    <ExchangeCard
                        img={"wise"}
                        tax={0.95}
                        fixedTax={0}
                        type={type}
                        input={input}
                        exchangeToday={exchangeToday}
                        currencyLocal={UseGetTrip.currentCurrency}
                        currencyTrip={UseGetTrip.tripCurrency}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExchangeSimulation;
