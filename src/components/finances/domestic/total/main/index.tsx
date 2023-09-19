
import DomesticExpensesActives from '../actives'
import DomesticTotalCard from '../card/main';
import './style.scss';



const DomesticTotalMain = () => {


    return (
        <div className='domestic-total-main'>
            <DomesticTotalCard
            />
            <DomesticExpensesActives
            />

        </div>
    )
}

export default DomesticTotalMain