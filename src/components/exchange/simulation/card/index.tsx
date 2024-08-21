import "./style.scss";

interface type {
    img: string;
    tax: number;
    fixedTax: number;
    type: number;
    input: number;
    exchangeToday: number;
    currencyLocal?: string;
    currencyTrip?: string;
}

const ExchangeCard = ({ img, tax, fixedTax, type, currencyLocal, currencyTrip, input, exchangeToday }: type) => {
    return (
        <div>
            <div className="simulation-card box">
                <img
                    src={`./../../../../img/${img}.png`}
                    alt={img}
                />
                <h5>Tax</h5>
                <span>{tax}%</span>
                <h5>Fixer Tax</h5>
                <span>{fixedTax}%</span>
                <h5>Value</h5>
                <span className="value">
                    {type === 1 ? currencyTrip : currencyLocal} {((input / 100 / exchangeToday) * tax + fixedTax).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default ExchangeCard;
