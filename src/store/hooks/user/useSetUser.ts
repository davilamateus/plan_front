
import { useDispatch } from 'react-redux';
import { IUser } from '../../../types/user';

export const useSetUser = () => {
    const dispatch = useDispatch();
    return (user: IUser) => {
        dispatch({
            type: '@user/SET_USER', user
        });
    }
}

