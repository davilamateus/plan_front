import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


export const useGetUser = () => {

    const getUser = useSelector((state: any) => state.userReducer);
    const [user, setUser] = useState(getUser);

    useEffect(() => {
        setUser(getUser.user);
    }, [getUser]);

    return user;

};


