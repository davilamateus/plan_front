import { useEffect, useState } from 'react';
import InputDateRange from '../../../communs/inputs/dateRange';
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals';
import useGetDomesticGoals from '../../../../store/hooks/finances/useGetDomesticGoals';
import './style.scss';
import DomesticResume from '../resume/card/main';
import DomesticExpensesActives from '../../comuns/actives/main';
import TitleOfSession from '../../../communs/titleOfSession';
import FinancesGoals from '../../comuns/goals/main';

const DomesticMain = () => {


  const [fromDate, setFromDate] = useState<number>(GetTimestampInfomartions(new Date().getTime(), 0).firstDay);
  const [toDate, setToDate] = useState<number>(GetTimestampInfomartions(new Date().getTime(), 0).lastDay);


  const UseGetDomesticGoals = useGetDomesticGoals();


  const UseGetGoalsApi = useGetGoalsApi();

  useEffect(() => {
    UseGetGoalsApi(fromDate, toDate, 1, true);

  }, [])


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
        <FinancesGoals goals={UseGetDomesticGoals} />
        <div className='domestic-cost-components-botton'>
          <DomesticResume
          />
          <DomesticExpensesActives
            goals={UseGetDomesticGoals}
          />
        </div>


      </div>
    </div>
  )
}

export default DomesticMain;