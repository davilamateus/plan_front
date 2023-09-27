import EntracesActives from '../actives';
import FinancesEntracesGrafic from '../grafic/main';
import FinancesResume from '../resume';
import './style.scss';

const EntracesMain = () => {

    return (
        <div className='entrace-main'>
            <div className='entraces-components'>
                <FinancesResume />
                <div className="entraces-components-botton">
                    <FinancesEntracesGrafic />
                    <EntracesActives />
                </div>
            </div>
        </div>
    )
}

export default EntracesMain;