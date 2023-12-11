import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.scss';
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar';



const DaysToTravel = () => {

    const [days, setDays] = useState(0);
    const [calcDays, setCalcDays] = useState(0);
    const [loading, setLoading] = useState(false);
    const UseGetAvatar = useGetAvatar();


    const now = new Date().getTime();
    useEffect(() => {
        setCalcDays((new Date(UseGetAvatar.when).getTime() - now));
    }, [UseGetAvatar.when]);



    useEffect(() => {
        setDays(Math.ceil(calcDays / 86400000))
        setLoading(true);
    }, [calcDays]);

    return (

        <div className='daysToTravel-box box'>
            {loading == true && !Number.isNaN(days) ?
                days >= 0 ?
                    <>
                        <span>You'll arrive in <span className='daysToTravel-city'>{UseGetAvatar.city_trip}</span> at</span>
                        <h2>{days}</h2>
                        <span>{days > 1 ? 'days.' : 'day.'}</span>
                    </>
                    :
                    <>
                        <span>You arrived in <span className='daysToTravel-city'>{UseGetAvatar.city_trip}</span> at</span>
                        <h2>{days * -1}</h2>
                        <span>{days > 1 * (-1) ? 'days.' : 'day.'}</span>
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
}

export default DaysToTravel;



