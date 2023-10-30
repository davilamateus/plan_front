import React, { useEffect, useState } from 'react'
import useGetToDoListApi from '../../../hooks/toDoList/useGetToDoList'
import useGetToDoList from '../../../store/hooks/toDoList/useGetToDoList';
import Kanban from '../kanban';
import { IToDoListMain } from '../../../types/toDoList/IToDoList';
import ButtonAdd from '../../communs/buttons/add';
import ModalAddToDoList from '../modalAddToDoList';
import BoxFullpage from '../../communs/boxFullpage';

const ToDoListMain = () => {

    const UseGetToListApi = useGetToDoListApi();
    const UseGetToDoList = useGetToDoList();

    const [toDo, setToDo] = useState<IToDoListMain[]>([]);
    const [inProgress, setInProgress] = useState<IToDoListMain[]>([]);
    const [done, setDone] = useState<IToDoListMain[]>([]);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (UseGetToDoList) {
            if (UseGetToDoList.length > 0) {
                let arrayToDo: IToDoListMain[] = [];
                let arrayInProgress: IToDoListMain[] = [];
                let arrayDone: IToDoListMain[] = [];
                UseGetToDoList.map((toDoList: IToDoListMain) => {
                    if (toDoList.status == 1) {
                        arrayToDo.push(toDoList);
                    } else if (toDoList.status == 2) {
                        arrayInProgress.push(toDoList);
                    }
                    else if (toDoList.status == 3) {
                        arrayDone.push(toDoList);
                    }
                })
                setToDo(arrayToDo);
                setInProgress(arrayInProgress);
                setDone(arrayDone);
            }

        } else {
            UseGetToListApi()
        }
    }, [UseGetToDoList])


    return (
        <div>
            <Kanban toDo={toDo} inProgress={inProgress} done={done} />
            <ButtonAdd content={<BoxFullpage content={<ModalAddToDoList setOpened={setOpened} />} setOpened={setOpened} title='Add To do list' />} opened={opened} setOpened={setOpened} />
        </div>
    )
}

export default ToDoListMain