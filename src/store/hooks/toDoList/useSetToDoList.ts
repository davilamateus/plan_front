
import { useDispatch } from 'react-redux';
import { IToDoListMain } from '../../../types/toDoList/IToDoList';

export const useSetToDoList = () => {
    const dispatch = useDispatch();
    return (toDoList: IToDoListMain[]) => {
        dispatch({
            type: '@toDoList/SET_TODOLIST', toDoList
        });
    }
};

