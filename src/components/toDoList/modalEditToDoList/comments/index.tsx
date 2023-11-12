import React, { useEffect, useState } from 'react'
import { IToDoListComments } from '../../../../types/toDoList/IToDoList'
import './style.scss';
import BtnActionSmall from '../../comuns/btnActionSmall';
import InputSimple from '../../../communs/inputs/simples';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import InputUploadFile from '../../../communs/inputs/uploadFile';
import ButtonDeleteSmall from '../../../communs/buttons/deleteSmall';
import DateTimeAgo from '../../../../functions/date/DateTimeAgo';
import InputDescription from '../../../communs/inputs/description';
import useAddComments from '../../../../hooks/toDoList/comments/useAddComments';
import useDeleteComments from '../../../../hooks/toDoList/comments/useDeleteComments';

interface type {
    comments: IToDoListComments[],
    todolistId: number
}

const TodolistComments = ({ comments, todolistId }: type) => {


    const UseToDoListComment = useAddComments();
    const UseDeleteComments = useDeleteComments()
    const [inputOpened, setInputOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');




    useEffect(() => {
        if (title !== '' && description !== '') {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [title, description])


    function AddComment() {
        setLoading(true);
        UseToDoListComment({ title: title, description: description, toDoListId: todolistId })
        setInputOpened(false)
    }

    function deleteComment(id: number) {
        UseDeleteComments(id)
    }

    return (

        <div>
            <label>
                <div className='todolist-head'>
                    <h4>Comments</h4>
                    <BtnActionSmall inputOpened={inputOpened} setInputOpened={setInputOpened} />
                </div>
                {inputOpened ?
                    <label className='todolist-comments-input'>
                        <InputSimple title={'Comment title'} input={title} setInput={setTitle} placeholder='Type a title of the comments..' />
                        <InputDescription title='Description' setDescription={setDescription} description={description} />
                        <ButtonSimple type='success' loading={loading} status={active} title={'Add comments'} action={AddComment} />
                    </label> : ''}
                {comments.length > 0 ?
                    comments.map((comments: IToDoListComments) => (
                        <div key={comments.id} className='todolist-comments-card'>
                            <div className='todolist-comments-left'>
                                <div className="todolist-comments-title">{comments.title}</div>
                                <div className='todolist-comments-description'>{comments.description}</div>
                                <div className='todolist-comments-date'>{DateTimeAgo(new Date(comments.createdAt))}</div>
                            </div>
                            <div className='todolist-comments-right'>
                                <ButtonDeleteSmall action={() => deleteComment(comments.id)} />
                            </div>
                        </div>
                    ))
                    : 'No comments added.'}
            </label>

        </div>
    )
}

export default TodolistComments