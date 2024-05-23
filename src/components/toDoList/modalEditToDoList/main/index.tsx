import { Dispatch, SetStateAction, useState } from 'react';
import { IToDoListMain } from '../../../../types/toDoList/IToDoList';
import { useEditToDoList } from '../../../../hooks/toDoList/useEditToDoList';
import InputSimple from '../../../communs/inputs/simples';
import InputDescription from '../../../communs/inputs/description';
import InputColor from '../../../communs/inputs/color';
import InputDate from '../../../communs/inputs/date';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import TodoListTask from '../task';
import TodoListAttchaments from '../attchaments';
import TodolistComments from '../comments';
import './style.scss';

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    todolist: IToDoListMain
}

const ModalEditToDoList = ({ setOpened, todolist }: type) => {

    const [toDoList, setToDoList] = useState<IToDoListMain>(todolist)
    const [loading, setLoading] = useState(false);

    const UseEditToDoList = useEditToDoList();

    const handleSubmit = () => {
        setLoading(true);
        UseEditToDoList(toDoList)
            .then(() => setOpened(false))
    }

    return (
        <div className='modal-edit-todolist'>
            <div className='content'>
                <InputSimple
                    title='Title'
                    input={toDoList.title}
                    setInput={e => setToDoList({ ...toDoList, title: e })}
                    placeholder='Type a title for your to do list...' />
                <InputDescription
                    title='Description'
                    description={toDoList.description}
                    setDescription={e => setToDoList({ ...toDoList, description: e })} />
                <InputColor
                    title='Color'
                    color={toDoList.color}
                    setColor={e => setToDoList({ ...toDoList, color: e })} />
                <InputDate
                    title='Date'
                    date={toDoList.date}
                    setDate={e => setToDoList({ ...toDoList, date: e })} />
                <TodoListTask
                    todolistId={todolist.id}
                    tasks={todolist.toDoListTasks} />
                <TodoListAttchaments
                    toDoListId={todolist.id}
                    attchaments={todolist.toDoListAttchaments} />
                <TodolistComments
                    comments={todolist.toDoListComments}
                    toDoListId={todolist.id} />
            </div>
            <div className="button">
                <ButtonSimple
                    title={'Edit'}
                    type='success'
                    status={toDoList.color.length > 0 && toDoList.date > 0 && toDoList.description.length > 0 && toDoList.title.length > 0}
                    loading={loading}
                    action={handleSubmit} />
            </div>
        </div>
    )
}

export default ModalEditToDoList;