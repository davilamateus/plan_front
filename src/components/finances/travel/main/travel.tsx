import React, { useEffect } from 'react'
import './style.scss'
import TripResume from '../resume'
import TitleOfSession from '../../../communs/titleOfSession'
import useGetGoalsApi from '../../../../hooks/finances/goals/useGetGoals'
import useGetTripGoals from '../../../../store/hooks/finances/useGetTripGoals'
import FinancesGoals from '../../comuns/goals/main'
import TripActives from '../../../finances/comuns/actives/main'

const TravelMain = () => {

    const UseGetGoalsApi = useGetGoalsApi();
    const UseGetTripGoals = useGetTripGoals();

    useEffect(() => {
        if (UseGetTripGoals == false) {
            UseGetGoalsApi(0, 1000000000000000000, 2, true);
        }
    }, [UseGetGoalsApi, UseGetTripGoals]);
    return (
        <div className='trip-main'>
            <TitleOfSession title='Trip' />
            <div className='trip-components'>
                <FinancesGoals goals={UseGetTripGoals} />
                <div className="trip-components-top">
                    <TripResume />
                    <TripActives goals={UseGetTripGoals} />
                </div>
            </div>
        </div>
    )
}

export default TravelMain;