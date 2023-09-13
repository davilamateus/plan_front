import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import './style.scss';
import ModalAddEntrances from '../modalAdd/entraces';
import BoxFullpage from '../../communs/boxFullpage';
interface type {
    setModal: Dispatch<SetStateAction<boolean>>;
}

const ButtonAdd = ({ setModal }: type) => {

    const [show, setShow] = useState(true);
    const [element, setElement] = useState<JSX.Element>();


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
                                        setOpened={setModal}
                                    />
                                )
                            }} >
                                Entraces
                            </div>
                            <div>
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
                        setOpened={(setShow)}
                        content={element}
                    />
                    : ''}
            </div>
        </div>
    )
}

export default ButtonAdd