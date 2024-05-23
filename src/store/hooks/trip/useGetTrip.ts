import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ITrip } from '../../../types/trip';


export const useGetTrip = () => {

    const getTrip = useSelector((state: any) => state.tripReduce);
    const [trip, setTrip] = useState<ITrip>(getTrip);

    useEffect(() => {
        setTrip(getTrip.trip);
    }, [getTrip]);

    return trip;

};

