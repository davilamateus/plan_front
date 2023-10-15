import ButtonAdd from './../buttonAdd';
import EntracesMain from '../entraces/main';
import DomesticMain from '../domestic/main';
import TravelMain from '../travel/main/travel';
import './style.scss';

const MainFinances = () => {


    return (
        <>
            <ButtonAdd />
            <EntracesMain />
            <hr />
            <DomesticMain />
            <hr />
            <TravelMain />
        </>
    )
}

export default MainFinances;