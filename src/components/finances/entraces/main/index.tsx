import { useState, useEffect } from 'react';
import useGetEntraces from '../../../../store/hooks/finances/useGetEntraces';
import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import TitleOfSession from '../../../communs/titleOfSession';
import FinanceActives from '../../comuns/actives/table';
import FinancesEntracesGrafic from '../grafic/main';
import FinancesResume from '../resume';
import './style.scss';
import useGetEntracesApi from '../../../../hooks/finances/entraces/useGetEntraces';

const EntracesMain = () => {

    const [entraces, setEntraces] = useState<IFinancesExpenseList[]>([]);



    const UseGetEntraces = useGetEntraces();
    const UseGetEntracesApi = useGetEntracesApi();


    // Getting Entraces
    useEffect(() => {
        if (UseGetEntraces.entraces === false) {
            UseGetEntracesApi(0, 1000000000000000000, true);
        } else {
            setEntraces(UseGetEntraces);
        }
    }, [UseGetEntraces]);


    return (
        <div className='entrace-main'>
            <TitleOfSession title='Entraces' />
            <FinancesEntracesGrafic entraces={entraces} />
            <div className="entraces-components-botton">
                <FinancesResume />
                <FinanceActives actives={entraces} />
            </div>
        </div>
    )
}

export default EntracesMain;