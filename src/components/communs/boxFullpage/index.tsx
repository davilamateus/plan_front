import './style.scss';
import { Dispatch, SetStateAction } from "react";

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    content: JSX.Element | boolean;
    title: string;
    button?: JSX.Element
};

const BoxFullpage = ({ setOpened, content, title, button }: type) => {
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
                <div className="box-fullpage-head">
                    <h3 className="title-box">{title}</h3>
                    <button
                        className="btn-close"
                        onClick={() => { setOpened(false) }}>
                        <img src="./../../../../icons/btn-close.svg" alt="close" />
                    </button>
                </div>
                <div className="box-fullpage-content">
                    {content}
                </div>
                <div className="box-fullpage-button">
                    {button}
                </div>
            </div>
        </div>
    )
}
export default BoxFullpage;