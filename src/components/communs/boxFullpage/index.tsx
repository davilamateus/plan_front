import { Dispatch, SetStateAction } from "react";
import './style.scss'

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    content: JSX.Element | boolean;
    title: string;
}

const BoxFullpage = ({ setOpened, content, title }: type) => {




    return (
        <div
            className={`box-fullpage `}>
            <div
                className={`box-fullpage-background `}
                onClick={() => { setOpened(false) }}>
            </div>
            <div
                className={`box-fullpage-box box`}
            >
                <button
                    className="btn-close"
                    onClick={() => { setOpened(false) }}>
                    <img src="./../../../../icons/btn-close.svg" alt="close" />
                </button>
                <div className="box-fullpage-content">
                    <h3 className="title-box">{title}</h3>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default BoxFullpage