import { IFinancesExpenseList } from '../../../../types/finances/IExpense';
import FinanceSimpleResult from '../../comuns/FinanceSimpleResult'
import EntracesActives from '../actives';
import FinancesEntracesGrafic from '../grafic';
import './style.scss'


interface type {
    monthName: string;
    entraceTotalThatMonth: number;
    domesticTotalThatMonth: number;
    tripTotalThatMonth: number;
    totalCostsThatMonth: number;
    entraces: IFinancesExpenseList[];

}

const EntracesMain = ({ monthName, entraceTotalThatMonth, domesticTotalThatMonth, tripTotalThatMonth, totalCostsThatMonth }: type) => {


    return (
        <div className='entrace-main'>
            <div className='entraces-divs'>
                <div className='entrace-main-simple-result'>
                    <h3>Entraces resume</h3>
                    <div className='entrace-main-simple-result-box'>
                        <FinanceSimpleResult
                            title={`${monthName} entrances`}
                            value={entraceTotalThatMonth}
                        />
                        <FinanceSimpleResult
                            title={`${monthName}  domestic costs`}
                            value={domesticTotalThatMonth}
                        />
                        <FinanceSimpleResult
                            title={`${monthName} trip costs`}
                            value={tripTotalThatMonth}
                        />
                        <FinanceSimpleResult
                            title={`${monthName} profit`}
                            value={totalCostsThatMonth}
                        />
                    </div>
                </div>
                <div className="entrace-main-grafic">
                    <h3>Historic entraces</h3>
                    <FinancesEntracesGrafic />
                </div>
                <div>
                    <h3>Actives entraces</h3>
                    <EntracesActives />
                </div>
            </div>
        </div>
    )
}

export default EntracesMain;