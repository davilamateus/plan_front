import { Dispatch, SetStateAction } from "react";
import "./style.scss";

interface type {
    content: JSX.Element;
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
}

const ButtonAdd = ({ content, setOpened, opened }: type) => {
    return (
        <div className="button-add-page ">
            <div
                onClick={() => {
                    setOpened(opened ? false : true);
                }}
                className="button-add">
                <img
                    src={`./../../../../../icons/${opened ? "close" : "add"}.svg`}
                    alt="ADD"
                />
            </div>
            {opened && (
                <>
                    <div
                        className="page-backgroud"
                        onClick={() => {
                            setOpened(false);
                        }}></div>
                    <div className="button-add-content">{content}.</div>
                </>
            )}
        </div>
    );
};

export default ButtonAdd;
