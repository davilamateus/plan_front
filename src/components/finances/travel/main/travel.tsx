import React from 'react'
import TravelCards from '../card'
import TripActives from '../actives'
import './style.scss'
import TripResume from '../resume'

const TravelMain = () => {
    return (
        <div className='trip-main'>
            <div className="trip-components-top">
                <TravelCards />
                <TripActives />
            </div>
            <TripResume />
        </div>
    )
}

export default TravelMain;