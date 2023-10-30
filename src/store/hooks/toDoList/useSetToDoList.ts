
import { useDispatch } from 'react-redux';
import { IToDoListMain } from '../../../types/toDoList/IToDoList';

function useSetToDoList() {
    const dispatch = useDispatch();
    return (toDoListMain: IToDoListMain[]
    ) => {
        const toDoList =
            toDoListMain

        dispatch({
            type: '@toDoList/SET_TODOLIST', toDoList
        });

    }
}

export default useSetToDoList;