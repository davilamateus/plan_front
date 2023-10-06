import { useEffect, useState } from 'react';
import InputDateRange from '../../../communs/inputs/dateRange';
import DomesticCostPlanning from '../goals/main'
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import './style.scss';
import DomesticTotalCard from '../total/card/main';
import DomesticExpensesActives from '../actives';

const DomesticMain = () => {


  const [fromDate, setFromDate] = useState<number>(GetTimestampInfomartions(new Date().getTime(), 0).firstDay);
  const [toDate, setToDate] = useState<number>(GetTimestampInfomartions(new Date().getTime(), 0).lastDay);


  const UseGetDomesticGoals = useGetDomesticGoals();
  const [dateLocked, setDateLoked] = useState(true);


  const UseGetGoals = useGetGoalsApi();
  const [goals, setGoals] = useState<IFinancesGoalsList[]>([]);

  useEffect(() => {
    if (UseGetDomesticGoals == false) {
      UseGetGoals(fromDate, toDate, 1, true);
      setDateLoked(false)
    } else {
      setDateLoked(false)
      setGoals(UseGetDomesticGoals)
    }
  }, [UseGetDomesticGoals])






  return (
    <div className='domestic-cost'>
      <div className='domestic-cost-header'>
        <h3>Domestic cost planning</h3>
        <InputDateRange
          setFromDate={setFromDate}
          fromDate={fromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </div>
      <div className='domestic-cost-components'>
        <DomesticCostPlanning
          fromDate={fromDate}
          toDate={toDate}
        />
        <div className='domestic-cost-components-botton'>
          <DomesticTotalCard
          />
          <DomesticExpensesActives
          />
        </div>


      </div>
    </div>
  )
}

export default DomesticMain;