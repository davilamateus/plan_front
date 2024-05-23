import { Dispatch, SetStateAction, useEffect } from "react";
import { IMessage } from "../../types/messages/IMenssage";
import "./style.scss";

interface MessageProps {
    message: IMessage;
    setMessage: Dispatch<SetStateAction<IMessage>>;
}

const Message = ({ message, setMessage }: MessageProps) => {
    return message.status ? (
        <div className={`message-box  color-${message.type} `}>
            <div className={` message-box-img `}>
                <img
                    src={`./../../../icons/message-${message.type}.svg`}
                    alt={message.type}
                />
            </div>
            <div className="message-box-white">
                <div className="text">
                    <h4>{message.title}</h4>
                    <p>{message.description}</p>
                    <div className={`message-time-box color-${message.type} `}></div>
                </div>
                <button
                    onClick={() => {
                        setMessage({ ...message, status: false });
                    }}
                    className="close">
                    <img
                        src="./../../../icons/btn-close.svg"
                        alt="Close"
                    />
                </button>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Message;
