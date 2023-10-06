import './style.scss';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';
interface type {
    title: string;
    value: number;
}
const FinanceSimpleResult = ({ title, value }: type) => {
    return (
        <div className='finance-simple-result'>
            <span className='finance-simple-result-title'>{title}:</span>
            <span className='finance-simple-result-value'>{FormartMoney(value)}</span>
        </div>
    )
}

export default FinanceSimpleResult;