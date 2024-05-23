import { useState } from 'react';
import { IToDoListComments } from '../../../../types/toDoList/IToDoList';
import { dateTimeAgo } from '../../../../functions/date/dateTimeAgo';
import { useAddComments } from '../../../../hooks/toDoList/comments/useAddComments';
import { useDeleteComments } from '../../../../hooks/toDoList/comments/useDeleteComments';
import BtnActionSmall from '../../comuns/btnActionSmall';
import InputSimple from '../../../communs/inputs/simples';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import ButtonDeleteSmall from '../../../communs/buttons/deleteSmall';
import InputDescription from '../../../communs/inputs/description';
import './style.scss';

interface type {
    comments: IToDoListComments[],
    toDoListId: number
}

const TodolistComments = ({ comments, toDoListId }: type) => {


    const UseToDoListComment = useAddComments();
    const UseDeleteComments = useDeleteComments()
    const [inputOpened, setInputOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    const [comment, setComment] = useState({ title: '', description: '', toDoListId })







    const handleSubmit = () => {
        setLoading(true);
        UseToDoListComment(comment).
            then(() => {
                setLoading(false);
                setInputOpened(false);
                setComment({ title: '', description: '', toDoListId });
            });
    };



    return (

        <div>
            <label>
                <div className='todolist-head'>
                    <h4>Comments</h4>
                    <BtnActionSmall
                        inputOpened={inputOpened}
                        setInputOpened={setInputOpened} />
                </div>
                {inputOpened ?
                    <label className='todolist-comments-input'>
                        <InputSimple
                            title={'Comment title'}
                            input={comment.title}
                            setInput={e => setComment({ ...comment, title: e })}
                            placeholder='Type a title of the comments..' />
                        <InputDescription
                            title='Description'
                            description={comment.description}
                            setDescription={e => setComment({ ...comment, description: e })}
                        />
                        <ButtonSimple
                            type='success'
                            title={'Add comments'}
                            loading={loading}
                            status={comment.title !== '' && comment.description !== ''}
                            action={handleSubmit} />
                    </label> : ''}
                {comments.length > 0 ?
                    comments.map((comments: IToDoListComments) => (
                        <div key={comments.id} className='todolist-comments-card'>
                            <div className='todolist-comments-left'>
                                <div className="todolist-comments-title">{comments.title}</div>
                                <div className='todolist-comments-description'>{comments.description}</div>
                                <div className='todolist-comments-date'>{dateTimeAgo(new Date(comments.createdAt))}</div>
                            </div>
                            <div className='todolist-comments-right'>
                                <ButtonDeleteSmall action={() => UseDeleteComments(comments.id)} />
                            </div>
                        </div>
                    ))
                    : 'No comments added.'}
            </label>

        </div>
    )
}

export default TodolistComments