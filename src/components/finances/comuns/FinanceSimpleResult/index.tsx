import './style.scss';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';
import Skeleton from 'react-loading-skeleton';

interface type {
    title: string;
    value: number | null;
}
const FinanceSimpleResult = ({ title, value }: type) => {
    return (
        value !== null ?
            <div className='finance-simple-result'>

                <span className='finance-simple-result-title'>{title}:</span>
                <span className='finance-simple-result-value'>{FormartMoney(value)}</span>

            </div>
            :
            <div className='finance-simple-result'>
                <Skeleton style={{ width: '120px', height: '14px', }} />
                <Skeleton style={{ width: '80px', height: '16px', marginTop: '4px' }} />
            </div>
    )
}

export default FinanceSimpleResult;