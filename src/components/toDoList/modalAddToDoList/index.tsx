import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputSimple from '../../communs/inputs/simples'
import InputDescription from '../../communs/inputs/description'
import InputColor from '../../communs/inputs/color'
import InputDate from '../../communs/inputs/date'
import './style.scss';
import ButtonSimple from '../../communs/buttons/simple/simple'
import useAddToDoList from '../../../hooks/toDoList/useAddToDoList'

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
}

const ModalAddToDoList = ({ setOpened }: type) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color, setColor] = useState('')
    const [date, setDate] = useState(new Date().getTime());
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
        <div className='modal-add-todolist'>
            <InputSimple title='Title' input={title} setInput={setTitle} placeholder='Type a title for your to do list...' />
            <InputDescription description={description} setDescription={setDescription} title='Description' />
            <InputColor title='Color' color={color} setColor={setColor} />
            <InputDate title='Date' setDate={setDate} date={date} />
            <ButtonSimple title={'Add'} type='success' status={btnStatus} loading={loading} action={addTodoList} />
        </div>
    )
}

export default ModalAddToDoList