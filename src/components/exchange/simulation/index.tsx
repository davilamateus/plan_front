import React, { useState } from 'react'
import TitleOfSession from '../../communs/titleOfSession'
import InputMoney from '../../communs/inputs/money';
import './style.scss';


interface types {
    exchangeToday?: number;
    currency_local?: string;
    currency_trip?: string;
}

const ExchangeSimulation = ({ exchangeToday = 1, currency_local, currency_trip }: types) => {

    const [input, setInput] = useState(100000);
    const [type, setType] = useState(1);
    return (
        <div>
            <TitleOfSession title={'Simulation'} />
            <div className='simulation'>
                <div className='simulation-input box'>
                    <div className="simulation-type">
                        <h4>Type of exchange</h4>
                        <div>
                            <button
                                onClick={() => { setType(1) }}
                                className={type === 1 ? 'selected' : ''}>
                                {currency_local} to {currency_trip}
                            </button>
                            <button
                                onClick={() => { setType(2) }}
                                className={type === 2 ? 'selected' : ''}>
                                {currency_trip} to {currency_local}
                            </button>
                        </div>
                    </div>
                    <InputMoney title='Value' input={input} setInput={setInput} />
                </div>
                <div className='simulation-cards'>
                    <div className='simulation-card box'>
                        <img src="./../../../../img/paypal.png" alt="PayPal" />
                        <h4>Tax</h4>
                        <span>1.4%</span>
                        <h4>Fixer Tax</h4>
                        <span>3.0%</span>
                        <h4>Value</h4>
                        <span className='value'>{type === 1 ?
                            <>
                                {currency_trip} {((((input / 100) / exchangeToday) * 0.984) * 0.97).toFixed(2)}
                            </>
                            :
                            <>
                                {currency_local} {((((input / 100) * exchangeToday) * 0.984) * 0.97).toFixed(2)}
                            </>
                        }</span>
                    </div>
                    <div className='simulation-card box'>
                        <img src="./../../../../img/remessa.png" alt="Remessa Online" />
                        <h4>Tax</h4>
                        <span>1.0%</span>
                        <h4>Fixer Tax</h4>
                        <span>3.8%</span>
                        <h4>Value</h4>
                        <span className='value'>{type === 1 ?
                            <>
                                {currency_trip} {((((input / 100) / exchangeToday) * 0.99) * 0.94).toFixed(2)}
                            </>
                            :
                            <>
                                {currency_local} {((((input / 100) * exchangeToday) * 0.99) * 0.94).toFixed(2)}
                            </>
                        }</span>
                    </div>
                    <div className='simulation-card box'>
                        <img src="./../../../../img/wise.png" alt="Wise" />
                        <h4>Tax</h4>
                        <span>2.1%</span>
                        <h4>Fixer Tax</h4>
                        <span>3.0%</span>
                        <h4>Value</h4>
                        <span className='value'>{type === 1 ?
                            <>
                                {currency_trip} {((((input / 100) / exchangeToday) * 0.964) * 0.97).toFixed(2)}
                            </>
                            :
                            <>
                                {currency_local} {((((input / 100) * exchangeToday) * 0.964) * 0.97).toFixed(2)}
                            </>
                        }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExchangeSimulation