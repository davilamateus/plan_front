import React, { useEffect, useState } from 'react'
import IFinancesExpense from '../../../../types/finances/IExpense'
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import TimestampToDate from '../../../../functions/date/timestampToDate';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import ModalEditEntrances from '../../modalEdit/entraces';

const EntracesActives = () => {
    const [entraces, setEntraces] = useState<IFinancesExpense[]>([]);
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
            <table >
                <tr>
                    <th>Title:</th>
                    <th>Date:</th>
                    <th>Value:</th>
                </tr>
                <tbody className='table-scroll' >

                    {entraces.length > 0 ?
                        entraces.map((item, index) => (
                            <tr
                                onClick={() => {
                                    setOpened(true)
                                    setIndex(index)
                                }}
                                key={index}
                            >
                                <td width={'200px'}>{item.title}</td>
                                <td>{TimestampToDate(item.date)}</td>
                                <td className='bord'>{item.value}</td>
                            </tr>
                        ))
                        : ''}
                </tbody>
                {opened ?
                    <BoxFullpage
                        content={
                            <ModalEditEntrances
                                setOpened={setOpened}
                                entrace={entraces[index]}
                            />
                        }
                        setOpened={setOpened}
                    />
                    : ''}
            </table>
        </div >

    )
}

export default EntracesActives;