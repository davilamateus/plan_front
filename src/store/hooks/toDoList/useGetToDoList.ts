import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetToDoListApi } from '../../../hooks/toDoList/useGetToDoList';


export const useGetToDoList = () => {

    const getToDoList = useSelector((state: any) => state.toDoList);
    const [toDoList, setToDoList] = useState(getToDoList.toDoList)
    const UseGetToDoListApi = useGetToDoListApi()

    useEffect(() => {
        if (getToDoList.toDoList) {
            setToDoList(getToDoList.toDoList);
        } else {
            UseGetToDoListApi();
        }
    }, [getToDoList]);

    return toDoList;

}


