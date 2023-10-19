import './style.scss';
import { useState } from "react";
import { IFinancesExpenseList } from "../../../../types/finances/IExpense";
import TimestampToDate from "../../../../functions/date/timestampToDate";
import BoxFullpage from "../../../communs/boxFullpage";
import ModalEditExpenses from "../../modalEdit/expenses";
import FormartMoney from "../../../../functions/formartMoney/formartMoney";
import TitleOfSession from '../../../communs/titleOfComponent';


interface type {
    active: {
        expense: IFinancesExpenseList;
        color: string;
        icon: number;
        category: string;
    }[];
    height: string;

}

const ExpensesActives = ({ active, height }: type) => {

    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);

    return (
        <div className='finances-actives'>
            <TitleOfSession title='Actives' />

            <div className='finances-actives-table box' style={{ maxHeight: `${height}` }}>
                {active.length > 0 ?
                    active.map((item, index) => (
                        <div
                            className='finances-actives-item'
                            onClick={() => {
                                setOpened(true)
                                setIndex(index)
                            }}
                            key={index}
                        >
                            <div className='finances-actives-left' >
                                <div style={{ backgroundColor: item.color }} className='finance-bar-color'></div>
                                <div className='finances-actives-text' >
                                    <div className="finances-actives-title">
                                        {item.expense.title}
                                    </div>
                                    <div className='finances-actives-category'>
                                        <img src={`./../../../../../../icons/categories/${item.icon}.svg`} alt="" />
                                        <span >
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='finances-actives-date'>
                                {TimestampToDate(item.expense.date)}
                            </div>
                            <div className='finances-actives-value'>{FormartMoney(item.expense.value)}</div>
                        </div>
                    ))
                    : <span className="no-activities">
                        No activities added yet.
                    </span>}
                {opened ?
                    <BoxFullpage
                        title='Edit cost'
                        content={
                            <ModalEditExpenses
                                setOpened={setOpened}
                                expense={active[index].expense}
                            />
                        }
                        setOpened={setOpened}
                    />
                    : ''}
            </div>
        </div >
    )
}

export default ExpensesActives;