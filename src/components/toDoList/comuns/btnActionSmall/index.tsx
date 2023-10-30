import React, { Dispatch, SetStateAction } from 'react'

import './style.scss';


interface type {
    inputOpened: boolean;
    setInputOpened: Dispatch<SetStateAction<boolean>>;
}
const BtnActionSmall = ({ setInputOpened, inputOpened }: type) => {
    return (
        <div className='btn-action' onClick={() => { setInputOpened(inputOpened ? false : true) }}>
            <div>
                <img src={`./../../../../icons/${inputOpened ? 'close' : 'add'}.svg`} alt="" />

            </div>
        </div>)
}

export default BtnActionSmall