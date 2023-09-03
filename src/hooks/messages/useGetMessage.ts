import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


const useGetMessage = () => {

    const getMessage = useSelector((state: any) => state.message);
    const [message, setMessage] = useState(getMessage.message)
    useEffect(() => {
        setMessage(getMessage.message)
    }, [getMessage])

    return message

}

export default useGetMessage

