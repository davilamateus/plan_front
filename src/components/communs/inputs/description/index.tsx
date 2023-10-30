import React, { Dispatch, SetStateAction } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './style.scss';


interface types {
    description: string,
    title: string,
    setDescription: Dispatch<SetStateAction<string>>;
}

const InputDescription = ({ description, setDescription, title }: types) => {
    return (
        <label className='description'>
            <h4>{title}</h4>
            <TextareaAutosize
                cols={20}
                minRows={4}
                defaultValue={description}
                placeholder='Fill a description...'
                onChange={(e) => { setDescription(e.target.value) }}>
            </TextareaAutosize>

        </label>)
}

export default InputDescription