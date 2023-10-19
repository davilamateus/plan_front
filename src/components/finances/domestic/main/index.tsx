import { useEffect, useState } from 'react';
import InputDateRange from '../../../communs/inputs/dateRange';
import DomesticCostGoals from '../goals/main'
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import './style.scss';
import DomesticResume from '../resume/card/main';
import DomesticExpensesActives from '../actives';
import TitleOfSession from '../../../communs/titleOfSession';

const DomesticMain = () => {


  const [fromDate, setFromDate] = useState<number>(GetTimestampInfomartions(new Date().getTime(), 0).firstDay);
  const [toDate, setToDate] = useState<number>(GetTimestampInfomartions(new Date().getTime(), 0).lastDay);


  const UseGetDomesticGoals = useGetDomesticGoals();


  const UseGetGoals = useGetGoalsApi();

  useEffect(() => {
    if (UseGetDomesticGoals == false) {
      UseGetGoals(fromDate, toDate, 1, true);
    }
  }, [UseGetDomesticGoals])






  return (
    <div className='domestic-cost'>
      <div className='domestic-cost-header'>
        <TitleOfSession title='Domestic' />
        <InputDateRange
          setFromDate={setFromDate}
          fromDate={fromDate}
          toDate={toDate}
          setToDate={setToDate}
        />
      </div>
      <div className='domestic-cost-components'>
        <DomesticCostGoals
          fromDate={fromDate}
          toDate={toDate}
        />
        <div className='domestic-cost-components-botton'>
          <DomesticResume
          />
          <DomesticExpensesActives
          />
        </div>


      </div>
    </div>
  )
}

export default DomesticMain;