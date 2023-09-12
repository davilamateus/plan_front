import React from 'react'

import './style.scss';


interface type {
    title: string;
    value: number
}
const FinanceSimpleResult = ({ title, value }: type) => {
    return (
        <div className='finance-simple-result'>
            <span>{title}</span>
            <h4>$ {value}</h4>
        </div>
    )
}

export default FinanceSimpleResult