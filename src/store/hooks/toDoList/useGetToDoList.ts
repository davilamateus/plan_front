import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


const useGetToDoList = () => {

    const getToDoList = useSelector((state: any) => state.toDoList);
    const [toDoList, setToDoList] = useState(getToDoList.toDoList)

    useEffect(() => {
        setToDoList(getToDoList.toDoList)
    }, [getToDoList])

    return toDoList

}

export default useGetToDoList

