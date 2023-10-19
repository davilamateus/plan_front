import { Dispatch, SetStateAction, useState } from 'react';
import './style.scss';
interface type {
    content: JSX.Element;
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
}

const ButtonAdd = ({ content, setOpened, opened }: type) => {
    return (
        <div className="button-add-page ">
            <div onClick={() => { setOpened(opened ? false : true) }}
                className='button-add'>
                {opened ?
                    <img src="./../../../../../icons/close.svg" alt="ADD" />
                    : <img src="./../../../../../icons/add.svg" alt="ADD" />
                }
            </div>
            {opened ?
                <>
                    <div className="page-backgroud" onClick={() => { setOpened(false) }}></div>
                    <div className='button-add-content'>
                        {content}
                    </div>
                </>
                : ''}

        </div>
    )
}

export default ButtonAdd