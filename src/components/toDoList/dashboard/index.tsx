import React, { useEffect, useState } from 'react'

import './style.scss'
import { IToDoListMain } from '../../../types/toDoList/IToDoList';
import useGetToDoList from '../../../store/hooks/toDoList/useGetToDoList';
import ToDoListCard from '../card';
import TitleOfSession from '../../communs/titleOfSession';


const ToDoListDashboard = () => {
    const [toDoList, setToDoList] = useState<IToDoListMain[]>([])

    const UseGetToDoList = useGetToDoList();

    useEffect(() => {
        if (UseGetToDoList) {
            UseGetToDoList.map((todolist: IToDoListMain) => {
                if (todolist.status !== 3) {
                    setToDoList(old => [...old, todolist])
                }

            })
        }
    }, [UseGetToDoList])





    return (
        <div className=' toDoList-dashboard'>
            <div className=" list-todolist">
                {toDoList.length > 0 ?
                    toDoList.map((item) => (
                        <ToDoListCard toDoList={item} key={item.id} />
                    ))

                    :
                    <div></div>
                }
            </div>
        </div>
    )
}

export default ToDoListDashboard