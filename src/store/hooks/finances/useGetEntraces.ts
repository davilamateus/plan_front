import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const useGetEntraces = () => {

    const getEntraces = useSelector((state: any) => state.entraces);
    const [entraces, setEntraces] = useState(getEntraces);
    useEffect(() => {
        setEntraces(getEntraces.entraces)
    }, [getEntraces])

    return entraces;

}

export default useGetEntraces;

