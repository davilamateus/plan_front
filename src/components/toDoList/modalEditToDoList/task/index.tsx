import React, { useEffect, useState } from 'react'
import { IToDoListTasks } from '../../../../types/toDoList/IToDoList'
import './style.scss';
import useEditToDoListTask from '../../../../hooks/toDoList/task/useEditTask';
import BtnActionSmall from '../../comuns/btnActionSmall';
import InputSimple from '../../../communs/inputs/simples';
import InputDescription from '../../../communs/inputs/description';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import useAddTask from '../../../../hooks/toDoList/task/useAddTask';
import useDeleteTask from '../../../../hooks/toDoList/task/useDeleteTask';
import ButtonDeleteSmall from '../../../communs/buttons/deleteSmall';

interface type {
    tasks: IToDoListTasks[],
    todolistId: number
}

const TodoListTask = ({ tasks, todolistId }: type) => {


    const UseEditToDoListTask = useEditToDoListTask();
    const UseAddToDoListTask = useAddTask();
    const UseDeleteToDoListTask = useDeleteTask();
    const [inputOpened, setInputOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    function changeStatus(id: number, status: boolean) {
        UseEditToDoListTask(id, status == true ? false : true);
    }


    useEffect(() => {
        if (title !== '' && description !== '') {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [title, description])


    function addTask() {
        setLoading(true);
        UseAddToDoListTask({ title: title, description: description, toDoListId: todolistId }).then(() => {
            setLoading(false)
            setTitle('')
            setDescription('');
            setInputOpened(false);
        })

    }

    function deleleTask(id: number) {
        UseDeleteToDoListTask(id);
    }
    return (

        <div>
            <label>
                <div className='todolist-head'>
                    <h4>Tasks</h4>
                    <BtnActionSmall inputOpened={inputOpened} setInputOpened={setInputOpened} />
                </div>
                {inputOpened ?
                    <label className='todolist-input'>
                        <InputSimple title={'Task title'} input={title} setInput={setTitle} placeholder='Type a title of the task..' />
                        <InputDescription title={'Task description'} description={description} setDescription={setDescription} />
                        <ButtonSimple type='success' loading={loading} status={active} title={'Add task'} action={addTask} />

                    </label> : ''}
                {tasks.length > 0 ?
                    tasks.map((task: IToDoListTasks) => (
                        <div key={task.id} className={`task-card ${task.status == true ? 'task-done' : ''}`}>
                            <div className="task-left" onClick={() => {
                                changeStatus(task.id, task.status)
                            }}>
                                <div className="task-status">
                                    {task.status == true ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="20.65" viewBox="0 0 25.65 20.65">
                                            <g id="Grupo_3944" data-name="Grupo 3944" transform="translate(-944.672 -402.679)">
                                                <line id="Linha_586" data-name="Linha 586" x2="7" y2="7" transform="translate(947.5 413.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="4" />
                                                <line id="Linha_587" data-name="Linha 587" y1="15" x2="13" transform="translate(954.5 405.5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="4" />
                                            </g>
                                        </svg>
                                        :
                                        <div></div>}
                                </div>
                                <div >
                                    <div className="task-title">{task.title}</div>
                                    <div className="task-description">{task.description}</div>
                                </div>
                            </div>
                            <div className="task-right">
                                <ButtonDeleteSmall action={() => deleleTask(task.id)} />
                            </div>
                        </div>
                    ))
                    : 'No tasks added.'}
            </label>

        </div>
    )
}

export default TodoListTask