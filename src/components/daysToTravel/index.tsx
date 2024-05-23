import { useState, useEffect } from 'react';
import { useGetTrip } from '../../store/hooks/trip/useGetTrip';
import Skeleton from 'react-loading-skeleton';
import './style.scss';



const DaysToTravel = () => {

    const [daysToTravel, setDaysToTravel] = useState(0);
    const now = new Date().getTime();
    const UserGetTrip = useGetTrip();


    useEffect(() => {
        if (UserGetTrip) {
            const tripDate = new Date(UserGetTrip.when).getTime();
            const difference = tripDate - now;
            const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
            setDaysToTravel(days);
        }
    }, [UserGetTrip]);


    return (

        <div className='daysToTravel-box box'>
            {UserGetTrip ?
                daysToTravel >= 0 ?
                    <>
                        <div>You'll arrive in <span className='daysToTravel-city'>{UserGetTrip.tripCity}</span> at</div>
                        <h2>{daysToTravel.toString()}</h2>
                        <span>{daysToTravel > 1 ? 'days.' : 'day.'}</span>
                    </>
                    :
                    <>
                        <div>You arrived in <span className='daysToTravel-city'>{UserGetTrip.tripCity}</span> at</div>
                        <h2>{(daysToTravel * -1).toString()}</h2>
                        <span>{daysToTravel > 1 * (-1) ? 'days.' : 'day.'}</span>
                    </>
                :
                <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center', gap: '4px' }}>
                    <Skeleton style={{ width: '98px', height: '10px', }} />
                    <Skeleton style={{ width: '68px', height: '48px', }} />
                    <Skeleton style={{ width: '48px', height: '10px', }} />
                </div>
            }
        </div>
    )
};

export default DaysToTravel;



