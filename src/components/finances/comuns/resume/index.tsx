import './style.scss';
import { formartMoney } from '../../../../functions/formartMoney/formartMoney';
import Skeleton from 'react-loading-skeleton';

interface type {
    title: string;
    value?: number;
    text?: string | number;
}
const FinanceSimpleResult = ({ title, value, text }: type) => {

    return (
        value !== undefined || text !== undefined ?
            <div className='finance-simple-result'>
                <span className='finance-simple-result-title'>{title}:</span>
                {value !== undefined &&
                    <h5 className='finance-simple-result-value'>{formartMoney(value)}</h5>
                }
                {text !== undefined &&
                    <h5 className='finance-simple-result-value'>{text}</h5>
                }
            </div>
            :
            <div className='finance-simple-result'>
                <Skeleton style={{ width: '120px', height: '14px', }} />
                <Skeleton style={{ width: '80px', height: '16px', marginTop: '4px' }} />
            </div>
    )
}

export default FinanceSimpleResult;