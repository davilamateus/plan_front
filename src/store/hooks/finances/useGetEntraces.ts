import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useGetEntracesApi from '../../../hooks/finances/entraces/useGetEntraces';


export const useGetEntraces = () => {

    const getEntraces = useSelector((state: any) => state.entraces);
    const [entraces, setEntraces] = useState(getEntraces.entraces);
    const UseGetEntracesApi = useGetEntracesApi();
    useEffect(() => {
        if (getEntraces.entraces) {
            setEntraces(getEntraces.entraces);
        } else {
            UseGetEntracesApi();
        }
    }, [getEntraces]);

    return entraces;

};


