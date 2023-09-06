import React, { Dispatch, SetStateAction } from 'react'
import './style.scss';
interface type {
    setModal: Dispatch<SetStateAction<boolean>>;
}

const ButtonAdd = ({ setModal }: type) => {
    return (
        <div className="button-add-page">
            <div className='page-container'>
                <div
                    onClick={() => { setModal(true) }}
                    className='button-add '>
                    <img src="./../../../../../icons/add.svg" alt="ADD" />

                </div>
            </div>
        </div>
    )
}

export default ButtonAdd