import React from 'react'

import './style.scss';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';


interface type {
    title: string;
    value: number;
}
const FinanceSimpleResult = ({ title, value }: type) => {
    return (
        <div className='finance-simple-result'>
            <span>{title}</span>
            <h4>{FormartMoney(value)}</h4>
        </div>
    )
}

export default FinanceSimpleResult