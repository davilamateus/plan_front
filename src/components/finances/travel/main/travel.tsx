import React from 'react'
import TravelCards from '../card'
import TripActives from '../actives'
import './style.scss'
import TripResume from '../resume'
import TitleOfSession from '../../../communs/titleOfSession'

const TravelMain = () => {
    return (
        <div className='trip-main'>
            <TitleOfSession title='Trip' />
            <div className='trip-components'>
                <div className="trip-components-top">
                    <TravelCards />
                    <TripActives />
                </div>
                <TripResume />
            </div>
        </div>
    )
}

export default TravelMain;