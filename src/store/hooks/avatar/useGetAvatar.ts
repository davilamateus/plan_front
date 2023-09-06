import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


const useGetAvatar = () => {

    const getAvatar = useSelector((state: any) => state.avatar);
    const [avatar, setAvatar] = useState(getAvatar.avatar)

    useEffect(() => {
        setAvatar(getAvatar.avatar)
    }, [getAvatar])

    return avatar

}

export default useGetAvatar

