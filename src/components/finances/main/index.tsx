import ButtonAdd from './../../communs/buttons/add';
import EntracesMain from '../entraces/main';
import DomesticMain from '../domestic/main';
import TravelMain from '../travel/main/travel';
import './style.scss';
import FinancesMenuAdd from '../menuAdd';
import { useState } from 'react';

const MainFinances = () => {
    const [opened, setOpened] = useState(false)


    return (
        <>
            <ButtonAdd setOpened={setOpened} opened={opened}
                content={<FinancesMenuAdd setOpened={setOpened} />} />
            <EntracesMain />
            <hr />
            <DomesticMain />
            <hr />
            <TravelMain />
        </>
    )
}

export default MainFinances;