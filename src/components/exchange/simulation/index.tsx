import { useState } from "react";
import TitleOfSession from "../../communs/titleOfSession";
import InputMoney from "../../communs/inputs/money";
import ExchangeCard from "./card";
import "./style.scss";

interface types {
    exchangeToday?: number;
    tripCurrency?: string;
    currentCurrency?: string;
}

const ExchangeSimulation = ({ exchangeToday = 1, tripCurrency, currentCurrency }: types) => {
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
                                {currentCurrency ? (
                                    <>
                                        {currentCurrency} to {tripCurrency}
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
                                {currentCurrency ? (
                                    <>
                                        {tripCurrency} to {currentCurrency}
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
                        currencyLocal={currentCurrency}
                        currencyTrip={tripCurrency}
                    />
                    <ExchangeCard
                        img={"remessa"}
                        tax={0.91}
                        fixedTax={1.5}
                        type={type}
                        input={input}
                        exchangeToday={exchangeToday}
                        currencyLocal={currentCurrency}
                        currencyTrip={tripCurrency}
                    />
                    <ExchangeCard
                        img={"wise"}
                        tax={0.95}
                        fixedTax={0}
                        type={type}
                        input={input}
                        exchangeToday={exchangeToday}
                        currencyLocal={currentCurrency}
                        currencyTrip={tripCurrency}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExchangeSimulation;
