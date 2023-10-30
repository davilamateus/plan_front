import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputSimple from '../../../communs/inputs/simples'
import InputDescription from '../../../communs/inputs/description'
import InputColor from '../../../communs/inputs/color'
import InputDate from '../../../communs/inputs/date'
import './style.scss';
import ButtonSimple from '../../../communs/buttons/simple/simple'
import useAddToDoList from '../../../../hooks/toDoList/useAddToDoList'
import { IToDoListMain, IToDoListTasks } from '../../../../types/toDoList/IToDoList'
import TodoListTask from '../task'
import TodoListAttchaments from '../attchaments'
import TodolistComments from '../comments'

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    todolist: IToDoListMain
}

const ModalEditToDoList = ({ setOpened, todolist }: type) => {

    const [title, setTitle] = useState(todolist.title)
    const [description, setDescription] = useState(todolist.description)
    const [color, setColor] = useState(todolist.color)
    const [date, setDate] = useState(todolist.date);
    const [btnStatus, setBtnStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (title !== '' && description !== '' && color !== '' && date > 0) {
            setBtnStatus(true)
        }
    }, [title, description, color, date])

    const UseAddToDoList = useAddToDoList();
    function addTodoList() {
        setLoading(true);
        UseAddToDoList({ title: title, description: description, color: color, date: date })
        setOpened(false)

    }

    return (
        <div className='modal-edit-todolist'>
            <div className='content'>
                <InputSimple title='Title' input={title} setInput={setTitle} placeholder='Type a title for your to do list...' />
                <InputDescription description={description} setDescription={setDescription} title='Description' />
                <InputColor title='Color' color={color} setColor={setColor} />
                <InputDate title='Date' setDate={setDate} date={date} />
                <TodoListTask todolistId={todolist.id} tasks={todolist.toDoListTasks} />
                <TodoListAttchaments todolistId={todolist.id} attchaments={todolist.toDoListAttchaments} />
                <TodolistComments comments={todolist.toDoListComments} todolistId={todolist.id} />
            </div>
            <div className="button">
                <ButtonSimple title={'Edit'} type='success' status={btnStatus} loading={loading} action={addTodoList} />
            </div>
        </div>
    )
}

export default ModalEditToDoList