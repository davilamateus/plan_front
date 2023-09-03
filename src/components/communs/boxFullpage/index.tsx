import { Dispatch, SetStateAction, useEffect, useState } from "react";
import './style.scss'

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    content: JSX.Element
}

const BoxFullpage = ({ setOpened, content }: type) => {


    const [animation, setAnimation] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setAnimation('animation')
        }, 100);

    }, []);


    return (
        <div
            className={`box-fullpage `}>
            <div
                className={`box-fullpage-background box-fullpage-background-${animation}`}
                onClick={() => { setOpened(false) }}>
            </div>
            <div
                className={`box-fullpage-box box-fullpage-box-${animation} box`}
            >
                <button
                    className="btn-close"
                    onClick={() => { setOpened(false) }}>
                    <img src="./../../../../icons/btn-close.svg" alt="close" />
                </button>
                {content}
            </div>
        </div>
    )
}

export default BoxFullpage