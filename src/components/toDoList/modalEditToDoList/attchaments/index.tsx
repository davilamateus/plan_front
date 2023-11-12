import React, { useEffect, useState } from 'react'
import { IToDoListAttchament, IToDoListTasks } from '../../../../types/toDoList/IToDoList'
import './style.scss';
import useEditToDoListTask from '../../../../hooks/toDoList/task/useEditTask';
import BtnActionSmall from '../../comuns/btnActionSmall';
import InputSimple from '../../../communs/inputs/simples';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import useAddTask from '../../../../hooks/toDoList/task/useAddTask';
import InputUploadFile from '../../../communs/inputs/uploadFile';
import useAddAttchament from '../../../../hooks/toDoList/attchament/useAddAttchament';
import ButtonDeleteSmall from '../../../communs/buttons/deleteSmall';
import useDeleteAttchament from '../../../../hooks/toDoList/attchament/useDeleteAttchament';

interface type {
    attchaments: IToDoListAttchament[],
    todolistId: number
}

const TodoListAttchaments = ({ attchaments, todolistId }: type) => {


    const UseAddToDoListAttchament = useAddAttchament();
    const UseDeleteToDoListAttchament = useDeleteAttchament();
    const [inputOpened, setInputOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');




    useEffect(() => {
        if (title !== '' && link !== '') {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [title, link])


    function addAttchament() {
        setLoading(true);
        UseAddToDoListAttchament({ title: title, link: link, toDoListId: todolistId }).then(() => {
            setLoading(false)
            setTitle('')
            setLink('');
            setInputOpened(false)
        })

    }

    function deleteAttchament(id: number) {
        UseDeleteToDoListAttchament(id);
    }

    return (

        <div>
            <label>
                <div className='todolist-head'>
                    <h4>Attchaments</h4>
                    <BtnActionSmall inputOpened={inputOpened} setInputOpened={setInputOpened} />
                </div>
                {inputOpened ?
                    <label className='todolist-attchament-input'>
                        <InputSimple title={'Attchament title'} input={title} setInput={setTitle} placeholder='Type a title of the attchament..' />
                        <InputUploadFile setLink={setLink} />
                        <ButtonSimple type='success' loading={loading} status={active} title={'Add attchament'} action={addAttchament} />
                    </label> : ''}
                {attchaments.length > 0 ?
                    attchaments.map((attchament: IToDoListAttchament) => (
                        <div key={attchament.id} className='todolist-attchament-list'>
                            <div className='todolist-attchament-left'>
                                <svg xmlns="http://www.w3.org/2000/svg" id="fi-rr-link" width="24" height="24.003" viewBox="0 0 24 24.003">
                                    <rect id="fi-rr-link-2" data-name="fi-rr-link" width="24" height="24" fill="none" />
                                    <path id="Vector" d="M13.847,8.819a1,1,0,0,1,1.414,1.414L12,13.5A7.028,7.028,0,1,1,2.057,3.558L5.318.293A1,1,0,1,1,6.733,1.707L3.471,4.972a5.028,5.028,0,0,0,7.111,7.109l3.262-3.262Z" transform="translate(0.001 8.448)" fill="#374957" />
                                    <path id="Vector-2" data-name="Vector" d="M13.5,2.061A7.037,7.037,0,0,1,13.5,12l-3.262,3.26a1,1,0,0,1-1.415-1.415l3.262-3.262A5.028,5.028,0,0,0,8.526,2h0A4.993,4.993,0,0,0,4.972,3.473L1.707,6.735A1,1,0,0,1,.293,5.32L3.56,2.057A6.983,6.983,0,0,1,8.528,0h0A6.979,6.979,0,0,1,13.5,2.061Z" transform="translate(8.447 0)" fill="#374957" />
                                    <path id="Vector-3" data-name="Vector" d="M7.009,0a1,1,0,0,1,.711,1.695l-6,6A1,1,0,1,1,.305,6.281l6-6A1,1,0,0,1,7.009,0Z" transform="translate(7.988 8.012)" fill="#374957" />
                                </svg>
                                <div className="task-title">{attchament.title}</div>
                            </div>
                            <div className='todolist-attchament-right'>
                                <ButtonDeleteSmall action={() => deleteAttchament(attchament.id)} />
                            </div>
                        </div>
                    ))
                    : 'No attchaments added.'}
            </label>

        </div>
    )
}

export default TodoListAttchaments