import { useEffect, useState } from 'react';
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import TimestampToDate from '../../../../functions/date/timestampToDate';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import ModalEditEntrances from '../../modalEdit/entraces';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';
import TitleOfSession from '../../../communs/titleOfSession';

const EntracesActives = () => {

    const [entraces, setEntraces] = useState<IFinancesExpenseList[]>([]);
    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);


    const UseGetEntraces = useGetEntraces();

    useEffect(() => {
        if (UseGetEntraces.entraces !== false) {
            setEntraces(UseGetEntraces);
        }
    }, [UseGetEntraces]);


    return (
        <div className='finances-entraces-actives'>
            <TitleOfSession title='Entraces Resume' />
            <div className='finances-entraces-actives-table'>
                {entraces.length > 0 ?
                    entraces.map((item, index) => (
                        <div
                            className='finances-entraces-actives-item'
                            onClick={() => {
                                setOpened(true)
                                setIndex(index)
                            }}
                            key={index}
                        >
                            <div className='finances-entraces-actives-text' >
                                <div>
                                    <div className='circle'></div>
                                    <div className="finances-entraces-actives-title">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                            <div className='finances-entraces-actives-date'>
                                {TimestampToDate(item.date)}
                            </div>
                            <div className='finances-entraces-actives-value'>{FormartMoney(item.value)}</div>
                        </div>
                    ))
                    : <span className="no-activities">
                        No activities added yet.
                    </span>}
                {opened ?
                    <BoxFullpage
                        title='Edit Entrace'
                        content={
                            <ModalEditEntrances
                                setOpened={setOpened}
                                entrace={entraces[index]}
                            />
                        }
                        setOpened={setOpened}
                    />
                    : ''}
            </div>

        </div >

    )
}

export default EntracesActives;