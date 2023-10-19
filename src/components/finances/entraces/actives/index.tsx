import { useEffect, useState } from 'react';
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import TimestampToDate from '../../../../functions/date/timestampToDate';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import ModalEditEntrances from '../../modalEdit/entraces';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';
import TitleOfSession from '../../../communs/titleOfComponent';
import Skeleton from 'react-loading-skeleton';

const EntracesActives = () => {

    const [entraces, setEntraces] = useState<IFinancesExpenseList[]>([]);
    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const [loading, setLoading] = useState(true);


    const UseGetEntraces = useGetEntraces();


    useEffect(() => {
        if (UseGetEntraces.entraces !== false && UseGetEntraces !== false) {
            setEntraces(UseGetEntraces);
            setLoading(false);
        }
    }, [UseGetEntraces]);


    return (
        <div className='finances-entraces-actives'>
            <TitleOfSession title='Actives' />
            <div className='finances-entraces-actives-table box'>
                {loading ? <>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>
                    <div className='finances-entraces-actives-item'>
                        <Skeleton style={{ width: '60px', height: '16px', }} />
                        <Skeleton style={{ width: '50px', height: '16px', }} />
                        <Skeleton style={{ width: '90px', height: '16px', }} />
                    </div>

                </> :

                    entraces.length > 0 ?
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