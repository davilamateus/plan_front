import { useState } from 'react'
import { IToDoListTasks } from '../../../../types/toDoList/IToDoList'
import { useEditToDoListTask } from '../../../../hooks/toDoList/task/useEditTask';
import { useDeleteToDoListTask } from '../../../../hooks/toDoList/task/useDeleteTask';
import { useAddToDoListTask } from '../../../../hooks/toDoList/task/useAddTask';
import BtnActionSmall from '../../comuns/btnActionSmall';
import InputSimple from '../../../communs/inputs/simples';
import InputDescription from '../../../communs/inputs/description';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import ButtonDeleteSmall from '../../../communs/buttons/deleteSmall';
import './style.scss';

interface type {
    tasks: IToDoListTasks[],
    todolistId: number
}

const TodoListTask = ({ tasks, todolistId }: type) => {


    const UseEditToDoListTask = useEditToDoListTask();
    const UseAddToDoListTask = useAddToDoListTask();
    const UseDeleteToDoListTask = useDeleteToDoListTask();

    const [task, setTask] = useState<IToDoListTasks>({ title: '', description: '', status: false, toDoListId: todolistId, id: 0 })
    const [inputOpened, setInputOpened] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        UseAddToDoListTask(task)
            .then(() => {
                setInputOpened(false);
                setLoading(false);
                setTask({ ...task, title: '', description: '' });
            });
    };

    return (

        <div>
            <label>
                <div className='todolist-head'>
                    <h4>Tasks</h4>
                    <BtnActionSmall inputOpened={inputOpened} setInputOpened={setInputOpened} />
                </div>
                {inputOpened ?
                    <label className='todolist-input'>
                        <InputSimple
                            title={'Task title'}
                            input={task.title}
                            setInput={e => setTask({ ...task, title: e })}
                            placeholder='Type a title of the task..' />
                        <InputDescription
                            title={'Task description'}
                            description={task.description}
                            setDescription={e => setTask({ ...task, description: e })} />
                        <ButtonSimple
                            type='success'
                            title={'Add task'}
                            loading={loading}
                            status={task.title !== '' && task.description !== ''}
                            action={() => handleSubmit()} />

                    </label> : ''}
                {tasks.length > 0 ?
                    tasks.map((task: IToDoListTasks) => (
                        <div key={task.id} className={`task-card ${task.status == true ? 'task-done' : ''}`}>
                            <div
                                className="task-left"
                                onClick={() => UseEditToDoListTask(task.id, task.status == true ? false : true)}>
                                <div className="task-status">
                                    {task.status == true ?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25.65" height="20.65" viewBox="0 0 25.65 20.65">
                                            <g id="Grupo_3944" data-name="Grupo 3944" transform="translate(-944.672 -402.679)">
                                                <line id="Linha_586" data-name="Linha 586" x2="7" y2="7" transform="translate(947.5 413.5)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="4" />
                                                <line id="Linha_587" data-name="Linha 587" y1="15" x2="13" transform="translate(954.5 405.5)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="4" />
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
                                <ButtonDeleteSmall action={() => UseDeleteToDoListTask(task.id)} />
                            </div>
                        </div>
                    ))
                    : 'No tasks added.'}
            </label>

        </div>
    )
}

export default TodoListTask;