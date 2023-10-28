import './style.scss';
import { useState } from "react";
import { IFinancesExpenseList } from "../../../../../types/finances/IExpense";
import TimestampToDate from "../../../../../functions/date/timestampToDate";
import BoxFullpage from "../../../../communs/boxFullpage";
import ModalEditExpenses from "../../../modalEdit/expenses";
import FormartMoney from "../../../../../functions/formartMoney/formartMoney";
import TitleOfSession from '../../../../communs/titleOfComponent';
import ModalEditEntrances from '../../../modalEdit/entraces';


interface type {

    actives: IFinancesExpenseList[];


}

const FinanceActives = ({ actives }: type) => {


    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);

    return (
        <div className='finances-actives'>
            <TitleOfSession title='Actives' />

            <div className='finances-actives-table box' >
                {actives.length > 0 ?
                    actives.map((item, index) => (
                        <div
                            className='finances-actives-item'
                            onClick={() => {
                                setOpened(true)
                                setIndex(index)
                            }}
                            key={index}
                        >
                            <div className='finance-actives-left'>
                                <div style={{ backgroundColor: item.color ? item.color : '#6AD8A7' }} className='finance-bar-color'></div>
                                <div className="finances-actives-title">
                                    {item.title}
                                </div>
                            </div>
                            <div className='finances-actives-date'>
                                {TimestampToDate(item.date)}
                            </div>
                            <div className='finances-actives-value'>
                                {FormartMoney(item.value)}
                            </div>
                        </div>
                    ))
                    : <span className="no-activities">
                        No activities added yet.
                    </span>}
                {opened ?
                    <BoxFullpage
                        title='Edit cost'
                        content={actives[index].type == 1 ?
                            <ModalEditExpenses
                                setOpened={setOpened}
                                expense={actives[index]}
                            /> :
                            <ModalEditEntrances
                                setOpened={setOpened}
                                entrace={actives[index]} />
                        }
                        setOpened={setOpened}
                    />
                    : ''}
            </div>
        </div >
    )
}

export default FinanceActives;