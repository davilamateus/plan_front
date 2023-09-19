import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import './style.scss';
import ModalAddEntrances from '../modalAdd/entraces';
import BoxFullpage from '../../communs/boxFullpage';
import ModalAddGoals from '../modalAdd/goals';
interface type {
}

const ButtonAdd = () => {

    const [show, setShow] = useState(false);
    const [element, setElement] = useState<JSX.Element | boolean>();



    useEffect(() => {

        if (show) {
            for (let i = 4; i >= 0; i--) {
                addAnimation((document.querySelectorAll('.page-container .options div').length - i) * 90, document.querySelectorAll('.page-container .options div')[i])
            }
        } else {
            setElement(undefined)
        }

    }, [show])

    function addAnimation(time: number, div: { classList: { add: (arg0: string) => void; }; }) {
        setTimeout(() => {
            div.classList.add('option-animation')
        }, time);
    }

    return (
        <div className="button-add-finance">
            <div className='page-container'>
                {
                    show ?

                        <div className={`options `}>
                            <div onClick={() => {
                                setElement(
                                    <ModalAddEntrances
                                    />
                                )
                            }} >
                                Entraces
                            </div>
                            <div onClick={() => {
                                setElement(
                                    <ModalAddGoals
                                        type={1}
                                        setOpened={setShow}
                                    />
                                )
                            }} >
                                Domestic Goals
                            </div>
                            <div>
                                Domestic Cost
                            </div>
                            <div>
                                Travel Goals
                            </div>
                            <div>
                                Travel Cost
                            </div>
                        </div>
                        : ''
                }

                <div
                    onClick={() => { setShow(show ? false : true) }}
                    className='button-add '>
                    {show ?
                        <span className='button-add-close'></span> :
                        < img src="./../../../../../icons/add.svg" alt="ADD" />
                    }
                </div>
                {element ?
                    <BoxFullpage
                        setOpened={setShow}
                        content={element}
                    />
                    : ''}
            </div>
        </div>
    )
}

export default ButtonAdd